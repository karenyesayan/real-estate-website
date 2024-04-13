import Link from "next/link";
import Heading from "../page-heading";
import PropCards from "../property-cards";
import { Suspense } from "react";
import { PropertiesSkeleton } from "../skeletons";

export default function Properties() {
  return (
    <section id="properties" className="pt-20 xl:pt-[120px] desktop:pt-[150px]">
      <div className="container">
        <Heading
          heading="Featured Properties"
          paragraph='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
        >
          <Link
            href="/properties"
            className="btn-primary ml-[150px] desktop:ml-[200px]"
          >
            View All Properties
          </Link>
        </Heading>
        <Suspense fallback={<PropertiesSkeleton />}>
          <PropCards />
        </Suspense>
      </div>
    </section>
  );
}
