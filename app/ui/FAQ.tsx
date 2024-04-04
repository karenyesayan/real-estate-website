import Link from "next/link";
import Controler from "./slider-controler";
import Heading from "./page-heading";
import { Swiper, SwiperSlide } from "./swiper";

const faqs = [
  {
    id: "1",
    href: "#",
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    id: "2",
    href: "#",
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    id: "3",
    href: "#",
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    id: "4",
    href: "#",
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    id: "5",
    href: "#",
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    id: "6",
    href: "#",
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    id: "7",
    href: "#",
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    id: "8",
    href: "#",
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    id: "9",
    href: "#",
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    id: "10",
    href: "#",
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    id: "11",
    href: "#",
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    id: "12",
    href: "#",
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
];

export default function FAQs() {
  return (
    <section id="faq" className="pt-20 xl:pt-[120px] desktop:pt-[150px]">
      <div className="container">
        <Heading
          heading="Frequently Asked Questions"
          paragraph="Find answers to common questions about Estatein's services,
          property listings, and the real estate process. We're here to
          provide clarity and assist you every step of the way."
        >
          <Link href="#" className="btn-primary ml-[150px] desktop:ml-[200px]">
            View All FAQ’s
          </Link>
        </Heading>
        <div className="mx-auto grid max-w-2xl grid-cols-1 pt-10 sm:pt-[60px] desktop:pt-20 lg:mx-0 lg:max-w-none">
          <Swiper
            currentEl=".faq-pagination"
            breakpoints={{
              0: {
                pagination: {
                  el: ".faq-pagination-center",
                },
              },
              640: {
                slidesPerView: 1,
                pagination: {
                  el: ".faq-pagination-center",
                },
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={{
              disabledClass: "swiper-button-disabled",
              nextEl: ".faq-button-next",
              prevEl: ".faq-button-prev",
            }}
            className="w-full pb-[30px] sm:pb-10 desktop:pb-[50px] border-b border-solid border-signal-black"
          >
            {faqs.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group rounded-[10px] desktop:rounded-xl ring-1 ring-signal-black ring-inset p-[30px] sm:p-10 desktop:p-[50px] transition-colors duration-300 ease-in-out hover:border-neutral-700 hover:bg-neutral-800/30">
                  <h3 className="mb-5 sm:mb-6 desktop:mb-[30px] text-lg sm:text-xl desktop:text-2xl font-semibold leading-[150%] sm:leading-[150%] desktop:leading-[150%] not-italic min-h-[54px] sm:min-h-[60px] desktop:min-h-[72px]">
                    {item.question}
                  </h3>
                  <p className="line-clamp-2 mb-5 sm:mb-6 desktop:mb-[30px] m-0 max-w-[42ch] text-[#999] not-italic text-sm sm:text-base desktop:text-lg font-medium leading-[150%] sm:leading-[150%] desktop:leading-[150%] tracking-[-0.006em] desktop:tracking-[-0.108px]">
                    {item.answer}
                  </p>
                  <div className="max-sm:w-full relative flex items-center">
                    <Link
                      href="#"
                      className="grow md:grow-0 text-center px-5 desktop:px-6 py-3.5 desktop:py-[18px] bg-graphite-black rounded-lg desktop:rounded-[10px] ring-1 ring-signal-black ring-inset not-italic leading-[18px] desktop:leading-6 tracking-[-0.084px] desktop:tracking-[-0.108px] font-medium text-sm desktop:text-lg transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex-wrap max-lg:flex max-lg:justify-between">
            <Link href="#" className="btn-primary inline-flex lg:hidden mt-4">
              View All FAQ’s
            </Link>
            <Controler
              pagination="faq-pagination"
              mobilePagination="faq-pagination-center"
              prevBtn="faq-button-prev"
              nextBtn="faq-button-next"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
