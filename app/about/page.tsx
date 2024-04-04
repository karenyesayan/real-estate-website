import { Metadata } from "next";
import Journey from "../ui/about/journey";
import OurValues from "../ui/about/our-values";
import Achievements from "../ui/about/achievements";
import Experience from "../ui/about/experience";
import Team from "../ui/about/team";
import Clients from "../ui/about/clients";
import CTA from "../ui/cta-section";

export const metadata: Metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <main>
      <Journey />
      <OurValues />
      <Achievements />
      <Experience />
      <Team />
      <Clients />
      <CTA />
    </main>
  );
}
