"use client";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { useRef } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";

register();

export const ImageGallery = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  const swiperElRef = useRef(null);

  return (
    <section className="container">
      <div className="flex items-end md:items-center sm:justify-between pb-[30px] laptop:pb-10 desktop:pb-[50px] pt-[60px] laptop:pt-20 desktop:pt-[120px]">
        <div>
          <h1 className="flex max-sm:flex-col items-start sm:items-center gap-2.5 sm:gap-5 not-italic font-semibold text-xl laptop:text-2xl desktop:text-[30px] leading-[30px] laptop:leading-9 desktop:leading-[45px]">
            {name}
            <span
              className={`not-italic text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] font-medium inline-flex items-center p-2 desktop:p-2.5 ring-1 ring-inset ring-signal-black rounded-md desktop:rounded-lg`}
            >
              <MapPinIcon className="w-5 h-5 desktop:w-6 desktop:h-6 me-1 desktop:me-1.5" />
              Malibu, California
            </span>
          </h1>
        </div>
        <div className="max-xs:ml-[-27px] max-sm:pb-[5px] flex flex-row sm:flex-col gap-1 laptop:gap-0.5">
          <span className="max-sm:pt-[3px] not-italic leading-[21px] desktop:leading-[27px] text-sm desktop:text-lg font-medium text-[#999]">
            Price
          </span>
          <p className="not-italic text-lg sm:text-xl desktop:text-2xl leading-[27px] sm:leading-[30px] desktop:leading-9 font-semibold">
            ${formatCurrency(price)}
          </p>
        </div>
      </div>
      <div className="p-5 laptop:p-10 desktop:p-[50px] bg-graphite-black ring-1 ring-inset ring-signal-black rounded-xl">
        <div className="flex flex-col-reverse sm:flex-col justify-center items-center gap-5 desktop:gap-[30px]">
          <swiper-container
            ref={swiperElRef}
            class="imageSwiper2"
            slides-per-view="9"
            free-mode="true"
            watch-slides-progress="true"
            breakpoints={JSON.stringify({
              0: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                spaceBetween: 10,
              },
              1920: {
                spaceBetween: 20,
              },
            })}
          >
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={144}
                height={94}
                className="hidden xs:block rounded-md lg:rounded-lg h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={67}
                height={41}
                alt="property image mobile version"
                className="block xs:hidden rounded-md lg:rounded-lg h-full w-full object-cover"
              />
            </swiper-slide>
          </swiper-container>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="2"
            breakpoints={JSON.stringify({
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            })}
            pagination={JSON.stringify({
              el: ".gallery-pagination",
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              renderBullet: function (
                index: number,
                className: string
              ): string {
                return `<span class="dot swiper-pagination-bullet">${index}</span>`;
              },
            })}
            navigation={JSON.stringify({
              disabledClass: "swiper-button-disabled",
              nextEl: ".gallery-button-next",
              prevEl: ".gallery-button-prev",
            })}
            class="imageSwiper"
            thumbs-swiper=".imageSwiper2"
            space-between="30"
          >
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src="/image1.png"
                alt="property image desktop version"
                width={733}
                height={583}
                className="hidden xs:block rounded-[10px] h-full w-full object-cover"
              />
              <Image
                src="/Image1-mobile.png"
                width={318}
                height={249}
                alt="property image mobile version"
                className="block xs:hidden rounded-[10px] h-full w-full object-cover"
              />
            </swiper-slide>
          </swiper-container>
        </div>
        <div className={"slider-controler mt-1 desktop:mt-2.5"}>
          <div
            className={
              "max-sm:w-full bg-dark-gray rounded-[100px] flex max-laptop:justify-between laptop:items-center p-2 desktop:p-2.5 gap-2.5 mx-auto"
            }
          >
            <div
              className={
                "gallery-button-prev p-2.5 desktop:p-3.5 ring-1 ring-inset ring-signal-black rounded-[69px]"
              }
            >
              <ArrowLeftIcon className="w-6 desktop:w-[30px]" />
            </div>
            <div
              className={
                "gallery-pagination flex gap-[3px] desktop:gap-1 items-center"
              }
            ></div>
            <div
              className={
                "gallery-button-next  p-2.5 desktop:p-3.5 ring-1 ring-inset ring-signal-black rounded-[69px]"
              }
            >
              <ArrowRightIcon className="w-6 desktop:w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
