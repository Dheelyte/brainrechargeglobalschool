import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Staff from "@/components/Staff";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonials";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <About />
        <Programs />
        {/* <Staff /> */}
        <Gallery />
        <Videos />
        {/* <Testimonials /> */}
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
