import { ImageGallery } from "../../ui/properties/Image-gallery";
import { PropertyDetails } from "@/app/ui/properties/property-details";
import { DetailsForm } from "@/app/ui/properties/details-form";
import { PricingDetails } from "@/app/ui/properties/pricing-details";
import FAQs from "@/app/ui/FAQ";
import CTA from "@/app/ui/cta-section";
import { getProperty } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Details",
};

export default async function Page({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id);

  if (!property) {
    notFound();
  }

  return (
    <main>
      <ImageGallery name={property.name} price={property.price} />
      <PropertyDetails
        name={property.name}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        area={property.area}
      />
      <DetailsForm name={property.name} />
      <PricingDetails name={property.name} price={property.price} />
      <FAQs />
      <CTA />
    </main>
  );
}
