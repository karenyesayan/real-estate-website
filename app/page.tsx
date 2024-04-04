import Hero from "./ui/home/hero";
import NavClouds from "./ui/nav-clouds";
import Properties from "./ui/home/properties";
import Testimonials from "./ui/home/testimonials";
import FAQs from "./ui/FAQ";
import CTA from "./ui/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <NavClouds />
      <Properties />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
}
