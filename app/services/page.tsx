import NavClouds from "../ui/nav-clouds";
import ServicesValues from "../ui/services/services-values";
import ManagementFeatures from "../ui/services/management-features";
import InvestmentsFeatures from "../ui/services/investments-features";
import CTA from "../ui/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default async function Page() {
  return (
    <main>
      <section className="bg-[linear-gradient(95.93deg,_#262626_-26.82%,_rgba(38,38,38,0)_40.46%)]">
        <div className="container pt-[50px] laptop:pt-[100px] desktop:pt-[150px] pb-[50px] laptop:pb-[100px] desktop:pb-[100px]">
          <h2 className="not-italic text-[28px] md:text-[38px] desktop:text-5xl leading-[42px] md:leading-[57px] desktop:leading-[72px] font-semibold">
            Elevate Your Real Estate Experience
          </h2>
          <p className="not-italic font-medium mt-2.5 desktop:mt-3.5 text-sm md:text-base desktop:text-lg leading-[21px] md:leading-6 desktop:leading-[27px] text-[#999]">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </section>
      <NavClouds />
      <ServicesValues />
      <ManagementFeatures />
      <InvestmentsFeatures />
      <CTA />
    </main>
  );
}
