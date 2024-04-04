"use client";

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

export function Swiper(props) {
  const swiperRef = useRef(null);
  const { currentEl, children, ...rest } = props;

  useEffect(() => {
    register();

    const params = {
      ...rest,
      pagination: {
        el: currentEl,
        type: "fraction",
        renderFraction(currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " of " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
        formatFractionCurrent(number) {
          return number < 10 ? "0" + number : number;
        },
        formatFractionTotal(number) {
          return number < 10 ? "0" + number : number;
        },
      },
    };

    Object.assign(swiperRef.current || {}, params);

    swiperRef.current?.initialize();
  }, [rest, currentEl]);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(props) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
