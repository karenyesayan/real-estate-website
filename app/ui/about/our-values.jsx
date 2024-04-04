import {
  StarIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Heading from "../page-heading";

const values = [
  {
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
    icon: StarIcon,
  },
  {
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: AcademicCapIcon,
  },
  {
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: UserGroupIcon,
  },
  {
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service and support.",
    icon: StarIcon,
  },
];

export default function OurValues() {
  return (
    <section className="container mb-20 xl:mb-[120px] desktop:mb-[150px] grid lg:grid-cols-[32.265625%_minmax(63.046875%,_0fr)] desktop:grid-cols-[517px_minmax(999px,_0fr)] max-lg:justify-center items-start lg:items-center gap-10 xl:gap-[60px] desktop:gap-20">
      <Heading
        heading="Our Values"
        paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
      />
      <ul className="grid grid-cols-1 max-sm:[&>*:not(:first-child)]:pt-[19.2px] sm:grid-cols-2 [&>*:nth-child(1)]:border-none sm:[&>*:nth-child(2)]:border-none divide-y divide-signal-black  p-6 laptop:p-[50px] desktop:px-[60px] laptop:py-[25.6px] desktop:py-[29.6px] max-sm:gap-y-5 laptop:gap-y-[0px] desktop:gap-y-[0px] rounded-xl ring-1 ring-inset ring-dark-gray  bg-[#141414] shadow-[0px_0px_0px_6px_#191919] laptop:shadow-[0px_0px_0px_8px_#191919] desktop:shadow-[0px_0px_0px_10px_#191919]">
        {values.map((value) => {
          const LinkIcon = value.icon;
          return (
            <li
              key={value.title}
              className="flex justify-between sm:py-6 desktop:py-[30px] sm:odd:after:content-[''] sm:odd:after:w-[1px] sm:odd:after:min-h-[1em] sm:odd:after:bg-signal-black sm:odd:after:ml-6 desktop:odd:after:ml-[30px] sm:even:pl-6 desktop:even:pl-[30px]"
            >
              <div className="flex flex-col items-start min-w-0 gap-y-3.5 laptop:gap-y-4 desktop:gap-y-5">
                <div className="min-w-0 flex flex-row items-center gap-2 laptop:gap-2.5 desktop:gap-3.5">
                  <a className="p-3.5 laptop:p-4 desktop:p-5 bg-dark-gray rounded-[52px] ring-1 ring-inset ring-[#703BF7]">
                    <LinkIcon className="w-6 h-6 laptop:w-7 laptop:h-7 desktop:w-[34px] desktop:h-[34px] text-[#A685FA]" />
                  </a>
                  <p className="text-lg xl:text-xl desktop:text-2xl leading-[27px] xl:leading-[30px] desktop:leading-9 not-italic font-semibold text-[#FFF]">
                    {value.title}
                  </p>
                </div>
                <p className="text-sm xl:text-base desktop:text-lg leading-[21px] xl:leading-6 desktop:leading-[27px] not-italic font-medium text-[#999]">
                  {value.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
