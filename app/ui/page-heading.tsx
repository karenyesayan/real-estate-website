export default function Heading({
  heading,
  paragraph,
  children,
}: {
  heading: string;
  paragraph: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="69"
        height="30"
        fill="none"
        viewBox="0 0 69 30"
        className="absolute -left-2 top-[-19px] md:-left-2.5 md:top-[-30px] desktop:-left-5 desktop:-top-10 w-[45.6px] h-5 sm:w-[54.72px] sm:h-6 desktop:w-[68.4px] desktop:h-[30px]"
      >
        <g clipPath="url(#clip0_93_6422)">
          <path
            fill="#666"
            d="M15 30.017c8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15-8.284 0-15 6.715-15 15 0 8.284 6.716 15 15 15z"
          ></path>
          <path
            fill="#141414"
            d="M0 45c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zM30 45c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zM0 15c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zM30 15c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z"
          ></path>
        </g>
        <g clipPath="url(#clip1_93_6422)">
          <path fill="#333" d="M45 24.01a9 9 0 100-18 9 9 0 000 18z"></path>
          <path fill="#141414" d="M36 33a9 9 0 100-18 9 9 0 000 18z"></path>
          <path
            fill="#141414"
            d="M54 33a9 9 0 100-18 9 9 0 000 18zM36 15a9 9 0 100-18 9 9 0 000 18z"
          ></path>
          <path fill="#141414" d="M54 15a9 9 0 100-18 9 9 0 000 18z"></path>
        </g>
        <g clipPath="url(#clip2_93_6422)">
          <path
            fill="#333"
            d="M64.2 19.205a4.2 4.2 0 100-8.4 4.2 4.2 0 000 8.4z"
          ></path>
          <path
            fill="#141414"
            d="M60 23.4a4.2 4.2 0 100-8.4 4.2 4.2 0 000 8.4z"
          ></path>
          <path
            fill="#141414"
            d="M68.4 23.4a4.2 4.2 0 100-8.4 4.2 4.2 0 000 8.4zM60 15a4.2 4.2 0 100-8.4 4.2 4.2 0 000 8.4z"
          ></path>
          <path
            fill="#141414"
            d="M68.4 15a4.2 4.2 0 100-8.4 4.2 4.2 0 000 8.4z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_93_6422">
            <path fill="#fff" d="M0 0H30V30H0z"></path>
          </clipPath>
          <clipPath id="clip1_93_6422">
            <path
              fill="#fff"
              d="M0 0H18V18H0z"
              transform="translate(36 6)"
            ></path>
          </clipPath>
          <clipPath id="clip2_93_6422">
            <path
              fill="#fff"
              d="M0 0H8.4V8.4H0z"
              transform="translate(60 10.8)"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <div className="flex flex-[1_0_0%] flex-col gap-2 sm:gap-2.5 desktop:gap-3.5">
        <h2 className="text-[28px] leading-[150%] md:text-[38px] desktop:text-5xl font-semibold md:leading-[150%] desktop:leading-[150%] not-italic">
          {heading}
        </h2>
        <p className="text-[#999] not-italic text-sm leading-[150%] sm:text-base desktop:text-lg font-medium sm:leading-[150%] desktop:leading-[150%]">
          {paragraph}
        </p>
      </div>
      <div className="hidden lg:flex items-end">{children}</div>
    </div>
  );
}
