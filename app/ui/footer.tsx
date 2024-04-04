import Link from "next/link";

const sitemap = [
  {
    title: "Home",
    items: [
      { title: "Hero Section", href: "/#hero" },
      { title: "Features", href: "/#features" },
      { title: "Properties", href: "/#properties" },
      { title: "Testimonials", href: "/#testimonials" },
      { title: "FAQ’s", href: "/#faq" },
    ],
  },
  {
    title: "About Us",
    items: [
      { title: "Our Story", href: "about/#journey" },
      { title: "Our Works", href: "about/#achievements" },
      { title: "How It Works", href: "about/#experience" },
      { title: "Our Team", href: "about/#team" },
      { title: "Our Clients", href: "about/#clients" },
    ],
  },
  {
    title: "Properties",
    items: [
      { title: "Portfolio", href: "properties/#portfolio" },
      { title: "Categories", href: "properties/#categories" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Valuation Mastery", href: "services/#services" },
      { title: "Strategic Marketing", href: "services/#services" },
      { title: "Negotiation Wizardry", href: "services/#services" },
      { title: "Closing Success", href: "#" },
      { title: "Property Management", href: "services/#management" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { title: "Contact Form", href: "contact/#contact-section" },
      { title: "Our Offices", href: "contact/#offices" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full">
        <div className="container py-[50px] md:py-20 desktop:py-[100px] gap-[50px] xl:gap-20 grid grid-cols-1 lg:grid-cols-[305px_minmax(auto,_1fr)] xl:grid-cols-[305px_minmax(875px,_0fr)] justify-between desktop:grid-cols-[423px_minmax(978px,_0fr)]">
          <div className="lg:max-w-lg flex flex-col gap-5 sm:gap-6 desktop:gap-[30px]">
            <div className="flex">
              <Link href="/">
                <span className="sr-only">Estatein</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="48"
                  fill="none"
                  viewBox="0 0 160 49"
                  className="w-[113.333px] h-[34px] desktop:w-40	desktop:h-12"
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
            <div>
              <form className="relative">
                <label htmlFor="email-address" className="relative block">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="placeholder-[#999] desktop:leading-6 font-medium not-italic text-sm desktop:text-lg tracking-[-0.084px] desktop:tracking-[-0.108px] bg-[url(/icons/mail.svg)] bg-[left_calc(5.67375887%)_top_calc(50%)] indent-[9%] bg-no-repeat w-full px-5 desktop:px-6 py-3.5 desktop:py-[21px] bg-dark-gray rounded-lg desktop:rounded-xl ring-1 ring-signal-black ring-inset border-none justify-start items-center gap-1.5 desktop:gap-2.5 inline-flex text-neutral-400 leading-6 flex-[1_0_0%]"
                    placeholder="Enter Your Email"
                  />
                </label>
                <button
                  type="submit"
                  className="absolute transform -translate-x-[95.23404255%] -translate-y-1/2 top-1/2 left-[95.23404255%]"
                >
                  <span>
                    <svg
                      className="w-6 h-6 desktop:w-[30px] desktop:h-[30px] relative bg-opacity-0 fill-white transition-colors hover:fill-[#703BF7]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path d="M26.7843 3.22287C26.1593 2.58412 25.2343 2.34787 24.3718 2.59787L4.25928 8.40912C3.34928 8.66162 2.70428 9.38287 2.53053 10.2979C2.35303 11.2304 2.97303 12.4154 3.78303 12.9104L10.0718 16.7504C10.7168 17.1454 11.5493 17.0466 12.083 16.5116L19.2843 9.31037C19.6468 8.93412 20.2468 8.93412 20.6093 9.31037C20.9718 9.67162 20.9718 10.2604 20.6093 10.6354L13.3955 17.8366C12.8605 18.3716 12.7605 19.2016 13.1543 19.8479L16.9968 26.1604C17.4468 26.9091 18.2218 27.3354 19.0718 27.3354C19.1718 27.3354 19.2843 27.3354 19.3843 27.3216C20.3593 27.1979 21.1343 26.5341 21.4218 25.5966L27.3843 5.63537C27.6468 4.78537 27.4093 3.86037 26.7843 3.22287Z" />
                      <path
                        opacity="0.4"
                        d="M11.8145 23.9277C12.1795 24.294 12.1795 24.8877 11.8145 25.254L10.107 26.9602C9.92448 27.144 9.68448 27.2352 9.44448 27.2352C9.20448 27.2352 8.96448 27.144 8.78198 26.9602C8.41573 26.594 8.41573 26.0015 8.78198 25.6352L10.4882 23.9277C10.8545 23.5627 11.4482 23.5627 11.8145 23.9277ZM10.8349 19.1927C11.1999 19.559 11.1999 20.1527 10.8349 20.519L9.12736 22.2252C8.94486 22.409 8.70486 22.5002 8.46486 22.5002C8.22486 22.5002 7.98486 22.409 7.80236 22.2252C7.43611 21.859 7.43611 21.2665 7.80236 20.9002L9.50861 19.1927C9.87486 18.8277 10.4686 18.8277 10.8349 19.1927ZM6.13336 17.7022C6.49836 18.0685 6.49836 18.6622 6.13336 19.0285L4.42586 20.7347C4.24336 20.9185 4.00336 21.0097 3.76336 21.0097C3.52336 21.0097 3.28336 20.9185 3.10086 20.7347C2.73461 20.3685 2.73461 19.776 3.10086 19.4097L4.80711 17.7022C5.17336 17.3372 5.76711 17.3372 6.13336 17.7022Z"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="max-md:[&>*:nth-child(4)]:row-span-2 gap-5 grid items-start grid-cols-[repeat(auto-fill,_minmax(158.5px,_1fr))] md:grid-cols-[repeat(5,_minmax(0,_auto))] justify-between">
            {sitemap.map(({ title, items }) => (
              <div
                key={title}
                className="max-md:odd:min-[375px]:border-r max-md:odd:min-[375px]:border-solid max-md:odd:min-[375px]:border-signal-black"
              >
                <h2 className="text-neutral-400 text-base sm:text-lg desktop:text-xl font-medium leading-6 sm:leading-6 desktop:leading-6 tracking-[-0.108px] desktop:tracking-[-0.12px] pb-4 laptop:pb-6 desktop:pb-[30px]">
                  {title}
                </h2>
                <ul className="max-md:relative max-md:pb-5 max-md:after:content-[''] max-md:after:absolute max-md:after:bottom-0 max-md:after:block max-md:after:h-[1px] max-md:after:w-[158.5px] max-md:after:bg-signal-black flex-col justify-start items-start gap-2 sm:gap-4 desktop:gap-5 inline-flex">
                  {items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm sm:text-base desktop:text-lg font-medium leading-6 sm:leading-6 desktop:leading-6 tracking-[-0.096px] desktop:tracking-[-0.108px] [transition:color_.2s_ease] md:hover:text-blue-700"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-graphite-black flex w-full flex-col items-center justify-center  md:flex-row md:justify-between">
          <div className="max-sm:gap-5 py-5 sm:py-3 desktop:py-4 container flex flex-col-reverse sm:flex-row sm:justify-between items-center">
            <div className="max-sm:text-center flex-col sm:flex-row flex gap-2.5 sm:gap-5 desktop:gap-[38px] sm:py-2.5">
              <small className="tracking-[-0.084px] leading-6 text-sm desktop:text-lg font-medium desktop:leading-6 desktop:tracking-[-0.108px]">
                @ {currentYear} <Link href="/">Estatein</Link>. All Rights
                Reserved.
              </small>
              <Link
                href="#"
                className="leading-6 tracking-[-0.084px] text-sm desktop:text-lg font-medium desktop:leading-6 desktop:tracking-[-0.108px] hover:underline"
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="desktop:py-2.5 flex gap-2 desktop:gap-2.5 text-blue-gray-900 sm:justify-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 p-5 sm:p-2.5 desktop:p-3.5 bg-dark-gray rounded-[58px] justify-start items-start gap-2.5 inline-flex transition-opacity hover:opacity-100"
              >
                <svg
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M15.744 3.984H18V.168A31.332 31.332 0 0014.712 0c-3.264 0-5.496 1.992-5.496 5.64v3.144H5.532v4.272h3.684V24h4.416V13.056h3.672l.552-4.272h-4.224V6.06c0-1.26.336-2.076 2.112-2.076z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 p-5 sm:p-2.5 desktop:p-3.5 bg-dark-gray rounded-[58px] justify-start items-start gap-2.5 inline-flex transition-opacity hover:opacity-100"
              >
                <svg
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.451 1.451 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 010-3.12 1.57 1.57 0 110 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a1.998 1.998 0 00-.1.73v5h-3v-9h3V11a3 3 0 012.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 p-5 sm:p-2.5 desktop:p-3.5 bg-dark-gray rounded-[58px] justify-start items-start gap-2.5 inline-flex transition-opacity hover:opacity-100"
              >
                <svg
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 p-5 sm:p-2.5 desktop:p-3.5 bg-dark-gray rounded-[58px] justify-start items-start gap-2.5 inline-flex transition-opacity hover:opacity-100"
              >
                <svg
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
