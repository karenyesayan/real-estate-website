import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import { Metadata } from "next";
import Link from "next/link";
import ContactSection from "../ui/contact/contact-section";
import OurOffices from "../ui/contact/our-offices";
import Gallery from "../ui/contact/gallery";
import CTA from "../ui/cta-section";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function Page() {
  return (
    <main>
      <section className="bg-[linear-gradient(95.93deg,_#262626_-26.82%,_rgba(38,38,38,0)_40.46%)]">
        <div className="container pt-[50px] laptop:pt-[100px] desktop:pt-[150px] pb-[50px] laptop:pb-[100px] desktop:pb-[100px]">
          <h2 className="not-italic text-[28px] md:text-[38px] desktop:text-5xl leading-[42px] md:leading-[57px] desktop:leading-[72px] font-semibold">
            Get in Touch with Estatein
          </h2>
          <p className="not-italic font-medium mt-2.5 desktop:mt-3.5 text-sm md:text-base desktop:text-lg leading-[21px] md:leading-6 desktop:leading-[27px] text-[#999]">
            Welcome to Estatein&apos;s Contact Us page. We&apos;re here to
            assist you with any inquiries, requests, or feedback you may have.
            Whether you&apos;re looking to buy or sell a property, explore
            investment opportunities, or simply want to connect, we&apos;re just
            a message away. Reach out to us, and let&apos;s start a
            conversation.
          </p>
        </div>
      </section>
      <div className="mt-1.5 desktop:mt-[10px] sm:w-full p-2.5 desktop:p-5 shadow-[0px_0px_0px_4px_#191919] sm:shadow-[0px_0px_0px_6px_#191919] desktop:shadow-[0px_0px_0px_10px_#191919] outline outline-1 outline-signal-black self-stretch items-center gap-2.5 desktop:gap-5 grid grid-cols-[repeat(auto-fill,_minmax(164px,_1fr))] min-[539px]:grid-cols-2 lg:flex">
        <Link
          href="mailto:info@estatein.com"
          target="_blank"
          aria-label="email"
          className="relative flex-[1_0_0%] text-violet-400 px-3.5 py-5 desktop:px-5 lg:py-[30px] desktop:py-10 bg-graphite-black rounded-[10px] desktop:rounded-xl ring-1 ring-signal-black ring-inset flex-col items-center gap-3.5 xl:gap-4 desktop:gap-5 flex transition-colors hover:bg-signal-black"
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
            <EnvelopeIcon className="top-[29.26829268%] left-[29.26829268%] w-5 sm:w-6 desktop:w-[34px] absolute" />
          </div>
          <p className="text-white text-center leading-[150%] laptop:leading-[150%] text-sm laptop:text-base desktop:text-xl font-semibold desktop:leading-[150%]">
            info@estatein.com
          </p>
        </Link>
        <Link
          href="tel:+11234567890"
          target="_blank"
          aria-label="phone"
          className="relative flex-[1_0_0%] text-violet-400 px-3.5 py-5 desktop:px-5 lg:py-[30px] desktop:py-10 bg-graphite-black rounded-[10px] desktop:rounded-xl ring-1 ring-signal-black ring-inset flex-col items-center gap-3.5 xl:gap-4 desktop:gap-5 flex transition-colors hover:bg-signal-black"
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
            <PhoneIcon className="top-[29.26829268%] left-[29.26829268%] w-5 sm:w-6 desktop:w-[34px] absolute" />
          </div>
          <p className="text-white text-center leading-[150%] laptop:leading-[150%] text-sm laptop:text-base desktop:text-xl font-semibold desktop:leading-[150%]">
            +1 (123) 456-7890
          </p>
        </Link>
        <Link
          href="https://www.google.com/maps/place/Manhattan,+New+York,+NY,+USA/@40.7590615,-73.969231,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu"
          aria-label="location"
          target="_blank"
          className="relative h-full flex-[1_0_0%] text-violet-400 px-3.5 py-5 desktop:px-5 lg:py-[30px] desktop:py-10 bg-graphite-black rounded-[10px] desktop:rounded-xl ring-1 ring-signal-black ring-inset flex-col items-center gap-3.5 xl:gap-4 desktop:gap-5 flex transition-colors hover:bg-signal-black"
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
            <MapPinIcon className="top-[29.26829268%] left-[29.26829268%] w-5 sm:w-6 desktop:w-[34px] absolute" />
          </div>
          <p className="text-white text-center leading-[150%] laptop:leading-[150%] text-sm laptop:text-base desktop:text-xl font-semibold desktop:leading-[150%]">
            Main Headquarters
          </p>
        </Link>
        <div className="relative h-full flex-[1_0_0%] text-violet-400 px-3.5 py-5 desktop:px-5 lg:py-[30px] desktop:py-10 bg-graphite-black rounded-[10px] desktop:rounded-xl ring-1 ring-signal-black ring-inset flex-col items-center gap-3.5 xl:gap-4 desktop:gap-5 flex transition-colors hover:bg-signal-black">
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
            <svg
              className="top-0 bottom-0 left-0 right-0 m-auto w-5 sm:w-6 desktop:w-[34px] absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="34"
              fill="none"
              viewBox="0 0 35 34"
            >
              <path
                fill="#A685FA"
                d="M17.5 31c-7.731 0-14-6.269-14-14h14v14zM3.5 3c7.731 0 14 6.269 14 14h-14V3zM17.5 31c7.731 0 14-6.269 14-14h-14v14zM31.5 17c0-7.731-6.269-14-14-14v14h14z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 laptop:gap-5 desktop:gap-[30px]">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="underline text-white text-center leading-[150%] laptop:leading-[150%] text-sm laptop:text-base desktop:text-xl font-semibold desktop:leading-[150%] [transition:color_.2s_ease] md:hover:text-[#A685FA]"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="underline text-white text-center leading-[150%] laptop:leading-[150%] text-sm laptop:text-base desktop:text-xl font-semibold desktop:leading-[150%] [transition:color_.2s_ease] md:hover:text-[#A685FA]"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              className="underline text-white text-center leading-[150%] laptop:leading-[150%] text-sm laptop:text-base desktop:text-xl font-semibold desktop:leading-[150%] [transition:color_.2s_ease] md:hover:text-[#A685FA]"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <ContactSection />
      <OurOffices />
      <Gallery />
      <CTA />
    </main>
  );
}
