import { BoltIcon } from "@heroicons/react/24/solid";
import { formatCurrency } from "@/app/lib/utils";

const features = [
  {
    id: "1",
    title: "Expansive oceanfront terrace for outdoor entertaining",
  },
  {
    id: "2",
    title: "Gourmet kitchen with top-of-the-line appliances",
  },
  {
    id: "3",
    title: "Private beach access for morning strolls and sunset views",
  },
  {
    id: "4",
    title: "Master suite with a spa-inspired bathroom and ocean-facing balcony",
  },
  {
    id: "5",
    title: "Private garage and ample storage space",
  },
];

export const PropertyDetails = () => {
  return (
    <section className="container pt-5 desktop:pt-[30px] grid grid-cols-1 lg:grid-cols-2 items-start gap-5 desktop:gap-[30px]">
      <div className="flex flex-col items-start p-5 xl:p-10 desktop:p-[50px] gap-5 laptop:gap-10 desktop:gap-[50px] ring-1 ring-inset ring-signal-black rounded-[10px] desktop:rounded-xl">
        <div className="flex flex-col gap-1.5 xl:gap-2.5 desktop:gap-3.5">
          <h2 className="not-italic font-semibold text-lg xl:text-xl desktop:text-2xl leading-[27px] xl:leading-[30px] desktop:leading-9">
            Description
          </h2>
          <p className="not-italic font-medium text-sm xl:text-base desktop:text-lg leading-[21px] xl:leading-6 desktop:leading-[27px] text-[#999]">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            T With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
        </div>
        <div className="w-full sm:h-[75px] desktop:h-[93px] border-t border-signal-black">
          <div className="grid max-sm:gap-y-5 pt-[19.2px] laptop:pt-4 desktop:pt-5 h-full max-w-[683px] grid-cols-2 sm:grid-cols-3 mx-auto font-medium">
            <div className="inline-flex flex-col items-start justify-center gap-1.5 xl:gap-2 desktop:gap-2.5 border-signal-black border-e">
              <a className="inline-flex items-start laptop:items-center gap-1 desktop:gap-1.5 not-italic text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] font-medium text-[#999]">
                <svg
                  className="w-5 h-5 desktop:w-6 desktop:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                >
                  <g fill="#999" clipPath="url(#clip0_102_9649)">
                    <path d="M12.012 19.96H3.018c-.303 0-.443.138-.443.438 0 .077.004.155-.001.232a2.31 2.31 0 01-.033.276c-.065.331-.382.596-.761.592a.774.774 0 01-.755-.65 1.681 1.681 0 01-.02-.259c-.001-1.761-.013-3.523.004-5.284.01-1.027.389-1.92 1.116-2.663a3.932 3.932 0 011.568-.977c.472-.16.96-.21 1.458-.21 4.611.002 9.223-.002 13.834.004 1.352.002 2.446.538 3.257 1.605.398.524.636 1.12.717 1.772.028.219.04.442.04.664.004 1.71.003 3.42.002 5.13 0 .268-.067.511-.29.688-.237.187-.5.235-.782.121a.728.728 0 01-.478-.601c-.02-.146-.017-.295-.02-.443-.007-.238-.107-.381-.307-.425-.044-.01-.09-.01-.136-.01h-8.976zM11.903 4.5h5.833c.65 0 1.26.143 1.784.54.676.509 1.07 1.18 1.104 2.021.028.714.015 1.43.018 2.144.003.46 0 .921 0 1.382a.47.47 0 01-.013.124c-.034.125-.102.174-.231.15-.141-.026-.277-.083-.418-.098-.332-.036-.664-.06-.997-.078-.222-.011-.29-.05-.322-.266-.101-.68-.741-1.293-1.56-1.283-.913.01-1.827.002-2.74.002-.679 0-1.259.398-1.49 1.026-.033.09-.045.188-.063.283-.032.17-.096.233-.267.235-.36.004-.72.004-1.08 0-.166-.001-.231-.066-.261-.254a1.449 1.449 0 00-.316-.707c-.308-.375-.706-.58-1.197-.581-.943-.005-1.885-.003-2.829-.001-.792 0-1.411.61-1.512 1.279-.032.216-.098.254-.32.268-.367.024-.735.058-1.102.097-.113.012-.22.06-.332.078-.12.02-.177-.02-.21-.137a.511.511 0 01-.02-.143c-.001-1.104-.016-2.209.003-3.314.02-1.155.562-2.005 1.623-2.519.42-.202.877-.248 1.338-.248h5.577z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_102_9649">
                      <path
                        fill="#fff"
                        d="M0 0H22V17H0z"
                        transform="translate(1 4.5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                Bedrooms
              </a>
              <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9 group-hover:text-blue-600">
                04
              </span>
            </div>
            <div className="inline-flex flex-col pl-5 items-start justify-center gap-1.5 xl:gap-2 desktop:gap-2.5 border-l sm:border-e border-signal-black">
              <a className="inline-flex items-start laptop:items-center gap-1 desktop:gap-1.5 not-italic text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] font-medium text-[#999]">
                <svg
                  className="w-5 h-5 desktop:w-6 desktop:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                >
                  <g fill="#999" clipPath="url(#clip0_102_9694)">
                    <path d="M2.27 16.262h9.841v1.808h6.151v-1.805h2.444c.159 2.15.171 4.065-2.034 5.525-.027.018-.049.042-.109.095l.803.668-.973.931c-.29-.3-.604-.647-.946-.963-.1-.094-.279-.132-.425-.14-.238-.015-.48.023-.72.024-3.195.002-6.39.002-9.586.002-.153 0-.317.029-.458-.014-.426-.128-.697.07-.95.375-.217.26-.463.495-.688.733l-.884-.93.755-.67c-.201-.143-.351-.243-.494-.354-1.068-.823-1.645-1.914-1.72-3.255-.038-.664-.007-1.332-.007-2.03zM2.276 11.287c-.006-.119-.015-.226-.015-.333 0-1.74-.003-3.48 0-5.22.003-1.913 1.33-3.248 3.24-3.234.641.005 1.302-.009 1.918.137C8.512 2.895 9.2 3.653 9.532 4.72c.065.207.148.308.376.37 1.286.348 2.188 1.55 2.205 2.891.003.216 0 .432 0 .667H6.026c-.29-1.535.544-3.12 2.287-3.614-.157-.685-.832-1.263-1.54-1.288a21.512 21.512 0 00-1.608 0c-.922.036-1.665.884-1.668 1.9-.007 1.75-.002 3.502-.002 5.253v.386h-1.22v.001zM12.094 15.033H2.388c-.673 0-1.157-.32-1.327-.863-.256-.819.324-1.607 1.208-1.619.94-.012 1.88-.003 2.821-.003H12.094v2.484z"></path>
                    <path d="M17.023 16.871h-3.66c-.006-.115-.016-.22-.016-.326-.002-1.268-.002-2.537 0-3.805 0-.918.502-1.422 1.415-1.426.339-.001.678-.008 1.017.002.761.024 1.258.536 1.26 1.3.004 1.322.001 2.645 0 3.969 0 .086-.01.171-.016.286zM18.283 15.02v-2.472c.595 0 1.182-.002 1.768 0 .305.002.617-.023.916.026.652.108 1.076.642 1.05 1.265-.027.612-.478 1.137-1.119 1.17-.859.045-1.722.011-2.614.011z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_102_9694">
                      <path
                        fill="#fff"
                        d="M0 0H21.017V21H0z"
                        transform="translate(1 2.5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                Bathrooms
              </a>
              <span className="not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9 group-hover:text-blue-600">
                03
              </span>
            </div>
            <div className="max-sm:pt-[19.2px] max-sm:border-signal-black max-sm:border-t max-sm:border-solid max-sm:col-span-2 inline-flex flex-col items-start justify-center sm:pl-5 gap-1.5 xl:gap-2 desktop:gap-2.5">
              <a className="inline-flex items-start laptop:items-center gap-1 desktop:gap-1.5 not-italic text-sm desktop:text-lg leading-[21px] desktop:leading-[27px] font-medium text-[#999]">
                <svg
                  className="w-5 h-5 desktop:w-6 desktop:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                >
                  <g clipPath="url(#clip0_102_9713)">
                    <path
                      fill="#999"
                      d="M2.837 5.766l-.669.785L1 5.374l2.776-2.778 2.775 2.78-1.147 1.146-.814-.907v3.79L9.84 4.15c-.464 0-.988-.033-1.506.01-.448.036-.762-.112-1.054-.443-.355-.4-.76-.76-1.197-1.19.166-.012.256-.024.347-.024 4.393-.001 8.785-.003 13.178 0 1.402 0 2.4.977 2.403 2.37.007 4.416.002 8.831.002 13.247 0 .061-.006.123-.091.243-.398-.416-.778-.852-1.201-1.241-.275-.253-.385-.517-.363-.888.032-.52.008-1.043.008-1.56l-5.253 5.259h3.797l-.935-.763 1.228-1.182 2.738 2.768-2.765 2.745-1.116-1.137.73-.645a5.747 5.747 0 00-.049-.116h-.362c-4.327 0-8.654.002-12.98 0-1.185 0-2.039-.575-2.365-1.62a3.103 3.103 0 01-.116-.907c-.007-4.305-.005-8.61-.005-12.917v-.348l-.077-.045h.002zm1.726 12.917L19.093 4.15c-.69 0-1.4-.006-2.109.007-.09.002-.196.085-.269.157A13692.55 13692.55 0 004.726 16.306c-.072.073-.155.178-.157.27-.013.708-.007 1.417-.007 2.107zM20.365 5.458L5.867 19.953c.659 0 1.358.006 2.057-.008.09-.002.195-.088.267-.161C12.196 15.783 16.2 11.779 20.2 7.773c.072-.073.156-.178.157-.269.013-.698.007-1.397.007-2.046h.001zm0 4.63l-9.874 9.865c.668 0 1.366.006 2.065-.008.09-.002.193-.092.266-.165 2.463-2.458 4.922-4.918 7.38-7.381.071-.073.154-.179.156-.27.013-.7.007-1.398.007-2.042zM4.563 14.023l9.876-9.873c-.66 0-1.336-.006-2.013.006-.092.002-.2.08-.271.15a4644.84 4644.84 0 00-7.428 7.43c-.072.072-.155.176-.157.268-.013.678-.007 1.356-.007 2.02z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_102_9713">
                      <path
                        fill="#fff"
                        d="M0 0H21.015V21H0z"
                        transform="translate(1 2.5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                Area
              </a>
              <span className="text-nowrap not-italic font-semibold text-lg laptop:text-xl desktop:text-2xl leading-[27px] laptop:leading-[30px] desktop:leading-9 group-hover:text-blue-600">
                {`${formatCurrency(2500)}  Square Feet`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-5 xl:p-10 desktop:p-[50px] gap-5 xl:gap-10 desktop:gap-[50px] ring-1 ring-inset ring-signal-black rounded-xl">
        <h2 className="not-italic text-lg xl:text-xl desktop:text-2xl leading-[27px] xl:leading-[30px] desktop:leading-9 font-semibold">
          Key Features and Amenities
        </h2>
        <ul className="space-y-[18px] xl:space-y-5 desktop:space-y-[30px] text-left">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="flex items-center py-2.5 xl:py-3.5 desktop:py-[18px] px-3 xl:px-4 default:px-6 space-x-2.5 rtl:space-x-reverse bg-[linear-gradient(90deg,_#1A1A1A_0%,_rgba(26,26,26,0)_100%)] border-solid border-l-[1px] border-[#703BF7]"
            >
              <BoltIcon className="w-[18px] h-[18px] laptop:w-5 xl:h-5 desktop:w-6 desktop:h-6 text-white" />
              <span className="not-italic font-medium text-sm xl:text-base desktop:text-lg leading-[21px] xl:leading-6 desktop:leading-[27px] text-[#999]">
                {feature.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
