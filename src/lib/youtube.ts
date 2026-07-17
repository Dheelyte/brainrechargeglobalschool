/**
 * YouTube auto-pull.
 *
 * Set these in a `.env.local` file (see .env.example) to show your real videos:
 *   YOUTUBE_API_KEY=...
 *   YOUTUBE_CHANNEL_ID=UC...
 *
 * Until then, the site shows clearly-labelled sample placeholders so you can
 * see the layout. Regular videos and Shorts (<= 60s) are separated automatically.
 */

export type YTVideo = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  isShort: boolean;
  placeholder?: boolean;
};

const API = "https://www.googleapis.com/youtube/v3";

/** Parse an ISO-8601 duration (e.g. "PT1M5S") into total seconds. */
function durationToSeconds(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  const [, h, min, s] = m;
  return (+(h || 0)) * 3600 + (+(min || 0)) * 60 + +(s || 0);
}

function placeholderVideos(): YTVideo[] {
  // Landscape crop for the 16:9 featured tiles.
  const wideImg = (id: string) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
  // Portrait 9:16 crop so Shorts tiles stay sharp instead of being
  // zoomed in from a landscape source.
  const shortImg = (id: string) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=540&h=960&q=80`;
  const wide = [
    ["School Open Day Highlights", "1503676260728-1c00da094a0b"],
    ["Our Annual Cultural Festival", "1564429097439-e93896886f0d"],
    ["A Day in the Life at BRGS", "1509062522246-3755977927d7"],
    ["Inter-House Sports Competition", "1571260899304-425eee4c7efc"],
    ["Science Fair Project Showcase", "1577896851231-70ef18881754"],
    ["Graduation & Prize-Giving Day", "1523580494863-6f3031224c94"],
  ];
  const shorts = [
    ["Morning Assembly 🎶", "1513364776144-60967b0f800f"],
    ["Art Class Magic 🎨", "1452860606245-08befc0ff44b"],
    ["Reading Corner 📚", "1544717297-fa95b6ee9643"],
    ["Playground Fun ⚽", "1526676037777-05a232554f77"],
  ];
  return [
    ...wide.map(([title, id], i) => ({
      id: `placeholder-w-${i}`,
      title,
      thumbnail: wideImg(id),
      publishedAt: new Date().toISOString(),
      isShort: false,
      placeholder: true,
    })),
    ...shorts.map(([title, id], i) => ({
      id: `placeholder-s-${i}`,
      title,
      thumbnail: shortImg(id),
      publishedAt: new Date().toISOString(),
      isShort: true,
      placeholder: true,
    })),
  ];
}

export async function getChannelVideos(): Promise<{
  videos: YTVideo[];
  shorts: YTVideo[];
  isLive: boolean;
}> {
  const key = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!key || !channelId) {
    const all = placeholderVideos();
    return {
      videos: all.filter((v) => !v.isShort),
      shorts: all.filter((v) => v.isShort),
      isLive: false,
    };
  }

  try {
    // 1) Find the channel's "uploads" playlist.
    const chRes = await fetch(
      `${API}/channels?part=contentDetails&id=${channelId}&key=${key}`,
      { next: { revalidate: 3600 } },
    );
    const chData = await chRes.json();
    const uploads =
      chData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploads) throw new Error("No uploads playlist found");

    // 2) Get recent uploads.
    const plRes = await fetch(
      `${API}/playlistItems?part=contentDetails&playlistId=${uploads}&maxResults=24&key=${key}`,
      { next: { revalidate: 3600 } },
    );
    const plData = await plRes.json();
    const ids: string[] = (plData.items || [])
      .map((it: { contentDetails?: { videoId?: string } }) => it.contentDetails?.videoId)
      .filter(Boolean);
    if (ids.length === 0) throw new Error("No uploads");

    // 3) Fetch details (snippet + duration) to classify Shorts.
    const vRes = await fetch(
      `${API}/videos?part=snippet,contentDetails&id=${ids.join(",")}&key=${key}`,
      { next: { revalidate: 3600 } },
    );
    const vData = await vRes.json();

    const all: YTVideo[] = (vData.items || []).map(
      (it: {
        id: string;
        snippet: {
          title: string;
          publishedAt: string;
          thumbnails: Record<string, { url: string }>;
        };
        contentDetails: { duration: string };
      }) => {
        const t = it.snippet.thumbnails;
        const thumb =
          t.maxres?.url || t.high?.url || t.medium?.url || t.default?.url;
        const seconds = durationToSeconds(it.contentDetails.duration);
        return {
          id: it.id,
          title: it.snippet.title,
          thumbnail: thumb,
          publishedAt: it.snippet.publishedAt,
          isShort: seconds > 0 && seconds <= 60,
        };
      },
    );

    return {
      videos: all.filter((v) => !v.isShort),
      shorts: all.filter((v) => v.isShort),
      isLive: true,
    };
  } catch (err) {
    console.error("[youtube] falling back to placeholders:", err);
    const all = placeholderVideos();
    return {
      videos: all.filter((v) => !v.isShort),
      shorts: all.filter((v) => v.isShort),
      isLive: false,
    };
  }
}
