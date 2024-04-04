import { ImageGallery } from "../../ui/properties/Image-gallery";
import { PropertyDetails } from "@/app/ui/properties/property-details";
import { DetailsForm } from "@/app/ui/properties/details-form";
import { PricingDetails } from "@/app/ui/properties/pricing-details";
import FAQs from "@/app/ui/FAQ";
import CTA from "@/app/ui/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Details",
};

export default async function Page() {
  return (
    <main>
      <ImageGallery />
      <PropertyDetails />
      <DetailsForm />
      <PricingDetails />
      <FAQs />
      <CTA />
    </main>
  );
}
