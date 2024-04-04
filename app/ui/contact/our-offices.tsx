"use client";

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import Heading from "../page-heading";

export default function OurOffices() {
  let [categories] = useState({
    All: [
      {
        id: "1",
        type: "Main Headquarters",
        title: "123 Estatein Plaza, City Center, Metropolis",
        description:
          "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        email: "info@estatein.com",
        phone: "+1 (123) 456-7890",
        location: "Metropolis",
        href: "https://www.google.com/maps/place/Manhattan,+New+York,+NY,+USA/@40.7590615,-73.969231,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
      },
      {
        id: "2",
        type: "Regional Offices",
        title: "456 Urban Avenue, Downtown District, Metropolis",
        description:
          "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        email: "info@restatein.com",
        phone: "+1 (123) 628-7890",
        location: "Metropolis",
        href: "https://www.google.com/maps/place/Manhattan,+New+York,+NY,+USA/@40.7590615,-73.969231,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
      },
    ],
    Regional: [
      {
        id: "2",
        type: "Regional Offices",
        title: "456 Urban Avenue, Downtown District, Metropolis",
        description:
          "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        email: "info@restatein.com",
        phone: "+1 (123) 628-7890",
        location: "Metropolis",
        href: "https://www.google.com/maps/place/Manhattan,+New+York,+NY,+USA/@40.7590615,-73.969231,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
      },
    ],
    International: [
      {
        id: "1",
        type: "Main Headquarters",
        title: "123 Estatein Plaza, City Center, Metropolis",
        description:
          "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        email: "info@estatein.com",
        phone: "+1 (123) 456-7890",
        location: "Metropolis",
        href: "https://www.google.com/maps/place/Manhattan,+New+York,+NY,+USA/@40.7590615,-73.969231,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
      },
    ],
  });

  return (
    <section
      id="offices"
      className="container flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20 mt-20 laptop:mt-[120px] desktop:mt-[150px]"
    >
      <Heading
        heading="Discover Our Office Locations"
        paragraph="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
      />
      <div className="w-full sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-2.5 rounded-lg desktop:rounded-xl bg-graphite-black p-2.5 max-w-[413px] desktop:max-w-[516px]">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  clsx(
                    "w-full rounded-lg desktop:rounded-[10px] py-3.5 desktop:py-[18px] px-3.5 min-[389px]:px-5 desktop:px-6 not-italic text-sm desktop:text-lg font-medium leading-[21px] desktop:leading-[27px] ring-signal-black ring-1 ring-inset focus:outline-none focus:ring-2",
                    {
                      "bg-dark-gray": selected,
                      "hover:bg-white/[0.12] hover:text-white": !selected,
                    }
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-[30px] xs:mt-10 desktop:mt-[50px]">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={"rounded-xlring-white/60 ring-offset-2"}
              >
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 desktop:gap-[30px]">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="block p-6 laptop:p-10 desktop:p-[50px] rounded-lg desktop:rounded-xl bg-dark-gray ring-1 ring-inset ring-signal-black transition-colors duration-300 ease-in-out hover:bg-neutral-800/30"
                    >
                      <div className="not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] -tracking-[0.006em] desktop:-tracking-[0.006em] pb-1 xs:pb-1.5 desktop:pb-2.5">
                        {post.type}
                      </div>
                      <div className="">
                        <h5 className="text-wrap laptop:text-nowrap mb-2 xs:mb-2.5 desktop:mb-3.5 not-italic text-xl laptop:text-2xl desktop:text-[30px] font-semibold leading-[30px] laptop:leading-9 desktop:leading-[45px]">
                          {post.title}
                        </h5>
                        <p className="mb-6 xs:mb-[30px] desktop:mb-10 not-italic font-medium text-sm laptop:text-base desktop:text-lg leading-[21px] laptop:leading-6 desktop:leading-[27px] -tracking-[0.006em] laptop:-tracking-[0.006em] desktop:-tracking-[0.006em] text-[#999]">
                          {post.description}
                        </p>
                        <div className="mb-6 xs:mb-[30px] desktop:mb-10 flex flex-row flex-wrap xs:flex-wrap-reverse laptop:flex-nowrap items-start gap-2 desktop:gap-2.5">
                          <a
                            target="_blank"
                            href={`mailto:${post.email}`}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="flex gap-1 desktop:gap-1.5 items-center bg-primary py-2.5 desktop:py-3.5 px-4 desktop:px-5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic text-sm desktop:text-lg font-medium leading-[21px] desktop:leading-[27px]  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                          >
                            <EnvelopeIcon className="mr-1 h-5 w-5 desktop:h-6 desktop:w-6" />
                            {post.email}
                          </a>
                          <a
                            href={`tel:${post?.href
                              ?.match(/\+|\d+/g)
                              ?.join("")}`}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="flex gap-1 desktop:gap-1.5 items-center bg-primary py-2.5 desktop:py-3.5 px-4 desktop:px-5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic text-sm desktop:text-lg font-medium leading-[21px] desktop:leading-[27px]  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                          >
                            <PhoneIcon className="mr-1 h-5 w-5 desktop:h-6 desktop:w-6" />
                            {post.phone}
                          </a>
                          <a
                            target="_blank"
                            href={post.href}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="flex gap-1 desktop:gap-1.5 items-center bg-primary py-2.5 desktop:py-3.5 px-4 desktop:px-5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic text-sm desktop:text-lg font-medium leading-[21px] desktop:leading-[27px]  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                          >
                            <MapPinIcon className="mr-1 h-5 w-5 desktop:h-6 desktop:w-6" />
                            {post.location}
                          </a>
                        </div>
                        <a
                          target="_blank"
                          href={post.href}
                          className="inline-block w-full text-center rounded-lg desktop:rounded-[10px] bg-[#703BF7] py-3.5 desktop:py-[18px] px-5 desktop:px-6 not-italic text-sm desktop:text-lg leading-[18px] desktop:leading-6 font-medium -tracking-[0.006em] desktop:-tracking-[0.006em] ransition duration-150 ease-in-out hover:bg-indigo-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Get Direction
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
