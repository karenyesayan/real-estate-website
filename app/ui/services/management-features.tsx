import {
  SquaresPlusIcon,
  SwatchIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import Heading from "../page-heading";
import Card from "./card";
import CardItem from "./card-item";

export default function ManagementFeatures() {
  return (
    <section
      id="management"
      className="container flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20 mt-20 laptop:mt-[120px] desktop:mt-[150px]"
    >
      <Heading
        heading="Effortless Property Management"
        paragraph="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
      />
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 desktop:gap-[30px]">
        <Card
          title="Tenant Harmony"
          value="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
          LinkIcon={SquaresPlusIcon}
        />
        <Card
          title="Maintenance Ease"
          value="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
          LinkIcon={SwatchIcon}
        />
        <Card
          title="Financial Peace of Mind"
          value="Managing property finances can be complex. Our financial experts take care of rent collection"
          LinkIcon={SparklesIcon}
        />
        <Card
          title="Legal Guardian"
          value="Stay compliant with property laws and regulations effortlessly."
          LinkIcon={SunIcon}
        />
        <CardItem
          title="Experience Effortless Property Management"
          value="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
          href="/about"
        />
      </ul>
    </section>
  );
}
