"use client";

import { Dialog } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Banner from "./banner";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/services" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-solid border-signal-black w-full z-50 sticky top-0 bg-[rgba(26,_26,_26,_.8)]">
      <Banner />
      <nav
        className="container mx-auto flex items-center justify-between py-5 md:py-3.5 desktop:py-5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Estatein</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="48"
              fill="none"
              viewBox="0 0 160 49"
              className="w-[93.333px] h-7 sm:w-[113.333px] sm:h-[34px] desktop:w-40	desktop:h-12"
            >
              <path
                fill="#703BF7"
                d="M24 48.5C10.747 48.5 0 37.753 0 24h24v24.5z"
              ></path>
              <path
                fill="#703BF7"
                d="M0 .5c13.253 0 24 10.747 24 24H0V.5z"
              ></path>
              <path
                fill="#703BF7"
                d="M24 48.5c13.253 0 24-10.747 24-24.5H23v24.5z"
              ></path>
              <path
                fill="#703BF7"
                d="M48 24.5c0-13.253-10.747-24-24-24v24h24z"
              ></path>
              <path
                fill="#fff"
                d="M156.82 35.36v-8.006c0-.925-.298-1.686-.896-2.284-.578-.597-1.329-.896-2.254-.896-.617 0-1.166.135-1.648.405s-.857.645-1.127 1.127-.405 1.031-.405 1.648l-1.243-.694c0-1.06.231-1.995.694-2.804a4.974 4.974 0 011.908-1.937c.828-.481 1.753-.722 2.775-.722 1.04 0 1.965.27 2.774.81a5.566 5.566 0 011.908 2.051c.463.829.694 1.696.694 2.602v8.7h-3.18zm-9.509 0V21.486h3.179V35.36h-3.179zM140.565 35.36V21.486h3.18V35.36h-3.18zm1.59-16.418c-.54 0-.993-.183-1.359-.549-.347-.366-.52-.819-.52-1.358 0-.54.173-.993.52-1.36.366-.365.819-.548 1.359-.548.559 0 1.011.183 1.358.549.347.366.521.819.521 1.359 0 .539-.174.992-.521 1.358-.347.366-.799.55-1.358.55zM131.541 35.65c-1.387 0-2.64-.309-3.758-.926a7.243 7.243 0 01-2.63-2.601c-.636-1.098-.954-2.332-.954-3.7 0-1.368.318-2.592.954-3.67a7.092 7.092 0 012.573-2.602c1.098-.636 2.312-.954 3.642-.954 1.291 0 2.428.299 3.411.896a6.246 6.246 0 012.341 2.457c.578 1.04.867 2.226.867 3.555 0 .231-.019.472-.058.723a7.091 7.091 0 01-.115.78h-11.389v-2.601h9.741l-1.185 1.04c-.039-.848-.202-1.56-.492-2.139a3.076 3.076 0 00-1.242-1.33c-.521-.308-1.166-.462-1.937-.462-.809 0-1.513.174-2.11.52a3.536 3.536 0 00-1.388 1.475c-.327.616-.491 1.358-.491 2.225s.173 1.629.52 2.284a3.77 3.77 0 001.474 1.532c.636.347 1.369.52 2.197.52.713 0 1.368-.125 1.966-.376a4.11 4.11 0 001.561-1.098l2.023 2.052a6.484 6.484 0 01-2.457 1.792 7.83 7.83 0 01-3.064.607zM116.677 35.36V15.705h3.179V35.36h-3.179zm-3.324-10.984v-2.89h9.827v2.89h-9.827zM103.609 35.65c-1.252 0-2.389-.319-3.411-.954a7.009 7.009 0 01-2.399-2.573c-.578-1.098-.867-2.322-.867-3.671 0-1.368.29-2.592.867-3.671.598-1.098 1.397-1.965 2.399-2.601 1.022-.656 2.159-.983 3.411-.983 1.06 0 1.995.231 2.804.694a5.046 5.046 0 011.966 1.85c.481.79.722 1.686.722 2.688v3.989c0 1.002-.241 1.898-.722 2.688a5.046 5.046 0 01-1.937 1.879c-.829.443-1.773.664-2.833.664zm.521-3.007c1.175 0 2.119-.395 2.832-1.185.733-.79 1.099-1.802 1.099-3.035 0-.828-.164-1.56-.492-2.197a3.534 3.534 0 00-1.387-1.474c-.578-.366-1.262-.55-2.052-.55-.771 0-1.455.184-2.053.55a3.796 3.796 0 00-1.387 1.474c-.328.636-.492 1.369-.492 2.197 0 .829.164 1.561.492 2.197a4.019 4.019 0 001.387 1.503c.598.347 1.282.52 2.053.52zm3.728 2.717v-3.728l.55-3.382-.55-3.353v-3.411h3.18V35.36h-3.18zM89.38 35.36V15.705h3.18V35.36h-3.18zm-3.324-10.984v-2.89h9.827v2.89h-9.827zM79.388 35.65a8.49 8.49 0 01-2.226-.29 8.228 8.228 0 01-1.965-.867 6.721 6.721 0 01-1.561-1.387l2.023-2.024a4.933 4.933 0 001.648 1.272c.636.27 1.349.405 2.139.405.713 0 1.252-.106 1.618-.318.367-.212.55-.52.55-.925 0-.424-.174-.752-.52-.983-.348-.231-.8-.424-1.36-.578a49.01 49.01 0 00-1.734-.52 9.588 9.588 0 01-1.734-.694 3.908 3.908 0 01-1.33-1.243c-.346-.52-.52-1.195-.52-2.023 0-.887.203-1.648.607-2.284.424-.636 1.012-1.127 1.763-1.474.771-.347 1.687-.52 2.746-.52 1.118 0 2.1.202 2.949.607.867.385 1.59.973 2.168 1.763l-2.024 2.023a4.031 4.031 0 00-1.387-1.127c-.52-.25-1.118-.376-1.792-.376-.636 0-1.128.097-1.474.29-.347.192-.52.472-.52.838 0 .385.173.684.52.896.346.212.79.395 1.33.549.558.154 1.136.328 1.733.52a6.952 6.952 0 011.735.752 3.739 3.739 0 011.358 1.271c.347.52.52 1.205.52 2.053 0 1.349-.471 2.418-1.416 3.208-.944.79-2.225 1.185-3.844 1.185zM58.234 35.36V15.127h3.324V35.36h-3.324zm2.283 0v-3.035h11.331v3.035h-11.33zm0-8.873v-2.92h10.348v2.92H60.517zm0-8.325v-3.035h11.187v3.035H60.517z"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3BottomRightIcon
              className="h-7 w-7 sm:h-9 sm:w-9"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-start lg:items-center gap-6 desktop:gap-[30px]">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm desktop:text-lg font-medium not-italic leading-[150%] desktop:leading-[150%] [transition:color_.2s_ease] md:hover:text-blue-700",
                  {
                    "rounded-lg desktop:rounded-[10px] px-5 py-3 desktop:py-3.5 desktop:px-6 bg-dark-gray outline outline-1 outline-signal-black md:hover:text-white transition-colors hover:bg-graphite-black":
                      pathname === link.href,
                  }
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className={clsx(
              "text-sm desktop:text-lg font-medium leading-[150%] desktop:leading-[150%] not-italic px-5 desktop:px-6 py-3.5 desktop:py-4 bg-dark-gray rounded-lg desktop:rounded-[10px] outline-1 outline outline-signal-black transition-colors hover:bg-graphite-black",
              {
                "bg-violet-600": pathname === "/contact",
              }
            )}
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-graphite-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Estatein</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="34"
                fill="none"
                viewBox="0 0 35 34"
              >
                <path
                  fill="#703BF7"
                  d="M17.333 34c-9.387 0-17-7.612-17-17h17v17zM.333 0c9.388 0 17 7.612 17 17h-17V0zM17.333 34c9.388 0 17-7.612 17-17h-17v17zM34.333 17c0-9.388-7.612-17-17-17v17h17z"
                ></path>
              </svg>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#FFF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link, index) => {
                  return (
                    <Link
                      key={index.toString()}
                      href={link.href}
                      className={clsx(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-dark-gray hover:text-violet-600"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-dark-gray hover:text-violet-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
