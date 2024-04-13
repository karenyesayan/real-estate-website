"use client";

import {
  ChevronDownIcon,
  MapPinIcon,
  HomeModernIcon,
  CubeIcon,
  CalendarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((key: string, term: string) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(key, term);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleFilter = (key: string, term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(key, term);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="categories"
      role="search"
      className="max-w-full mx-auto relative lg:top-[-52px] max-lg:pt-10"
    >
      <div className="container flex flex-col max-lg:gap-5 items-center">
        <label
          htmlFor="property-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Your Email
        </label>
        <div className="relative w-full lg:w-[85.9375%] desktop:w-[81.45363409%]">
          <input
            type="search"
            id="property-search"
            className="block border-0 py-[22px] lg:py-[25.5px] desktop:py-[33.5px] w-full z-20 not-italic font-medium text-base xl:text-xl desktop:text-2xl leading-6 xl:leading-[30px] desktop:leading-9 text-[#666666] bg-dark-gray rounded-xl lg:rounded-[12px_12px_0_0] ring-1 ring-inset ring-signal-black shadow-[0_0_0_4px_#191919] lg:shadow-[0_0_0_10px_#191919] focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-[#666666]"
            placeholder="Search For A Property"
            onChange={(e) => {
              handleSearch("query", e.target.value);
            }}
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 desktop:gap-2 absolute py-3.5 desktop:py-[18px] px-5 desktop:px-6 top-2.5 lg:top-4 desktop:top-5 end-2.5 lg:end-4 desktop:end-5 p-2.5 text-sm font-medium bg-[#703BF7] rounded-lg desktop:rounded-[10px] hover:bg-indigo-500"
          >
            <MagnifyingGlassIcon className="w-5 h-5 desktop:w-6 desktop:h-6" />
            <span className="sr-only lg:not-sr-only not-italic font-medium text-sm desktop:text-[18px] leading-[21px] desktop:leading-[27px]">
              Find Property
            </span>
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 items-start p-5 lg:px-2.5 lg:pt-3 desktop:pt-5 lg:pb-2.5 gap-5 lg:gap-2.5 xl:gap-5 bg-[#191919] rounded-xl">
          <div>
            <label
              htmlFor="location"
              className="sr-only block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex gap-2 desktop:gap-2.5 items-center ps-3.5 desktop:ps-5 pointer-events-none">
                <MapPinIcon className="text-[#999] w-5 desktop:w-6 h-5 desktop:h-6" />
                <div className="h-[21px] desktop:h-[27px] min-h-[1em] w-px  bg-signal-black"></div>
              </div>
              <select
                id="location"
                name="location"
                defaultValue=""
                className="w-full h-full rounded-lg desktop:rounded-xl border-0 bg-dark-gray bg-none py-[15.5px] desktop:py-[22.5px] px-3.5 desktop:px-5 text-[#999] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] indent-9 desktop:indent-11"
              >
                <option value="" disabled>
                  Location
                </option>
              </select>
              <div className="pointer-events-none absolute right-3.5 xl:right-5 top-[23.07692308%] desktop:top-[27.77777778%] p-1 bg-graphite-black rounded-[46px]">
                <ChevronDownIcon
                  className="h-full w-5 desktop:w-6 text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="property"
              className="sr-only block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Property Type
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex gap-2 desktop:gap-2.5 items-center ps-3.5 desktop:ps-5 pointer-events-none">
                <HomeModernIcon className="text-[#999] w-5 desktop:w-6 h-5 desktop:h-6" />
                <div className="h-[21px] desktop:h-[27px] min-h-[1em] w-px  bg-signal-black"></div>
              </div>
              <select
                onChange={(e) => {
                  handleFilter("type", e.target.value);
                }}
                id="property"
                name="property"
                defaultValue=""
                className="w-full h-full rounded-lg desktop:rounded-xl border-0 bg-dark-gray bg-none py-[15.5px] desktop:py-[22.5px] px-3.5 desktop:px-5 text-[#999] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] indent-9 desktop:indent-11"
              >
                <option value="" disabled>
                  Property Type
                </option>
                <option value="Villa">Villa</option>
              </select>
              <div className="pointer-events-none absolute right-3.5 xl:right-5 top-[23.07692308%] desktop:top-[27.77777778%] p-1 bg-graphite-black rounded-[46px]">
                <ChevronDownIcon
                  className="h-full w-5 desktop:w-6 text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="pricing-range"
              className="sr-only block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Pricing Range
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex gap-2 desktop:gap-2.5 items-center ps-3.5 desktop:ps-5 pointer-events-none">
                <BanknotesIcon className="text-[#999] w-5 desktop:w-6 h-5 desktop:h-6" />
                <div className="h-[21px] desktop:h-[27px] min-h-[1em] w-px  bg-signal-black"></div>
              </div>
              <select
                onChange={(e) => {
                  handleFilter("price", e.target.value);
                }}
                id="pricing-range"
                name="pricing-range"
                defaultValue=""
                className="w-full h-full rounded-lg desktop:rounded-xl border-0 bg-dark-gray bg-none py-[15.5px] desktop:py-[22.5px] px-3.5 desktop:px-5 text-[#999] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] indent-9 desktop:indent-11"
              >
                <option value="" disabled>
                  Pricing Range
                </option>
                <option value="0-550000">0-550000</option>
              </select>
              <div className="pointer-events-none absolute right-3.5 xl:right-5 top-[23.07692308%] desktop:top-[27.77777778%] p-1 bg-graphite-black rounded-[46px]">
                <ChevronDownIcon
                  className="h-full w-5 desktop:w-6 text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="property-size"
              className="sr-only block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Property Size
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex gap-2 desktop:gap-2.5 items-center ps-3.5 desktop:ps-5 pointer-events-none">
                <CubeIcon className="text-[#999] w-5 desktop:w-6 h-5 desktop:h-6" />
                <div className="h-[21px] desktop:h-[27px] min-h-[1em] w-px  bg-signal-black"></div>
              </div>
              <select
                onChange={(e) => {
                  handleFilter("size", e.target.value);
                }}
                id="property-size"
                name="property-size"
                defaultValue=""
                className="w-full h-full rounded-lg desktop:rounded-xl border-0 bg-dark-gray bg-none py-[15.5px] desktop:py-[22.5px] px-3.5 desktop:px-5 text-[#999] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] indent-9 desktop:indent-11"
              >
                <option value="" disabled>
                  Property Size
                </option>
                <option value="0-2000">0-2000</option>
                <option value="2000-2500">2000-2500</option>
                <option value="2500-3000">2500-3000</option>
              </select>
              <div className="pointer-events-none absolute right-3.5 xl:right-5 top-[23.07692308%] desktop:top-[27.77777778%] p-1 bg-graphite-black rounded-[46px]">
                <ChevronDownIcon
                  className="h-full w-5 desktop:w-6 text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="build-year"
              className="sr-only block not-italic text-base desktop:text-xl font-semibold leading-6 desktop:leading-[30px]"
            >
              Build Year
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 gap-2 desktop:gap-2.5 flex items-center ps-3.5 desktop:ps-5 pointer-events-none">
                <CalendarIcon className="text-[#999] w-5 desktop:w-6 h-5 desktop:h-6" />
                <div className="h-[21px] desktop:h-[27px] min-h-[1em] w-px  bg-signal-black"></div>
              </div>
              <select
                id="build-year"
                name="build-year"
                defaultValue=""
                className="w-full h-full rounded-lg desktop:rounded-xl border-0 bg-dark-gray bg-none py-[15.5px] desktop:py-[22.5px] px-3.5 desktop:px-5 text-[#999] ring-1 ring-inset ring-signal-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] indent-9 desktop:indent-11"
              >
                <option value="" disabled>
                  Build Year
                </option>
              </select>
              <div className="pointer-events-none absolute right-3.5 xl:right-5 top-[23.07692308%] desktop:top-[27.77777778%] p-1 bg-graphite-black rounded-[46px]">
                <ChevronDownIcon
                  className="h-full w-5 desktop:w-6 text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
