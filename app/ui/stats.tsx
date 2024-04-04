"use client";

import React, { useRef } from "react";
import useScrollTriggeredCountUp from "../lib/useScrollTriggeredCountUp";

export default function Stats() {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <div>
      <dl className="[&>*:last-child]:max-xl:col-span-2 grid grid-cols-2 gap-3 xl:gap-4 desktop:gap-5 text-center xl:grid-cols-[repeat(3,_minmax(192.66666px,_1fr))] desktop:grid-cols-[repeat(3,_minmax(239.33333px,_1fr))]">
        <div className="gap-0.5 rounded-lg sm:rounded-[10px] sm:px-5 p-4 sm:py-3.5 desktop:px-6 desktop:py-4 bg-graphite-black desktop:rounded-xl outline outline-1 outline-signal-black flex-col items-center xl:items-start inline-flex">
          <dt className="text-nowrap fotn-medium text-sm leading-[150%] sm:text-base desktop:text-lg text-neutral-400 sm:leading-[150%] desktop:leading-[150%]">
            Happy Customers
          </dt>
          <dd className="order-first">
            <span
              ref={ref}
              className="text-2xl leading-[150%] md:text-3xl desktop:text-[40px] font-bold md:leading-[150%] desktop:leading-[150%]"
            >
              {useScrollTriggeredCountUp(ref, 200)}+
            </span>
          </dd>
        </div>
        <div className="gap-0.5 rounded-lg sm:rounded-[10px] sm:px-5 p-4 sm:py-3.5 desktop:px-6 desktop:py-4 bg-graphite-black desktop:rounded-xl outline outline-1 outline-signal-black flex-col items-center xl:items-start inline-flex">
          <dt className="text-nowrap fotn-medium text-sm leading-[150%] sm:text-base desktop:text-lg text-neutral-400 sm:leading-[150%] desktop:leading-[150%]">
            Properties For Clients
          </dt>
          <dd className="order-first">
            <span
              ref={ref}
              className="text-2xl leading-[150%] md:text-3xl desktop:text-[40px] font-bold md:leading-[150%] desktop:leading-[150%]"
            >
              {useScrollTriggeredCountUp(ref, 10)}k+
            </span>
          </dd>
        </div>
        <div className="gap-0.5 rounded-lg sm:rounded-[10px] sm:px-5 p-4 sm:py-3.5 desktop:px-6 desktop:py-4 bg-graphite-black desktop:rounded-xl outline outline-1 outline-signal-black flex-col items-center xl:items-start inline-flex">
          <dt className="text-nowrap fotn-medium text-sm leading-[150%] sm:text-base desktop:text-lg text-neutral-400 sm:leading-[150%] desktop:leading-[150%]">
            Years of Experience
          </dt>
          <dd className="order-first">
            <span
              ref={ref}
              className="text-2xl leading-[150%] md:text-3xl desktop:text-[40px] font-bold md:leading-[150%] desktop:leading-[150%]"
            >
              {useScrollTriggeredCountUp(ref, 16)}+
            </span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
