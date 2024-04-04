import {
  ChartBarIcon,
  ChartPieIcon,
  CircleStackIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";
import Heading from "../page-heading";
import Card from "./card";
import CardItem from "./card-item";

export default function ServicesValues() {
  return (
    <section
      id="services"
      className="container flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20 mt-20 laptop:mt-[120px] desktop:mt-[150px]"
    >
      <Heading
        heading="Unlock Property Value"
        paragraph="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
      />
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 desktop:gap-[30px]">
        <Card
          title="Valuation Mastery"
          value="Discover the true worth of your property with our expert valuation services."
          LinkIcon={ChartBarIcon}
        />
        <Card
          title="Strategic Marketing"
          value="Selling a property requires more than just a listing; it demands a strategic marketing approach."
          LinkIcon={ChartPieIcon}
        />
        <Card
          title="Negotiation Wizardry"
          value="Negotiating the best deal is an art, and our negotiation experts are masters of it."
          LinkIcon={CircleStackIcon}
        />
        <Card
          title="Closing Success"
          value="A successful sale is not complete until the closing. We guide you through the intricate closing process."
          LinkIcon={MegaphoneIcon}
        />
        <CardItem
          title="Unlock the Value of Your Property Today"
          value="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
          href="/properties"
        />
      </ul>
    </section>
  );
}
