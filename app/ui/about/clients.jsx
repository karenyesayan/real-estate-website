import { Squares2X2Icon, BoltIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "../swiper";
import Controler from "../slider-controler";
import Heading from "../page-heading";

const clientsList = [
  {
    id: "1",
    date: "2019",
    name: "ABC Corporation",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    description: `Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`,
  },
  {
    id: "2",
    date: "2018",
    name: "GreenTech Enterprises",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    description: `Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.`,
  },
  {
    id: "3",
    date: "2019",
    name: "ABC Corporation",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    description: `Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`,
  },
  {
    id: "4",
    date: "2018",
    name: "GreenTech Enterprises",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    description: `Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.`,
  },
  {
    id: "5",
    date: "2019",
    name: "ABC Corporation",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    description: `Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`,
  },
  {
    id: "6",
    date: "2018",
    name: "GreenTech Enterprises",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    description: `Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.`,
  },
  {
    id: "7",
    date: "2019",
    name: "ABC Corporation",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    description: `Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`,
  },
  {
    id: "8",
    date: "2018",
    name: "GreenTech Enterprises",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    description: `Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.`,
  },
  {
    id: "9",
    date: "2019",
    name: "ABC Corporation",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    description: `Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`,
  },
  {
    id: "10",
    date: "2018",
    name: "GreenTech Enterprises",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    description: `Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.`,
  },
  {
    id: "11",
    date: "2019",
    name: "ABC Corporation",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    description: `Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`,
  },
  {
    id: "12",
    date: "2018",
    name: "GreenTech Enterprises",
    href: "https://somesite.net/",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    description: `Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.`,
  },
];

export default function Clients() {
  return (
    <section id="clients" className="md:mb-[54px]">
      <div className="container">
        <Heading
          heading="Our Valued Clients"
          paragraph="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        />
        <div className="mx-auto grid grid-cols-1 pt-[34px] sm:pt-[52px] desktop:pt-[72px] lg:mx-0 lg:max-w-none">
          <Swiper
            currentEl=".clients-pagination"
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: {
                  el: ".clients-pagination-center",
                },
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
                pagination: {
                  el: ".clients-pagination-center",
                },
              },
              1024: {
                slidesPerView: 1.7,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 40,
                width: 1200,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1920: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
            }}
            navigation={{
              disabledClass: "swiper-button-disabled",
              nextEl: ".clients-button-next",
              prevEl: ".clients-button-prev",
            }}
            className="w-full pb-2 sm:pb-8 desktop:pb-[42px] lg:border-b lg:border-solid lg:border-signal-black"
          >
            {clientsList.map((client) => (
              <SwiperSlide key={client.id}>
                <article className="flex lg:max-w-[619.5px] desktop:max-w-[773.5px] flex-col items-start gap-[30px] desktop:gap-10 p-6 laptop:p-10 desktop:p-[50px] bg-dark-gray ring-1 ring-inset ring-signal-black shadow-[0_0_0_6px_#191919] laptop:shadow-[0_0_0_8px_#191919] m-1.5 lg:m-[6px_0_6px_6px] laptop:m-[8px_0_8px_8px] rounded-[10px] laptop:rounded-xl transition-colors duration-300 ease-in-out hover:border-neutral-700 hover:bg-neutral-800/30">
                  <div className="max-lg:items-stretch flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center w-full max-lg:gap-5">
                    <div className="flex flex-col items-start gap-0.5 laptop:gap-1 desktop:gap-1.5">
                      <time
                        dateTime={client.date}
                        className="not-italic font-medium text-sm xl:text-base desktop:text-lg leading-[27px] desktop:leading-[27px] text-[#999]"
                      >
                        Since {client.date}
                      </time>
                      <h3 className="not-italic text-xl xl:text-2xl desktop:text-3xl leading-[30px] xl:leading-9 desktop:leading-[45px] font-semibold  group-hover:text-gray-600">
                        <a
                          href={client.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="absolute inset-0" />
                          {client.name}
                        </a>
                      </h3>
                    </div>
                    <a
                      href={client.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary max-lg:grow text-center z-50"
                    >
                      Visit Website
                    </a>
                  </div>
                  <div className="group relative flex flex-col gap-[30px] desktop:gap-10">
                    <div className="grid grid-cols-2 items-start gap-4 laptop:gap-5 desktop:gap-[30px] divide-x-[1px] divide-signal-black">
                      <div className="flex flex-col grow gap-1 xs:gap-1.5 desktop:gap-2">
                        <a className="inline-flex items-center gap-0.5 laptop:gap-1 desktop:gap-1.5 not-italic text-xs xl:text-sm desktop:text-lg leading-[18px] xl:leading-[21px] desktop:leading-[27px] font-medium text-[#999]">
                          <Squares2X2Icon className="w-[18px] h-[18px] xl:w-5 xl:h-5 desktop:w-6 desktop:h-6 text-[#999]" />
                          Domain
                        </a>
                        <span className="not-italic font-medium text-sm xl:text-base desktop:text-xl leading-[21px] xl:leading-6 desktop:leading-[30px]">
                          {client.domain}
                        </span>
                      </div>
                      <div className="flex flex-col grow pl-5 desktop:pl-[30px] gap-1 xs:gap-1.5 desktop:gap-2">
                        <a className="inline-flex items-center gap-0.5 laptop:gap-1 desktop:gap-1.5 not-italic text-xs xl:text-sm desktop:text-lg leading-[18px] xl:leading-[21px] desktop:leading-[27px] font-medium text-[#999]">
                          <BoltIcon className="w-[18px] h-[18px] xl:w-5 xl:h-5 desktop:w-6 desktop:h-6 text-[#999]" />
                          Category
                        </a>
                        <span className="not-italic font-medium text-sm xl:text-base desktop:text-xl leading-[21px] xl:leading-6 desktop:leading-[30px]">
                          {client.category}
                        </span>
                      </div>
                    </div>
                    <div className="min-h-[159px] laptop:min-h-[157px] desktop:min-h-[155px] flex flex-col items-start p-5 xl:p-[24px] desktop:p-[30px] gap-2 xl:gap-2.5 desktop:gap-3.5 ring-1 ring-inset ring-signal-black rounded-xl">
                      <span className="not-italic font-medium text-sm xl:text-base desktop:text-lg leading-[21px] xl:leading-[27px] desktop:leading-[27px] text-[#999]">
                        What They Said 🤗
                      </span>
                      <p className="not-italic font-medium laptop:line-clamp-3 text-sm xl:text-base desktop:text-lg leading-[21px] xl:leading-6 desktop:leading-[27px]">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex-wrap max-lg:flex max-[390px]:justify-evenly max-lg:justify-between">
            <Controler
              pagination="clients-pagination"
              mobilePagination="clients-pagination-center"
              prevBtn="clients-button-prev"
              nextBtn="clients-button-next"
              controlerType="full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
