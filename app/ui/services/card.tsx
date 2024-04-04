export default function Card({
  title,
  value,
  LinkIcon,
}: {
  title: string;
  value: string;
  LinkIcon: React.ElementType;
}) {
  const Icon = LinkIcon;

  return (
    <li className="ring-1 ring-inset ring-signal-black rounded-[10px] desktop:rounded-xl flex bg-dark-gray p-6 xl:p-10 desktop:py-[50px] desktop:px-10 flex-col items-start min-w-0 gap-4 xl:gap-5 desktop:gap-[30px]">
      <div className="min-w-0 flex flex-row items-center gap-3 xl:gap-4 desktop:gap-5">
        <a className="relative bg-dark-gray rounded-[52px]">
          <svg
            className="w-12 h-12 xl:w-[60px] xl:h-[60px] desktop:w-[82px] desktop:h-[82px]"
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="83"
            fill="none"
            viewBox="0 0 82 83"
          >
            <rect
              width="81"
              height="81"
              x="0.5"
              y="1"
              stroke="url(#paint0_linear_104_11828)"
              rx="40.5"
            ></rect>
            <rect
              width="81"
              height="81"
              x="0.5"
              y="1"
              stroke="url(#paint1_linear_104_11828)"
              rx="40.5"
            ></rect>
            <rect
              width="61"
              height="61"
              x="10.5"
              y="11"
              stroke="url(#paint2_linear_104_11828)"
              rx="30.5"
            ></rect>
            <rect
              width="61"
              height="61"
              x="10.5"
              y="11"
              stroke="url(#paint3_linear_104_11828)"
              rx="30.5"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_104_11828"
                x1="6.75"
                x2="85.75"
                y1="87"
                y2="-5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A685FA"></stop>
                <stop offset="0.324" stopColor="#A685FA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_104_11828"
                x1="81.75"
                x2="6.75"
                y1="-10"
                y2="82.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A685FA"></stop>
                <stop offset="0.577" stopColor="#A685FA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_104_11828"
                x1="3.25"
                x2="71.75"
                y1="14"
                y2="72.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A685FA"></stop>
                <stop offset="0.324" stopColor="#A685FA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_104_11828"
                x1="84.25"
                x2="12.25"
                y1="86.5"
                y2="35.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A685FA"></stop>
                <stop offset="0.577" stopColor="#A685FA" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <Icon className="absolute top-[29.26829268%] left-[29.26829268%] w-5 h-5 xl:w-6 xl:h-6 desktop:w-[34px] desktop:h-[34px] text-[#A685FA]" />
        </a>
        <p className="text-lg xl:text-xl desktop:text-2xl leading-[27px] xl:leading-[30px] desktop:leading-9 not-italic font-semibold text-[#FFF]">
          {title}
        </p>
      </div>
      <p className="text-sm xl:text-base desktop:text-lg leading-[21px] xl:leading-6 desktop:leading-[27px] not-italic font-medium text-[#999]">
        {value}
      </p>
    </li>
  );
}
