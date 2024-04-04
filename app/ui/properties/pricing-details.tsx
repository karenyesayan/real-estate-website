import Link from "next/link";
import Heading from "../page-heading";
import { formatCurrency } from "@/app/lib/utils";

export const PricingDetails = () => {
  return (
    <section className="container flex flex-col gap-10 xl:gap-[60px] desktop:gap-20 pt-20 xl:pt-[120px] desktop:pt-[150px]">
      <Heading
        heading="Comprehensive Pricing Details"
        paragraph="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
      />
      <div className="flex flex-col gap-[30px] xs:gap-10 desktop:gap-[50px]">
        <div className="max-sm:px-5 max-sm:flex-col flex items-start sm:items-center gap-2.5 sm:gap-4 desktop:gap-5 rounded-lg desktop:rounded-xl ring-1 ring-inset ring-signal-black bg-graphite-black py-6 lg:py-5 desktop:py-[30px] not-italic font-medium text-sm desktop:text-lg leading-[21px] default:leading-[27px] text-[#999]">
          <strong className="max-sm:pb-[9.2px] max-sm:w-full text-white not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9 sm:pl-10 desktop:pl-[50px] pr-4 desktop:pr-5 max-sm:border-b sm:border-r border-solid border-signal-black">
            Note
          </strong>
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </div>
        <div className="flex flex-col lg:flex-row gap-5 xs:gap-10 desktop:gap-[50px]">
          <div className="flex max-w-[194px] desktop:max-w-[220px] flex-grow flex-col items-start gap-0.5">
            <span className="not-italic leading-[21px] laptop:leading-6 desktop:leading-[30px] text-sm laptop:text-base desktop:text-xl font-medium text-[#999]">
              Listing Price
            </span>
            <p className="not-italic text-2xl laptop:text-3xl desktop:text-[40px] leading-9 laptop:leading-[45px] desktop:leading-[60px] font-semibold">
              ${formatCurrency(1250000)}
            </p>
          </div>
          <div className="flex max-w-[1045px] desktop:max-w-[1326px] gap-5 laptop:gap-10 desktop:gap-[50px] flex-col flex-grow">
            <div className="rounded-xl ring-1 ring-inset ring-signal-black p-5 laptop:p-10 desktop:p-[50px]">
              <div className="w-full flex flex-col gap-[19.2px] laptop:gap-[30px] desktop:gap-10">
                <div className="pb-5 md:pb-[29.2px] desktop:pb-[39.2px] flex items-center justify-between border-b border-solid border-signal-black">
                  <div className="not-italic text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9 font-semibold">
                    Additional Fees
                  </div>
                  <div className="flex">
                    <Link
                      href="#"
                      className="inline-flex items-center space-x-1 ring-1 ring-inset ring-signal-black rounded-lg desktop:rounded-[10px] bg-graphite-black px-5 desktop:px-6 py-3.5 desktop:py-[18px] not-italic text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-violet-600"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap md:flex-nowrap">
                    <div className="flex w-full max-md:pb-[19.2px] md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4 max-md:border-b max-md:border-solid max-md:border-signal-black">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Property Transfer Tax
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          ${formatCurrency(25000)}
                        </span>
                        <span className="max-md:max-w-full max-lg:max-w-[237px] py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-md laptop:rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Based on the sale price and local regulations
                        </span>
                      </div>
                    </div>
                    <div className="w-0 border border-signal-black"></div>
                    <div className="max-md:pt-[19.2px] md:pl-5 flex flex-col items-start w-full md:w-1/2 space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Legal Fees
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          ${formatCurrency(3000)}
                        </span>
                        <span className="xl:text-nowrap py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-md laptop:rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Approximate cost for legal services, including title
                          transfer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-solid border-signal-black pt-[19.2px] md:pt-[29.2px] desktop:pt-[39.2px]">
                  <div className="flex flex-wrap md:flex-nowrap">
                    <div className="max-md:pb-[19.2px] flex flex-col items-start w-full md:w-1/2 space-y-2.5 laptop:space-y-3 desktop:space-y-4 max-md:border-b max-md:border-solid max-md:border-signal-black">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Home Inspection
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          $500
                        </span>
                        <span className="max-[385px]:hidden py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Recommended for due diligence
                        </span>
                      </div>
                    </div>
                    <div className="w-0 border border-signal-black"></div>
                    <div className="max-md:pt-[19.2px] md:pl-5 flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Property Insurance
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          ${formatCurrency(3000)}
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-md laptop:rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Annual cost for comprehensive property insurance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-solid border-signal-black pt-[19.2px] md:pt-[29.2px] desktop:pt-[39.2px]">
                  <div className="flex">
                    <div className="flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Mortgage Fees
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          Varies
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-md laptop:rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          If applicable, consult with your lender for specific
                          details
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 laptop:p-10 desktop:p-[50px] ring-1 ring-inset ring-signal-black rounded-xl">
              <div className="w-full flex flex-col gap-[19.2px] laptop:gap-[30px] desktop:gap-10">
                <div className="pb-5 md:pb-[29.2px] desktop:pb-[39.2px] flex items-center justify-between border-b border-solid border-signal-black">
                  <div className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                    Monthly Costs
                  </div>
                  <div className="flex">
                    <Link
                      href="#"
                      className="bg-graphite-black inline-flex items-center rounded-lg desktop:rounded-[10px] ring-1 ring-inset ring-signal-black px-5 desktop:px-6 py-3.5 desktop:py-[18px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-violet-600"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <div className="flex flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Property Taxes
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          ${formatCurrency(1250)}
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-md laptop:rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Approximate monthly property tax based on the sale
                          price and local rates
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-solid border-signal-black pt-5 md:pt-[29.2px] desktop:pt-[39.2px]">
                  <div className="flex">
                    <div className="flex flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Homeowners&apos; Association Fee
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          $300
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-md laptop:rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Monthly fee for common area maintenance and security
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 laptop:p-10 desktop:p-[50px] ring-1 ring-inset ring-signal-black rounded-xl">
              <div className="w-full flex flex-col gap-[19.2px] laptop:gap-[30px] desktop:gap-10">
                <div className="pb-[19.2px] md:pb-[29.2px] desktop:pb-[39.2px] flex items-center justify-between border-b border-signal-black border-solid">
                  <div className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                    Total Initial Costs
                  </div>
                  <div className="flex">
                    <Link
                      href="#"
                      className="text-nowrap py-3.5 desktop:py-[18px] px-5 desktop:px-6 bg-graphite-black ring-1 ring-inset ring-signal-black inline-flex items-center rounded-lg desktop:rounded-[10px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-violet-600"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap md:flex-nowrap">
                    <div className="max-md:pb-[19.2px] flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4 max-md:border-b max-md:border-solid max-md:border-signal-black">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Listing Price
                      </span>
                      <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                        ${formatCurrency(1250000)}
                      </span>
                    </div>
                    <div className="w-0 border border-signal-black border-solid"></div>
                    <div className="max-md:pt-[19.2px] md:pl-5 flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Additional Fees
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          ${formatCurrency(29700)}
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-md laptop:rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Property transfer tax, legal fees, inspection,
                          insurance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-signal-black border-solid pt-[19.2px] md:pt-[29.2px] desktop:pt-[39.2px]">
                  <div className="flex flex-wrap md:flex-nowrap">
                    <div className="max-md:pb-[19.2px] flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4 max-md:border-b max-md:border-solid max-md:border-signal-black">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Down Payment
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          ${formatCurrency(250000)}
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          20%
                        </span>
                      </div>
                    </div>
                    <div className="w-0 border border-signal-black border-solid"></div>
                    <div className="max-md:pt-[19.2px] md:pl-5 flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Mortgage Amount
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          ${formatCurrency(1000000)}
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          If applicable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 laptop:p-10 desktop:p-[50px] ring-1 ring-inset ring-signal-black rounded-xl">
              <div className="w-full flex flex-col gap-5 laptop:gap-[30px] desktop:gap-10">
                <div className="pb-5 md:pb-[29.2px] desktop:pb-[39.2px] flex items-center justify-between border-b border-solid border-signal-black">
                  <div className="not-italic font-semiboldtext-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                    Monthly Expenses
                  </div>
                  <div className="flex">
                    <Link
                      href="#"
                      className="text-nowrap inline-flex items-center rounded-lg desktop:rounded-[10px] ring-1 ring-inset ring-signal-black bg-graphite-black px-5 desktop:px-6 py-3.5 desktop:py-[18px] not-italic text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-violet-600"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap md:flex-nowrap">
                    <div className="max-md:pb-5 flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4 max-md:border-b max-md:border-solid max-md:border-signal-black">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Property Taxes
                      </span>
                      <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                        ${formatCurrency(1250)}
                      </span>
                    </div>
                    <div className="w-0 border border-solid border-signal-black"></div>
                    <div className="max-md:pt-5 md:pl-5 flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Homeowners&apos; Association Fee
                      </span>
                      <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                        $300
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-5 md:pt-[29.2px] desktop:pt-[39.2px] border-solid border-signal-black">
                  <div className="flex flex-wrap md:flex-nowrap">
                    <div className="max-md:pb-5 flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4 max-md:border-b max-md:border-solid max-md:border-signal-black">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Mortgage Payment
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-normal text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          Varies based on terms and interest rate
                        </span>
                        <span className="max-xl:hidden py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          If applicable
                        </span>
                      </div>
                    </div>
                    <div className="w-0 border border-solid border-signal-black"></div>
                    <div className="max-md:pt-[19.6px] md:pl-5 flex w-full md:w-1/2 flex-col items-start space-y-2.5 laptop:space-y-3 desktop:space-y-4">
                      <span className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                        Property Insurance
                      </span>
                      <div className="flex flex-row items-center gap-3 desktop:gap-4">
                        <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9">
                          $100
                        </span>
                        <span className="py-1.5 desktop:py-2 px-3 desktop:px-3.5 bg-graphite-black right-1 ring-inset ring-signal-black rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] text-[#999]">
                          Approximate monthly cost
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
