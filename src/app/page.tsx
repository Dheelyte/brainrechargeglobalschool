import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Graduation from "@/components/Graduation";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonials";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Welcome />
        <Hero />
        <WhyUs />
        <About />
        <Programs />
        <Gallery />
        <Graduation />
        <Videos />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
