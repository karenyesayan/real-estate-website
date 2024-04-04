import Heading from "../page-heading";

const steps = [
  {
    id: "01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    id: "02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    id: "03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    id: "04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    id: "05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    id: "06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="container mb-20 xl:mb-[120px] desktop:mb-[150px] flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20"
    >
      <Heading
        heading="Navigating the Estatein Experience"
        paragraph="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
      />
      <div className="max-lg:mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-y-[30px] lg:gap-y-10 desktop:gap-y-[50px] lg:gap-x-5 desktop:gap-x-[27px]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="block max-lg:[&:nth-child(n+4)]:hidden lg:max-w-[512.33px] [&>*:first-child]:hover:bg-gradient-to-r from-indigo-500 [&>*:first-child]:hover:bg-[position:_100%_100%]"
          >
            <div className="border-l border-solid border-[#703BF7] px-4 desktop:px-5 py-3.5 desktop:py-4  not-italic font-medium text-base desktop:text-xl leading-6 desktop:leading-[30px] bg-[position:_0%_0%] bg-[size:_200%] transition-all duration-500 ease-in-out ">
              Step {step.id}
            </div>
            <div className="rounded-[0_10px_10px_10px] desktop:rounded-[0px_12px_12px_12px] bg-gradient-to-br from-[#703BF7] via-[rgba(112,59,247,0)] to-[#262626] p-[0.5px]">
              <div className="xs:h-[221px] desktop:min-h-[267px] rounded-[inherit] desktop:rounded-[inherit] border-[0.5px] border-solid border-[#262626] bg-[#141414] bg-[linear-gradient(120.79deg,_#703BF7_-49.01%,_rgba(112,59,247,0)_13.65%)] max-xs:px-[30px] max-xs:py-[28.7px] xs:p-[30px] laptop:p-10 desktop:px-[50px] desktop:py-12">
                <h5 className="mb-3.5 laptop:mb-4 desktop:mb-5 text-lg xl:text-xl desktop:text-[26px] font-semibold leading-[27px] xl:leading-[30px] desktop:leading-[39px] not-italic">
                  {step.title}
                </h5>
                <p className="line-clamp-4 text-sm xl:text-base desktop:text-lg leading-[21px] xl:leading-6 desktop:leading-[27px] not-italic font-medium text-[#999]">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
