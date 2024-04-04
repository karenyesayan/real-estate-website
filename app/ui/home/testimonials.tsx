import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import Heading from "../page-heading";
import Controler from "../slider-controler";
import { Swiper, SwiperSlide } from "../swiper";

const posts = [
  {
    id: "1",
    title: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    ratingValue: 5,
    author: {
      name: "Wade Warren",
      region: "USA, California",
      imageUrl: "/profile1.svg",
    },
  },
  {
    id: "2",
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    ratingValue: 5,
    author: {
      name: "Emelie Thomson",
      region: "USA, Florida",
      imageUrl: "/profile2.svg",
    },
  },
  {
    id: "3",
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    ratingValue: 5,
    author: {
      name: "John Mans",
      region: "USA, Nevada",
      imageUrl: "/profile3.svg",
    },
  },
  {
    id: "4",
    title: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    ratingValue: 5,
    author: {
      name: "Wade Warren",
      region: "USA, California",
      imageUrl: "/profile1.svg",
    },
  },
  {
    id: "5",
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    ratingValue: 5,
    author: {
      name: "Emelie Thomson",
      region: "USA, Florida",
      imageUrl: "/profile2.svg",
    },
  },
  {
    id: "6",
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    ratingValue: 5,
    author: {
      name: "John Mans",
      region: "USA, Nevada",
      imageUrl: "/profile3.svg",
    },
  },
  {
    id: "7",
    title: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    ratingValue: 5,
    author: {
      name: "Wade Warren",
      region: "USA, California",
      imageUrl: "/profile1.svg",
    },
  },
  {
    id: "8",
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    ratingValue: 5,
    author: {
      name: "Emelie Thomson",
      region: "USA, Florida",
      imageUrl: "/profile2.svg",
    },
  },
  {
    id: "9",
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    ratingValue: 5,
    author: {
      name: "John Mans",
      region: "USA, Nevada",
      imageUrl: "/profile3.svg",
    },
  },
  {
    id: "10",
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    ratingValue: 5,
    author: {
      name: "John Mans",
      region: "USA, Nevada",
      imageUrl: "/profile3.svg",
    },
  },
  {
    id: "11",
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    ratingValue: 5,
    author: {
      name: "Emelie Thomson",
      region: "USA, Florida",
      imageUrl: "/profile2.svg",
    },
  },
  {
    id: "12",
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    ratingValue: 5,
    author: {
      name: "John Mans",
      region: "USA, Nevada",
      imageUrl: "/profile3.svg",
    },
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pt-20 xl:pt-[120px] desktop:pt-[150px]"
    >
      <div className="container">
        <Heading
          heading="What Our Clients Say"
          paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        >
          <Link href="#" className="btn-primary ml-[150px] desktop:ml-[200px]">
            View All Testimonials
          </Link>
        </Heading>
        <div className="mx-auto grid max-w-2xl grid-cols-1 pt-10 sm:pt-[60px]  desktop:pt-20 lg:mx-0 lg:max-w-none">
          <Swiper
            currentEl=".testimonials-pagination"
            breakpoints={{
              0: {
                pagination: {
                  el: ".testimonials-pagination-center",
                },
              },
              640: {
                slidesPerView: 1,
                pagination: {
                  el: ".testimonials-pagination-center",
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
              nextEl: ".testimonials-button-next",
              prevEl: ".testimonials-button-prev",
            }}
            className="swiper2 w-full pb-[30px] sm:pb-10 desktop:pb-[50px] border-b border-solid border-signal-black"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <article className="gap-6 xl:gap-[30px] desktop:gap-10 rounded-[10px] desktop:rounded-xl ring-1 ring-signal-black ring-inset flex-col justify-start items-start inline-flex p-[30px] sm:p-10 desktop:p-[50px]">
                  <div className="flex items-center gap-x-4 text-xs">
                    <div className="flex gap-2 desktop:gap-2.5">
                      {[...Array(post.ratingValue)].map((_, index) => {
                        return (
                          <a
                            key={index.toString()}
                            className="text-[#FFE500] p-1.5 md:py-2 md:px-[9px] desktop:p-2.5 bg-graphite-black rounded-[100px] outline outline-1 outline-solid outline-signal-black justify-start items-start  inline-flex"
                          >
                            <StarIcon className="w-[18px] h-[18px] md:w-5 md:h-5 desktop:w-6 desktop:h-6" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col group relative gap-1.5 sm:gap-2.5 desktop:gap-3.5">
                    <h3 className="text-lg sm:text-xl desktop:text-2xl font-semibold leading-[150%] sm:leading-[150%] desktop:leading-[150%] not-italic">
                      <a>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="xl:min-h-24 desktop:min-h-[108px] not-italic text-sm sm:text-base desktop:text-lg font-medium leading-[150%] sm:leading-[150%] desktop:leading-[150%]">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative flex gap-x-2.5 desktop:gap-x-3">
                    <Image
                      src={post.author.imageUrl}
                      width={60}
                      height={60}
                      alt={`${post.author.name} image`}
                      className="rounded-[50px] w-[50px] h-[50px] desktop:w-[60px] desktop:h-[60px] desktop:rounded-[60px] object-cover"
                    />
                    <div className="">
                      <p className="text-[#FFF] not-italic text-base sm:text-lg desktop:text-xl font-medium leading-[150%] sm:leading-[150%] desktop:leading-[150%]">
                        <a>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-[#999] not-italic text-sm sm:text-base desktop:text-lg font-medium leading-[150%] sm:leading-[150%] desktop:leading-[150%]">
                        {post.author.region}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex-wrap max-lg:flex max-[390px]:justify-evenly max-lg:justify-between">
            <Link href="#" className="btn-primary inline-flex lg:hidden mt-4">
              View All Testimonials
            </Link>
            <Controler
              pagination="testimonials-pagination"
              mobilePagination="testimonials-pagination-center"
              prevBtn="testimonials-button-prev"
              nextBtn="testimonials-button-next"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
