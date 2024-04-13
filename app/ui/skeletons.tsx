export function CardSkeleton() {
  return (
    <div
      role="status"
      className="relative text-center p-5 laptop:p-6 desktop:p-[30px] ring-inset ring-1 ring-gray-700 rounded-xl shadow animate-pulse"
    >
      <div className="flex items-center justify-center mx-auto mb-10 laptop:mb-[50px] max-w-[318px] h-[268px] lg:h-[220px] w-[257px] desktop:h-[253px] desktop:w-[316.75px] bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="bg-gray-700 rounded-full mb-0.5 laptop:mb-1 desktop:mb-1.5 leading-7 xl:h-7 desktop:h-7 w-48 mx-auto"></div>
      <div className="bg-gray-700 rounded-full mb-4 laptop:mb-5 desktop:mb-6 h-6 xl:h-6 desktop:h-6 mx-auto w-32"></div>
      <div className="flex items-center justify-end pt-2 laptop:pt-2.5 desktop:pt-3.5 pr-2 laptop:pr-2.5 desktop:pr-3.5 pb-2 laptop:pb-2.5 desktop:pb-3.5 pl-6 laptop:pl-5 desktop:pl-6 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[100px]">
        <a>
          <svg
            className="w-12 laptop:w-9 desktop:w-11 h-12 laptop:h-9 desktop:h-11"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="44"
            fill="none"
            viewBox="0 0 45 44"
          >
            <rect width="44" height="44" x="0.75" fill="#4a5568" rx="22"></rect>
            <path
              fill="#edf2f7"
              d="M32.177 12.578c-.5-.51-1.24-.7-1.93-.5l-16.09 4.65a1.914 1.914 0 00-1.383 1.51c-.142.746.354 1.694 1.002 2.09l5.031 3.072a1.308 1.308 0 001.61-.19l5.76-5.762a.735.735 0 011.06 0c.29.29.29.76 0 1.06l-5.77 5.761a1.31 1.31 0 00-.194 1.61l3.074 5.05c.36.598.98.94 1.66.94.08 0 .17 0 .25-.012.78-.099 1.4-.63 1.63-1.38l4.77-15.969c.21-.68.02-1.42-.48-1.93z"
            ></path>
            <path
              fill="#edf2f7"
              d="M20.201 29.142a.752.752 0 010 1.061l-1.366 1.365a.744.744 0 01-.53.22.749.749 0 01-.53-1.28l1.365-1.366a.752.752 0 011.061 0zm-.783-3.788a.752.752 0 010 1.061l-1.366 1.365a.744.744 0 01-.53.22.749.749 0 01-.53-1.28l1.365-1.366a.752.752 0 011.06 0zm-3.761-1.192a.752.752 0 010 1.06l-1.367 1.366a.744.744 0 01-.53.22.749.749 0 01-.53-1.28l1.365-1.366a.752.752 0 011.061 0z"
              opacity="0.4"
            ></path>
          </svg>
        </a>
      </div>
      <a>
        <svg
          className="absolute w-[60px] desktop:w-[76px] h-10 desktop:h-[52px] left-[calc(50%_-_60px/2_-_1px)] sm:left-[calc(50%_-_60px/2_-_0.5px)] desktop:left-[calc(50%_-_76px/2_-_1.38px)] top-[266px] lg:top-[222px] desktop:top-[257px]"
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="52"
          fill="none"
          viewBox="0 0 76 52"
        >
          <rect width="76" height="52" fill="#4a5568" rx="26"></rect>
          <path
            fill="#edf2f7"
            d="M33.55 35.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638A9.999 9.999 0 0050 18.555c-.898.4-1.85.66-2.826.774a4.95 4.95 0 002.165-2.723 9.897 9.897 0 01-3.126 1.195 4.93 4.93 0 00-8.394 4.49 13.984 13.984 0 01-10.146-5.142 4.93 4.93 0 001.523 6.571 4.93 4.93 0 01-2.23-.614v.06a4.922 4.922 0 003.95 4.829 4.895 4.895 0 01-2.221.084 4.934 4.934 0 004.597 3.422A9.875 9.875 0 0126 33.538a13.97 13.97 0 007.55 2.212z"
          ></path>
        </svg>
      </a>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function HeadingSkeleton() {
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
      <div
        role="status"
        className="flex flex-[1_0_0%] flex-col gap-2 sm:gap-2.5 desktop:gap-3.5 animate-pulse"
      >
        <div className="w-[296px] lg:w-[404px] desktop:w-[507px] h-2.5 rounded-full bg-gray-700"></div>
        <div className="min-[389px]:w-[358px] laptop:w-[1030px] desktop:w-[1297px] h-2 rounded-full bg-gray-700"></div>
      </div>
    </div>
  );
}

export function TeamSkeleton() {
  return (
    <div className="container mb-20 xl:mb-[120px] desktop:mb-[150px] flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20">
      <HeadingSkeleton />
      <div className="flex max-xl:flex-wrap max-xl:justify-center flex-row items-start gap-5 desktop:gap-[30px]">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export function ClientsSkeleton() {
  return (
    <div className="md:mb-[54px]">
      <div className="container">
        <HeadingSkeleton />
        <div className="max-xl:overflow-hidden max-xl:gap-[15px] max-laptop:gap-10 pb-[30px] laptop:pb-10 desktop:pb-[50px] mx-auto grid grid-cols-1 lg:grid-cols-[578.525px_578.525px] xl:grid-cols-2 pt-[34px] sm:pt-[52px] desktop:pt-[72px] lg:mx-0 lg:max-w-none">
          <article
            role="status"
            className="flex lg:max-w-[619.5px] desktop:max-w-[773.5px] flex-col items-start gap-[30px] desktop:gap-10 p-6 laptop:p-10 desktop:p-[50px] bg-dark-gray ring-1 ring-inset ring-signal-black shadow-[0_0_0_6px_#191919] laptop:shadow-[0_0_0_8px_#191919] m-1.5 lg:m-[6px_0_6px_6px] laptop:m-[8px_0_8px_8px] rounded-[10px] laptop:rounded-xl animate-pulse"
          >
            <div className="max-lg:items-stretch flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center w-full max-lg:gap-5">
              <div className="flex flex-col items-start gap-0.5 laptop:gap-1 desktop:gap-1.5">
                <div className="h-2 bg-gray-700 w-24 rounded-full"></div>
                <div className="h-2.5 bg-gray-700 w-48 rounded-full"></div>
              </div>
              <div className="w-full lg:w-[118px] desktop:w-[148px] h-[49px] desktop:h-[63px] bg-gray-700 btn-primary max-lg:grow text-center z-50"></div>
            </div>
            <div className="w-full group relative flex flex-col gap-[30px] desktop:gap-10">
              <div className="grid grid-cols-2 items-start gap-4 laptop:gap-5 desktop:gap-[30px] divide-x-[1px] divide-signal-black">
                <div className="flex flex-col grow gap-1 xs:gap-1.5 desktop:gap-2">
                  <div className="inline-flex items-center gap-0.5 laptop:gap-1 desktop:gap-1.5">
                    <div className="w-[18px] h-[18px] xl:w-5 xl:h-5 desktop:w-6 desktop:h-6 bg-gray-700"></div>
                    <div className="h-2 bg-gray-700 w-24 rounded-full"></div>
                  </div>
                  <div className="h-2 bg-gray-700 w-24 xs:w-48 rounded-full"></div>
                </div>
                <div className="flex flex-col grow pl-5 desktop:pl-[30px] gap-1 xs:gap-1.5 desktop:gap-2">
                  <div className="inline-flex items-center gap-0.5 laptop:gap-1 desktop:gap-1.5">
                    <div className="w-[18px] h-[18px] xl:w-5 xl:h-5 desktop:w-6 desktop:h-6 bg-gray-700"></div>
                    <div className="h-2 bg-gray-700 w-24 rounded-full"></div>
                  </div>
                  <div className="h-2 bg-gray-700 w-24 xs:w-48 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gray-700 w-full min-h-[159px] laptop:min-h-[157px] desktop:min-h-[155px] flex flex-col items-start p-5 xl:p-[24px] desktop:p-[30px] gap-2 xl:gap-2.5 desktop:gap-3.5 ring-1 ring-inset ring-signal-black rounded-xl"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </article>
          <article
            role="status"
            className="hidden lg:flex lg:max-w-[619.5px] desktop:max-w-[773.5px] flex-col items-start gap-[30px] desktop:gap-10 p-6 laptop:p-10 desktop:p-[50px] bg-dark-gray ring-1 ring-inset ring-signal-black shadow-[0_0_0_6px_#191919] laptop:shadow-[0_0_0_8px_#191919] m-1.5 lg:m-[6px_0_6px_6px] laptop:m-[8px_0_8px_8px] rounded-[10px] laptop:rounded-xl animate-pulse"
          >
            <div className="max-lg:items-stretch flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center w-full max-lg:gap-5">
              <div className="flex flex-col items-start gap-0.5 laptop:gap-1 desktop:gap-1.5">
                <div className="h-2 bg-gray-700 w-24 rounded-full"></div>
                <div className="h-2.5 bg-gray-700 w-48 rounded-full"></div>
              </div>
              <div className="w-[309px] lg:w-[118px] desktop:w-[148px] h-[49px] desktop:h-[63px] bg-gray-700 btn-primary max-lg:grow text-center z-50"></div>
            </div>
            <div className="w-full group relative flex flex-col gap-[30px] desktop:gap-10">
              <div className="grid grid-cols-2 items-start gap-4 laptop:gap-5 desktop:gap-[30px] divide-x-[1px] divide-signal-black">
                <div className="flex flex-col grow gap-1 xs:gap-1.5 desktop:gap-2">
                  <div className="inline-flex items-center gap-0.5 laptop:gap-1 desktop:gap-1.5">
                    <div className="w-[18px] h-[18px] xl:w-5 xl:h-5 desktop:w-6 desktop:h-6 bg-gray-700"></div>
                    <div className="h-2 bg-gray-700 w-24 rounded-full"></div>
                  </div>
                  <div className="h-2 bg-gray-700 w-48 rounded-full"></div>
                </div>
                <div className="flex flex-col grow pl-5 desktop:pl-[30px] gap-1 xs:gap-1.5 desktop:gap-2">
                  <div className="inline-flex items-center gap-0.5 laptop:gap-1 desktop:gap-1.5">
                    <div className="w-[18px] h-[18px] xl:w-5 xl:h-5 desktop:w-6 desktop:h-6 bg-gray-700"></div>
                    <div className="h-2 bg-gray-700 w-24 rounded-full"></div>
                  </div>
                  <div className="h-2 bg-gray-700 w-48 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gray-700 w-full min-h-[159px] laptop:min-h-[157px] desktop:min-h-[155px] flex flex-col items-start p-5 xl:p-[24px] desktop:p-[30px] gap-2 xl:gap-2.5 desktop:gap-3.5 ring-1 ring-inset ring-signal-black rounded-xl"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </article>
        </div>
        <div className="lg:border-t lg:border-solid lg:border-signal-black flex flex-row justify-end">
          <div className="max-lg:w-full shadow animate-pulse lg:pt-4 desktop:pt-5 flex flex-row max-laptop:justify-between laptop:items-start gap-2.5">
            <div className="p-2.5 desktop:p-3.5 w-[44px] desktop:w-[58px] h-[44px] desktop:h-[58px] ring-1 ring-inset ring-signal-black rounded-[69px] bg-gray-700"></div>
            <div className="p-2.5 desktop:p-3.5 w-[44px] desktop:w-[58px] h-[44px] desktop:h-[58px] ring-1 ring-inset ring-signal-black rounded-[69px] bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PropertiesSkeleton() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 pt-10 sm:pt-[60px] desktop:pt-20 lg:mx-0 lg:max-w-none">
      <div className="max-xl:overflow-hidden grid grid-cols-1 sm:grid-cols-[414.38px_414.38px] lg:grid-cols-[417.5px_417.5px_417.5px] xl:grid-cols-3 gap-[15px] xl:gap-5 desktop:gap-[30px] w-full pb-[30px] sm:pb-10 desktop:pb-[50px] border-b border-solid border-signal-black">
        <div
          role="status"
          className="shadow animate-pulse p-6 sm:p-[30px] desktop:p-10 flex-[1_0_0%] gap-4 sm:gap-5 desktop:gap-[30px] flex flex-col ring-1 ring-signal-black ring-inset rounded-xl"
        >
          <div className="flex items-center justify-center max-xs:max-w-full h-[210px] xs:h-[255px] desktop:max-w-[432px] desktop:h-[318px] bg-gray-700 rounded-[10px]">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="h-2.5 rounded-full bg-gray-700 w-48"></div>
            <div className="h-2 rounded-full bg-gray-700 max-w-[432px] mt-0.5 sm:mt-1 desktop:mt-1.5"></div>
            <div className="max-xs:flex-wrap flex items-center my-5 sm:my-6 desktop:my-[30px] gap-1.5 desktop:gap-2.5">
              <div className="bg-gray-700 w-[123px] desktop:w-[147px] items-center outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="17"
                  fill="none"
                  viewBox="0 0 22 18"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <g fill="#edf2f7" clipPath="url(#clip0_122_2006)">
                    <path d="M11.012 15.96H2.018c-.303 0-.443.138-.443.438 0 .077.004.155-.001.232a2.31 2.31 0 01-.033.276c-.065.331-.382.596-.761.592a.774.774 0 01-.755-.65 1.68 1.68 0 01-.02-.259c-.001-1.761-.013-3.523.004-5.284.01-1.027.389-1.92 1.116-2.663a3.932 3.932 0 011.568-.977c.472-.16.96-.21 1.458-.21 4.611.002 9.223-.002 13.834.004 1.352.001 2.446.538 3.257 1.605.398.524.636 1.12.717 1.772.028.219.04.442.04.664.004 1.71.003 3.42.002 5.13 0 .268-.067.511-.29.688-.237.187-.5.235-.782.121a.728.728 0 01-.478-.601c-.02-.146-.017-.295-.02-.443-.007-.238-.107-.381-.307-.425-.044-.01-.09-.01-.136-.01h-8.976zM10.902.5h5.833c.651 0 1.26.143 1.785.54.676.509 1.07 1.18 1.103 2.021.028.714.016 1.43.019 2.144.002.46 0 .921 0 1.382a.47.47 0 01-.013.124c-.034.125-.103.174-.232.15-.14-.026-.277-.083-.418-.098-.331-.036-.664-.06-.997-.078-.222-.011-.29-.05-.322-.266-.1-.68-.74-1.293-1.56-1.283-.913.01-1.826.002-2.739.002-.68 0-1.26.398-1.49 1.026-.033.09-.046.188-.063.283-.032.17-.096.233-.268.235-.36.004-.72.004-1.08 0-.165-.001-.23-.066-.26-.254a1.449 1.449 0 00-.316-.707c-.308-.375-.707-.58-1.198-.581-.942-.005-1.885-.003-2.828-.001-.792 0-1.412.61-1.513 1.279-.032.216-.097.254-.32.268-.367.024-.735.058-1.101.097-.113.012-.22.06-.333.078-.12.02-.176-.02-.21-.137a.511.511 0 01-.02-.143c0-1.104-.015-2.209.003-3.314.02-1.155.563-2.005 1.624-2.519C4.408.546 4.864.5 5.326.5h5.577z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_122_2006">
                      <path
                        fill="#edf2f7"
                        d="M0 0H22V17H0z"
                        transform="translate(0 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-gray-700 w-[126px] desktop:w-[152px] items-center outline outline-1 outline-solid outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  fill="none"
                  viewBox="0 0 22 22"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <g fill="#edf2f7" clipPath="url(#clip0_122_2010)">
                    <path d="M1.27 14.262h9.84v1.808h6.152v-1.805h2.443c.159 2.15.171 4.065-2.034 5.525-.027.018-.049.042-.109.095l.803.668-.973.931c-.29-.3-.604-.647-.946-.963-.1-.094-.279-.132-.425-.14-.238-.015-.48.023-.72.024-3.195.002-6.39.002-9.586.002-.153 0-.317.029-.458-.014-.426-.128-.697.07-.95.375-.217.26-.463.495-.688.733l-.884-.93.755-.67c-.2-.143-.351-.243-.494-.354-1.068-.823-1.645-1.914-1.72-3.255-.038-.664-.007-1.332-.007-2.03zM1.276 9.287c-.006-.119-.015-.226-.015-.333 0-1.74-.003-3.48 0-5.22C1.264 1.82 2.591.485 4.501.5c.641.005 1.302-.009 1.918.137C7.512.895 8.2 1.653 8.532 2.72c.065.207.148.308.376.37 1.286.348 2.188 1.55 2.205 2.891.003.216 0 .432 0 .667H5.026c-.29-1.535.544-3.12 2.287-3.614-.157-.685-.832-1.263-1.54-1.288a21.512 21.512 0 00-1.608 0c-.922.036-1.665.884-1.668 1.9-.007 1.75-.002 3.502-.002 5.253v.386h-1.22v.001zM11.093 13.033H1.388c-.673 0-1.157-.32-1.328-.863-.256-.819.324-1.607 1.208-1.619.94-.012 1.881-.003 2.822-.003h7.003v2.484z"></path>
                    <path d="M16.024 14.871h-3.66c-.007-.116-.016-.22-.016-.326-.002-1.268-.002-2.537 0-3.805 0-.918.501-1.422 1.415-1.426.339-.001.678-.008 1.017.002.76.024 1.258.536 1.26 1.3.004 1.323.001 2.645 0 3.969 0 .086-.01.171-.016.286zM17.283 13.02v-2.472c.595 0 1.182-.002 1.768 0 .305.002.617-.023.916.026.652.108 1.076.642 1.05 1.265-.027.612-.478 1.137-1.119 1.17-.859.045-1.722.011-2.614.011z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_122_2010">
                      <path
                        fill="#edf2f7"
                        d="M0 0H21.017V21H0z"
                        transform="translate(0 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-gray-700 w-[78px] desktop:w-[89px] items-center outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <path
                    fill="#edf2f7"
                    fillRule="evenodd"
                    d="M4.8 20.3V4.7h-.3a.9.9 0 110-1.8h15a.9.9 0 110 1.8h-.3v15.6h.3a.9.9 0 010 1.8h-4.2a.9.9 0 01-.9-.9v-3a.9.9 0 00-.9-.9h-3a.9.9 0 00-.9.9v3a.9.9 0 01-.9.9H4.5a.9.9 0 110-1.8h.3zM8.4 7.1a.6.6 0 01.6-.6h1.2a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6H9a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6h1.2a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6H9zm4.2-4.2a.6.6 0 01.6-.6H15a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6h-1.2a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6H15a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6h-1.2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[5px] min-[390px]:gap-[30px] sm:gap-10 desktop:gap-[50px]">
              <div className="laptop:flex laptop:flex-col laptop:gap-[1px] desktop:gap-0.5">
                <div className="h-2 rounded-full bg-gray-700 w-[39px]"></div>
                <div className="h-2.5 rounded-full bg-gray-700 w-[103px]"></div>
              </div>
              <div className="whitespace-nowrap h-[49px] desktop:h-[63px] flex-[1_0_0%] py-3.5 desktop:py-[18px] px-5 desktop:px-6 rounded-lg desktop:rounded-[10px] bg-gray-700"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="shadow animate-pulse p-6 sm:p-[30px] desktop:p-10 flex-[1_0_0%] gap-4 sm:gap-5 desktop:gap-[30px] hidden sm:flex flex-col ring-1 ring-signal-black ring-inset rounded-xl"
        >
          <div className="flex items-center justify-center max-xs:max-w-full h-[210px] xs:h-[255px] desktop:max-w-[432px] desktop:h-[318px] bg-gray-700 rounded-[10px]">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="h-2.5 rounded-full bg-gray-700 w-48"></div>
            <div className="h-2 rounded-full bg-gray-700 max-w-[432px] mt-0.5 sm:mt-1 desktop:mt-1.5"></div>
            <div className="max-sm:flex-wrap flex items-center my-5 sm:my-6 desktop:my-[30px] gap-1.5 desktop:gap-2.5">
              <div className="bg-gray-700 w-48 items-center outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="17"
                  fill="none"
                  viewBox="0 0 22 18"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <g fill="#edf2f7" clipPath="url(#clip0_122_2006)">
                    <path d="M11.012 15.96H2.018c-.303 0-.443.138-.443.438 0 .077.004.155-.001.232a2.31 2.31 0 01-.033.276c-.065.331-.382.596-.761.592a.774.774 0 01-.755-.65 1.68 1.68 0 01-.02-.259c-.001-1.761-.013-3.523.004-5.284.01-1.027.389-1.92 1.116-2.663a3.932 3.932 0 011.568-.977c.472-.16.96-.21 1.458-.21 4.611.002 9.223-.002 13.834.004 1.352.001 2.446.538 3.257 1.605.398.524.636 1.12.717 1.772.028.219.04.442.04.664.004 1.71.003 3.42.002 5.13 0 .268-.067.511-.29.688-.237.187-.5.235-.782.121a.728.728 0 01-.478-.601c-.02-.146-.017-.295-.02-.443-.007-.238-.107-.381-.307-.425-.044-.01-.09-.01-.136-.01h-8.976zM10.902.5h5.833c.651 0 1.26.143 1.785.54.676.509 1.07 1.18 1.103 2.021.028.714.016 1.43.019 2.144.002.46 0 .921 0 1.382a.47.47 0 01-.013.124c-.034.125-.103.174-.232.15-.14-.026-.277-.083-.418-.098-.331-.036-.664-.06-.997-.078-.222-.011-.29-.05-.322-.266-.1-.68-.74-1.293-1.56-1.283-.913.01-1.826.002-2.739.002-.68 0-1.26.398-1.49 1.026-.033.09-.046.188-.063.283-.032.17-.096.233-.268.235-.36.004-.72.004-1.08 0-.165-.001-.23-.066-.26-.254a1.449 1.449 0 00-.316-.707c-.308-.375-.707-.58-1.198-.581-.942-.005-1.885-.003-2.828-.001-.792 0-1.412.61-1.513 1.279-.032.216-.097.254-.32.268-.367.024-.735.058-1.101.097-.113.012-.22.06-.333.078-.12.02-.176-.02-.21-.137a.511.511 0 01-.02-.143c0-1.104-.015-2.209.003-3.314.02-1.155.563-2.005 1.624-2.519C4.408.546 4.864.5 5.326.5h5.577z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_122_2006">
                      <path
                        fill="#edf2f7"
                        d="M0 0H22V17H0z"
                        transform="translate(0 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-gray-700 w-48 items-center outline outline-1 outline-solid outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  fill="none"
                  viewBox="0 0 22 22"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <g fill="#edf2f7" clipPath="url(#clip0_122_2010)">
                    <path d="M1.27 14.262h9.84v1.808h6.152v-1.805h2.443c.159 2.15.171 4.065-2.034 5.525-.027.018-.049.042-.109.095l.803.668-.973.931c-.29-.3-.604-.647-.946-.963-.1-.094-.279-.132-.425-.14-.238-.015-.48.023-.72.024-3.195.002-6.39.002-9.586.002-.153 0-.317.029-.458-.014-.426-.128-.697.07-.95.375-.217.26-.463.495-.688.733l-.884-.93.755-.67c-.2-.143-.351-.243-.494-.354-1.068-.823-1.645-1.914-1.72-3.255-.038-.664-.007-1.332-.007-2.03zM1.276 9.287c-.006-.119-.015-.226-.015-.333 0-1.74-.003-3.48 0-5.22C1.264 1.82 2.591.485 4.501.5c.641.005 1.302-.009 1.918.137C7.512.895 8.2 1.653 8.532 2.72c.065.207.148.308.376.37 1.286.348 2.188 1.55 2.205 2.891.003.216 0 .432 0 .667H5.026c-.29-1.535.544-3.12 2.287-3.614-.157-.685-.832-1.263-1.54-1.288a21.512 21.512 0 00-1.608 0c-.922.036-1.665.884-1.668 1.9-.007 1.75-.002 3.502-.002 5.253v.386h-1.22v.001zM11.093 13.033H1.388c-.673 0-1.157-.32-1.328-.863-.256-.819.324-1.607 1.208-1.619.94-.012 1.881-.003 2.822-.003h7.003v2.484z"></path>
                    <path d="M16.024 14.871h-3.66c-.007-.116-.016-.22-.016-.326-.002-1.268-.002-2.537 0-3.805 0-.918.501-1.422 1.415-1.426.339-.001.678-.008 1.017.002.76.024 1.258.536 1.26 1.3.004 1.323.001 2.645 0 3.969 0 .086-.01.171-.016.286zM17.283 13.02v-2.472c.595 0 1.182-.002 1.768 0 .305.002.617-.023.916.026.652.108 1.076.642 1.05 1.265-.027.612-.478 1.137-1.119 1.17-.859.045-1.722.011-2.614.011z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_122_2010">
                      <path
                        fill="#edf2f7"
                        d="M0 0H21.017V21H0z"
                        transform="translate(0 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-gray-700 w-48 items-center outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <path
                    fill="#edf2f7"
                    fillRule="evenodd"
                    d="M4.8 20.3V4.7h-.3a.9.9 0 110-1.8h15a.9.9 0 110 1.8h-.3v15.6h.3a.9.9 0 010 1.8h-4.2a.9.9 0 01-.9-.9v-3a.9.9 0 00-.9-.9h-3a.9.9 0 00-.9.9v3a.9.9 0 01-.9.9H4.5a.9.9 0 110-1.8h.3zM8.4 7.1a.6.6 0 01.6-.6h1.2a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6H9a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6h1.2a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6H9zm4.2-4.2a.6.6 0 01.6-.6H15a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6h-1.2a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6H15a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6h-1.2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[5px] min-[390px]:gap-[30px] sm:gap-10 desktop:gap-[50px]">
              <div className="laptop:flex laptop:flex-col laptop:gap-[1px] desktop:gap-0.5">
                <div className="h-2 rounded-full bg-gray-700 w-[39px]"></div>
                <div className="h-2.5 rounded-full bg-gray-700 w-[103px]"></div>
              </div>
              <div className="whitespace-nowrap h-[49px] desktop:h-[63px] flex-[1_0_0%] py-3.5 desktop:py-[18px] px-5 desktop:px-6 rounded-lg desktop:rounded-[10px] bg-gray-700"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="shadow animate-pulse p-6 sm:p-[30px] desktop:p-10 flex-[1_0_0%] gap-4 sm:gap-5 desktop:gap-[30px] hidden lg:flex flex-col ring-1 ring-signal-black ring-inset rounded-xl"
        >
          <div className="flex items-center justify-center max-xs:max-w-full h-[210px] xs:h-[255px] desktop:max-w-[432px] desktop:h-[318px] bg-gray-700 rounded-[10px]">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="h-2.5 rounded-full bg-gray-700 w-48"></div>
            <div className="h-2 rounded-full bg-gray-700 max-w-[432px] mt-0.5 sm:mt-1 desktop:mt-1.5"></div>
            <div className="max-sm:flex-wrap flex items-center my-5 sm:my-6 desktop:my-[30px] gap-1.5 desktop:gap-2.5">
              <div className="bg-gray-700 w-48 items-center outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="17"
                  fill="none"
                  viewBox="0 0 22 18"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <g fill="#edf2f7" clipPath="url(#clip0_122_2006)">
                    <path d="M11.012 15.96H2.018c-.303 0-.443.138-.443.438 0 .077.004.155-.001.232a2.31 2.31 0 01-.033.276c-.065.331-.382.596-.761.592a.774.774 0 01-.755-.65 1.68 1.68 0 01-.02-.259c-.001-1.761-.013-3.523.004-5.284.01-1.027.389-1.92 1.116-2.663a3.932 3.932 0 011.568-.977c.472-.16.96-.21 1.458-.21 4.611.002 9.223-.002 13.834.004 1.352.001 2.446.538 3.257 1.605.398.524.636 1.12.717 1.772.028.219.04.442.04.664.004 1.71.003 3.42.002 5.13 0 .268-.067.511-.29.688-.237.187-.5.235-.782.121a.728.728 0 01-.478-.601c-.02-.146-.017-.295-.02-.443-.007-.238-.107-.381-.307-.425-.044-.01-.09-.01-.136-.01h-8.976zM10.902.5h5.833c.651 0 1.26.143 1.785.54.676.509 1.07 1.18 1.103 2.021.028.714.016 1.43.019 2.144.002.46 0 .921 0 1.382a.47.47 0 01-.013.124c-.034.125-.103.174-.232.15-.14-.026-.277-.083-.418-.098-.331-.036-.664-.06-.997-.078-.222-.011-.29-.05-.322-.266-.1-.68-.74-1.293-1.56-1.283-.913.01-1.826.002-2.739.002-.68 0-1.26.398-1.49 1.026-.033.09-.046.188-.063.283-.032.17-.096.233-.268.235-.36.004-.72.004-1.08 0-.165-.001-.23-.066-.26-.254a1.449 1.449 0 00-.316-.707c-.308-.375-.707-.58-1.198-.581-.942-.005-1.885-.003-2.828-.001-.792 0-1.412.61-1.513 1.279-.032.216-.097.254-.32.268-.367.024-.735.058-1.101.097-.113.012-.22.06-.333.078-.12.02-.176-.02-.21-.137a.511.511 0 01-.02-.143c0-1.104-.015-2.209.003-3.314.02-1.155.563-2.005 1.624-2.519C4.408.546 4.864.5 5.326.5h5.577z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_122_2006">
                      <path
                        fill="#edf2f7"
                        d="M0 0H22V17H0z"
                        transform="translate(0 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-gray-700 w-48 items-center outline outline-1 outline-solid outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  fill="none"
                  viewBox="0 0 22 22"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <g fill="#edf2f7" clipPath="url(#clip0_122_2010)">
                    <path d="M1.27 14.262h9.84v1.808h6.152v-1.805h2.443c.159 2.15.171 4.065-2.034 5.525-.027.018-.049.042-.109.095l.803.668-.973.931c-.29-.3-.604-.647-.946-.963-.1-.094-.279-.132-.425-.14-.238-.015-.48.023-.72.024-3.195.002-6.39.002-9.586.002-.153 0-.317.029-.458-.014-.426-.128-.697.07-.95.375-.217.26-.463.495-.688.733l-.884-.93.755-.67c-.2-.143-.351-.243-.494-.354-1.068-.823-1.645-1.914-1.72-3.255-.038-.664-.007-1.332-.007-2.03zM1.276 9.287c-.006-.119-.015-.226-.015-.333 0-1.74-.003-3.48 0-5.22C1.264 1.82 2.591.485 4.501.5c.641.005 1.302-.009 1.918.137C7.512.895 8.2 1.653 8.532 2.72c.065.207.148.308.376.37 1.286.348 2.188 1.55 2.205 2.891.003.216 0 .432 0 .667H5.026c-.29-1.535.544-3.12 2.287-3.614-.157-.685-.832-1.263-1.54-1.288a21.512 21.512 0 00-1.608 0c-.922.036-1.665.884-1.668 1.9-.007 1.75-.002 3.502-.002 5.253v.386h-1.22v.001zM11.093 13.033H1.388c-.673 0-1.157-.32-1.328-.863-.256-.819.324-1.607 1.208-1.619.94-.012 1.881-.003 2.822-.003h7.003v2.484z"></path>
                    <path d="M16.024 14.871h-3.66c-.007-.116-.016-.22-.016-.326-.002-1.268-.002-2.537 0-3.805 0-.918.501-1.422 1.415-1.426.339-.001.678-.008 1.017.002.76.024 1.258.536 1.26 1.3.004 1.323.001 2.645 0 3.969 0 .086-.01.171-.016.286zM17.283 13.02v-2.472c.595 0 1.182-.002 1.768 0 .305.002.617-.023.916.026.652.108 1.076.642 1.05 1.265-.027.612-.478 1.137-1.119 1.17-.859.045-1.722.011-2.614.011z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_122_2010">
                      <path
                        fill="#edf2f7"
                        d="M0 0H21.017V21H0z"
                        transform="translate(0 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-gray-700 w-48 items-center outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                  className="w-5 h-5 desktop:w-6 desktop:h-6"
                >
                  <path
                    fill="#edf2f7"
                    fillRule="evenodd"
                    d="M4.8 20.3V4.7h-.3a.9.9 0 110-1.8h15a.9.9 0 110 1.8h-.3v15.6h.3a.9.9 0 010 1.8h-4.2a.9.9 0 01-.9-.9v-3a.9.9 0 00-.9-.9h-3a.9.9 0 00-.9.9v3a.9.9 0 01-.9.9H4.5a.9.9 0 110-1.8h.3zM8.4 7.1a.6.6 0 01.6-.6h1.2a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6H9a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6h1.2a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6H9zm4.2-4.2a.6.6 0 01.6-.6H15a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6h-1.2a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6H15a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6h-1.2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[5px] min-[390px]:gap-[30px] sm:gap-10 desktop:gap-[50px]">
              <div className="laptop:flex laptop:flex-col laptop:gap-[1px] desktop:gap-0.5">
                <div className="h-2 rounded-full bg-gray-700 w-[39px]"></div>
                <div className="h-2.5 rounded-full bg-gray-700 w-[103px]"></div>
              </div>
              <div className="whitespace-nowrap h-[49px] desktop:h-[63px] flex-[1_0_0%] py-3.5 desktop:py-[18px] px-5 desktop:px-6 rounded-lg desktop:rounded-[10px] bg-gray-700"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="max-lg:flex max-[390px]:justify-evenly max-lg:justify-between lg:justify-end flex flex-col min-[389px]:flex-row items-center">
        <div className="shadow animate-pulse w-[155px] h-[49px] btn-primary inline-flex lg:hidden mt-4 bg-gray-700"></div>
        <div className="shadow animate-pulse lg:pt-4 desktop:pt-5 flex flex-row max-laptop:justify-between items-end laptop:items-start gap-2.5 max-lg:mt-4">
          <div className="p-2.5 desktop:p-3.5 w-[44px] desktop:w-[58px] h-[44px] desktop:h-[58px] ring-1 ring-inset ring-signal-black rounded-[69px] bg-gray-700"></div>
          <div className="p-2.5 desktop:p-3.5 w-[44px] desktop:w-[58px] h-[44px] desktop:h-[58px] ring-1 ring-inset ring-signal-black rounded-[69px] bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
