import {
  BuildingStorefrontIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  SunIcon,
} from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const cloudLinks = [
  {
    name: "Store",
    description: "Find Your Dream Home",
    href: "/properties",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Banknote",
    description: "Unlock Property Value",
    href: "/properties",
    icon: BanknotesIcon,
  },
  {
    name: "Office",
    description: "Effortless Property Management",
    href: "/about",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Sun",
    description: "Smart Investments, Informed Decisions",
    href: "/about",
    icon: SunIcon,
  },
];

export default function NavClouds() {
  return (
    <div
      id="features"
      className="max-sm:rounded-xl mt-1.5 desktop:mt-[10px] max-sm:mx-[15px] sm:w-full p-2.5 desktop:p-5 shadow-[0px_0px_0px_4px_#191919] sm:shadow-[0px_0px_0px_6px_#191919] desktop:shadow-[0px_0px_0px_10px_#191919] outline outline-b-1 outline-signal-black self-stretch items-center gap-2.5 desktop:gap-5 grid grid-cols-[repeat(auto-fill,_minmax(164px,_1fr))] sm:grid-cols-2 lg:flex"
    >
      {cloudLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-label={link.description}
            className="relative flex-[1_0_0%] text-violet-400 px-3.5 py-5 desktop:px-5 sm:py-[30px] desktop:py-10 bg-graphite-black rounded-[10px] desktop:rounded-xl ring-1 ring-signal-black ring-inset flex-col items-center gap-3.5 xl:gap-4 desktop:gap-5 flex transition-colors hover:bg-signal-black"
          >
            <ArrowUpRightIcon className="text-grey-30 w-[26px] desktop:w-[34px] absolute top-5 right-5 hover:text-white" />
            <div className="relative">
              <svg
                className="w-12 h-12 sm:w-[60px] sm:h-[60px] desktop:w-[82px] desktop:h-[82px]"
                xmlns="http://www.w3.org/2000/svg"
                width="82"
                height="82"
                fill="none"
                viewBox="0 0 83 82"
              >
                <rect
                  width="81"
                  height="81"
                  x="1"
                  y="0.5"
                  stroke="url(#paint0_linear_121_1892)"
                  rx="40.5"
                ></rect>
                <rect
                  width="81"
                  height="81"
                  x="1"
                  y="0.5"
                  stroke="url(#paint1_linear_121_1892)"
                  rx="40.5"
                ></rect>
                <rect
                  width="61"
                  height="61"
                  x="11"
                  y="10.5"
                  stroke="url(#paint2_linear_121_1892)"
                  rx="30.5"
                ></rect>
                <rect
                  width="61"
                  height="61"
                  x="11"
                  y="10.5"
                  stroke="url(#paint3_linear_121_1892)"
                  rx="30.5"
                ></rect>
                <defs>
                  <linearGradient
                    id="paint0_linear_121_1892"
                    x1="7.25"
                    x2="86.25"
                    y1="86.5"
                    y2="-5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A685FA"></stop>
                    <stop
                      offset="0.324"
                      stopColor="#A685FA"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_121_1892"
                    x1="82.25"
                    x2="7.25"
                    y1="-10.5"
                    y2="82"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A685FA"></stop>
                    <stop
                      offset="0.577"
                      stopColor="#A685FA"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_121_1892"
                    x1="3.75"
                    x2="72.25"
                    y1="13.5"
                    y2="72"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A685FA"></stop>
                    <stop
                      offset="0.324"
                      stopColor="#A685FA"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_121_1892"
                    x1="84.75"
                    x2="12.75"
                    y1="86"
                    y2="35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A685FA"></stop>
                    <stop
                      offset="0.577"
                      stopColor="#A685FA"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <LinkIcon className="top-[29.26829268%] left-[29.26829268%] w-5 sm:w-6 desktop:w-[34px] absolute" />
            </div>
            <p className="max-xl:min-h-[42px] text-white text-center leading-[150%] laptop:leading-[150%] text-sm laptop:text-base desktop:text-xl font-semibold desktop:leading-[150%]">
              {link.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
