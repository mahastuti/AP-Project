import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Insights from "@/components/Insights";
import Testimonial from "@/components/Testimonial";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Metrics />
        <Features />
        <Workflow />
        <Insights />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
