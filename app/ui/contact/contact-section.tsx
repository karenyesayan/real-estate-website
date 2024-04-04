"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Heading from "../page-heading";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      id="contact-section"
      className="container xs:pb-2 xl:pb-12 desktop:pb-[54px] flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20 mt-20 laptop:mt-[120px] desktop:mt-[150px]"
    >
      <Heading
        heading="Let's Connect"
        paragraph="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
      />
      <form
        action="#"
        method="POST"
        className="mx-auto w-full p-5 laptop:p-20 desktop:p-[100px] ring-1 ring-inset ring-signal-black rounded-xl"
      >
        <div className="grid grid-cols-1 gap-y-5 laptop:gap-y-[30px] desktop:gap-y-[50px] gap-x-5 laptop:gap-x-[30px] desktop:gap-x-[50px] lg:grid-cols-3">
          <div>
            <label
              htmlFor="first-name"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              First Name
            </label>
            <div className="mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Enter First Name"
                className="block w-full rounded-md desktop:rounded-lg border-0 px-5 py-4 desktop:py-6 bg-graphite-black ring-1 ring-inset ring-signal-black text-[#666] placeholder:text-[#666] focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Last Name
            </label>
            <div className="mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Enter Last Name"
                className="block w-full rounded-md desktop:rounded-lg border-0 px-5 py-4 desktop:py-6 bg-graphite-black text-[#666]  ring-1 ring-inset ring-signal-black placeholder:text-[#666] focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Email
            </label>
            <div className="mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Enter your Email"
                className="block w-full rounded-md desktop:rounded-lg border-0 px-5 py-4 desktop:py-6 bg-graphite-black text-[#666] ring-1 ring-inset ring-signal-black placeholder:text-[#666] focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Phone
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                placeholder="Enter Phone Number"
                className="block w-full rounded-md desktop:rounded-lg border-0 px-5 py-4 desktop:py-6 bg-graphite-black text-[#666] ring-1 ring-inset ring-signal-black placeholder:text-[#666] focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              />
            </div>
          </div>
          <div className="h-max">
            <label
              htmlFor="inquiry-type"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Inquiry Type
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <select
                id="inquiry-type"
                name="inquiry-type"
                defaultValue=""
                className="w-full h-full rounded-md desktop:rounded-lg border-0 bg-graphite-black bg-none py-4 desktop:py-6 px-5 text-[#666] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              >
                <option value="" disabled>
                  Select Inquiry Type
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <ChevronDownIcon
                className="pointer-events-none absolute right-3 top-0 h-full w-5 desktop:w-6 text-white"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="h-max">
            <label
              htmlFor="question"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              How Did You Hear About Us?
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <select
                id="question"
                name="question"
                defaultValue=""
                className="w-full h-full rounded-md desktop:rounded-lg border-0 bg-graphite-black bg-none py-4 desktop:py-6 px-5 text-[#666] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <ChevronDownIcon
                className="pointer-events-none absolute right-3 top-0 h-full w-5 desktop:w-6 text-white"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <label
              htmlFor="message"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Message
            </label>
            <div className="mt-2.5 laptop:mt-4">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md desktop:rounded-lg border-0 py-4 desktop:py-6 px-5 bg-graphite-black text-[#666]  ring-1 ring-inset ring-signal-black placeholder:text-[#666] focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 sm:leading-5"
                defaultValue={"Enter your Message here.."}
              />
            </div>
          </div>
        </div>
        <div className="mt-[30px] desktop:mt-[50px] flex flex-col md:flex-row justify-between items-start max-md:gap-5">
          <div className="flex gap-x-1.5 desktop:gap-x-2.5">
            <div className="flex h-6 items-center">
              <input
                id="contact-checkbox"
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className={clsx(
                  "flex bg-graphite-black border-0 w-6 desktop:w-7 h-6 desktop:h-7 flex-none cursor-pointer rounded-[4px] ring-1 ring-inset ring-signal-black transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  {
                    "bg-indigo-600": agreed,
                  }
                )}
              />
            </div>
            <label
              htmlFor="contact-checkbox"
              className="not-italic font-medium text-sm laptop:text-base desktop:text-lg leading-[21px] laptop:leading-6 desktop:leading-[27px] text-[#999]"
            >
              I agree with{" "}
              <Link
                href="#"
                className="underline not-italic font-medium text-sm laptop:text-base desktop:text-lg leading-[21px] laptop:leading-6 desktop:leading-[27px] text-[#999] hover:text-indigo-600"
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline not-italic font-medium text-sm laptop:text-base desktop:text-lg leading-[21px] laptop:leading-6 desktop:leading-[27px] text-[#999] hover:text-indigo-600"
              >
                Privacy&nbsp;Policy
              </Link>
              .
            </label>
          </div>
          <button
            type="submit"
            className="block max-md:w-full rounded-md desktop:rounded-lg bg-[#703BF7] py-3.5 desktop:py-[18px] px-[34px] desktop:px-[46px] not-italic text-center text-sm desktop:text-lg leading-6 desktop:leading-6 font-medium  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </section>
  );
}
