"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Heading from "../page-heading";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      id="achievements"
      className="container xs:pb-2 xl:pb-12 desktop:pb-[54px] flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20 mt-20 laptop:mt-[120px] desktop:mt-[150px]"
    >
      <Heading
        heading="Let's Make it Happen"
        paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
      />
      <form
        action="#"
        method="POST"
        className="mx-auto w-full p-5 laptop:p-[50px] desktop:p-[100px] ring-1 ring-inset ring-signal-black rounded-xl"
      >
        <div className="grid grid-cols-1 gap-y-5 laptop:gap-y-[30px] desktop:gap-y-[50px] gap-x-5 laptop:gap-x-[30px] desktop:gap-x-[50px] lg:grid-cols-4">
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
              htmlFor="preferred-location"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Preferred Location
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <select
                id="preferred-location"
                name="preferred-location"
                defaultValue=""
                className="w-full h-full rounded-md desktop:rounded-lg border-0 bg-graphite-black bg-none py-4 desktop:py-6 px-5 text-[#666] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              >
                <option value="" disabled>
                  Select Location
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
              htmlFor="property-type"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Property Type
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <select
                id="property-type"
                name="property-type"
                defaultValue=""
                className="w-full h-full rounded-md desktop:rounded-lg border-0 bg-graphite-black bg-none py-4 desktop:py-6 px-5 text-[#666] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              >
                <option value="" disabled>
                  Select Property Type
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
              htmlFor="bathrooms"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              No. of Bathrooms
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <select
                id="bathrooms"
                name="bathrooms"
                defaultValue=""
                className="w-full h-full rounded-md desktop:rounded-lg border-0 bg-graphite-black bg-none py-4 desktop:py-6 px-5 text-[#666] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              >
                <option value="" disabled>
                  Select no. of Bedrooms
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
              htmlFor="bedrooms"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              No. of Bedrooms
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <select
                id="bedrooms"
                name="bedrooms"
                defaultValue=""
                className="w-full h-full rounded-md desktop:rounded-lg border-0 bg-graphite-black bg-none py-4 desktop:py-6 px-5 text-[#666] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              >
                <option value="" disabled>
                  Select no. of Bedrooms
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
          <div className="lg:col-span-2">
            <label
              htmlFor="budget"
              className="block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Budget
            </label>
            <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4">
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full h-full rounded-md desktop:rounded-lg border-0 bg-graphite-black bg-none py-4 desktop:py-6 px-5 text-[#666] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5"
              >
                <option value="" disabled>
                  Select Budget
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
          <div className="lg:col-span-2">
            <fieldset className="flex flex-col sm:flex-row">
              <legend className="not-italic font-semibold text-base desktop:text-xl leading-6 desktop:leading-[30px] ">
                Preferred Contact Method
              </legend>
              <label htmlFor="preferred-phone"></label>
              <div className="relative mt-2.5 laptop:mt-3.5 desktop:mt-4 grow sm:mr-[16.50px] desktop:mr-[15.5px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 desktop:ps-6 pointer-events-none">
                  <PhoneIcon className="w-5 desktop:w-6 h-5 desktop:h-6" />
                </div>
                <input
                  id="preferred-phone"
                  name="preferred-phone"
                  type="tel"
                  autoComplete="tel"
                  className="ring-1 ring-inset border-0 ring-signal-black bg-graphite-black text-[#666] not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5 rounded-md desktop:rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full py-4 desktop:py-6 px-5 desktop:px-6 indent-[26px] desktop:indent-9 placeholder-[#666] bg-[radial-gradient(circle_at_95%,_transparent_6.5px,_#703BF7_7px,_transparent_8px)] sm:bg-[radial-gradient(circle_at_87.83269962%,_transparent_6.5px,_#703BF7_7px,_transparent_8px)] focus:bg-[radial-gradient(circle_at_95%,_#703BF7_7px,_transparent_8px)] sm:focus:bg-[radial-gradient(circle_at_87.83269962%,_#703BF7_7px,_transparent_8px)]"
                  placeholder="Enter Your Number"
                />
              </div>
              <label htmlFor="preferred-email"></label>
              <div className="relative mt-4 sm:mt-2.5 laptop:mt-3.5 desktop:mt-4 grow">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 desktop:ps-6 pointer-events-none">
                  <EnvelopeIcon className="w-5 desktop:w-6 h-5 desktop:h-6" />
                </div>
                <input
                  id="preferred-email"
                  name="preferred-email"
                  type="email"
                  autoComplete="email"
                  className="bg-graphite-black border-0 ring-1 ring-inset ring-signal-black text-[#666] not-italic font-medium text-sm desktop:text-lg leading-5 desktop:leading-5 rounded-md desktop:rounded-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full py-4 desktop:py-6 px-5 desktop:px-6 indent-[26px] desktop:indent-9 placeholder-[#666] bg-[radial-gradient(circle_at_95%,_transparent_6.5px,_#703BF7_7px,_transparent_8px)] sm:bg-[radial-gradient(circle_at_87.83269962%,_transparent_6.5px,_#703BF7_7px,_transparent_8px)] focus:bg-[radial-gradient(circle_at_95%,_#703BF7_7px,_transparent_8px)] sm:focus:bg-[radial-gradient(circle_at_87.83269962%,_#703BF7_7px,_transparent_8px)]"
                  placeholder="Enter Your Email"
                />
              </div>
            </fieldset>
          </div>
          <div className="lg:col-span-4">
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
