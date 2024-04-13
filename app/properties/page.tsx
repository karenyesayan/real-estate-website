import SearchBar from "../ui/properties/search-bar";
import Heading from "../ui/page-heading";
import PropCards from "../ui/property-cards";
import ContactForm from "../ui/properties/contact-form";
import CTA from "../ui/cta-section";
import { Suspense } from "react";
import { PropertiesSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
};

export default async function Page() {
  return (
    <main>
      <section className="bg-[linear-gradient(95.93deg,_#262626_-26.82%,_rgba(38,38,38,0)_40.46%)] border-b border-solid border-signal-black">
        <div className="container pt-[50px] laptop:pt-[100px] desktop:pt-[150px] pb-[49.2px] lg:pb-[129.2px] desktop:pb-[159.2px]">
          <h2 className="not-italic text-[28px] md:text-[38px] desktop:text-5xl leading-[42px] md:leading-[57px] desktop:leading-[72px] font-semibold">
            Find Your Dream Property
          </h2>
          <p className="not-italic font-medium mt-2.5 desktop:mt-3.5 text-sm md:text-base desktop:text-lg leading-[21px] md:leading-6 desktop:leading-[27px] text-[#999]">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
      </section>
      <SearchBar />
      <section
        id="portfolio"
        className="container mt-20 lg:mt-7 xl:mt-[68px] desktop:mt-[98px]"
      >
        <Heading
          heading="Discover a World of Possibilities"
          paragraph="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
        />
        <Suspense fallback={<PropertiesSkeleton />}>
          <PropCards cardType="min" />
        </Suspense>
      </section>
      <ContactForm />
      <CTA />
    </main>
  );
}
