import { site } from "@/lib/site";
import { getChannelVideos } from "@/lib/youtube";
import Reveal from "./Reveal";
import VideoWall from "./VideoWall";

export default async function Videos() {
  const { videos, shorts, isLive } = await getChannelVideos();

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-gradient-to-b from-brand-800 to-brand-900 py-20 lg:py-28"
    >
      <div className="blob -right-10 top-10 h-80 w-80 bg-brand-500/40" />
      <div className="blob -left-10 bottom-10 h-72 w-72 bg-accent-500/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Watch & Subscribe
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem]">
            See our school in action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Events, classrooms and everyday joy - fresh from our YouTube channel.
          </p>
          <a
            href={site.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-coral-500/30 transition hover:-translate-y-0.5"
          >
            <span className="text-lg">▶</span> Subscribe on YouTube
          </a>
        </Reveal>

        <VideoWall videos={videos} shorts={shorts} isLive={isLive} />
      </div>
    </section>
  );
}
