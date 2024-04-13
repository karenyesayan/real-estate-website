import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "../lib/utils";
import { Swiper, SwiperSlide } from "./swiper";
import Controler from "./slider-controler";
import { fetchProperties } from "../lib/data";

// const properties = [
//   {
//     id: "1",
//     type: "Villa",
//     name: "Seaside Serenity Villa",
//     href: "#",
//     description:
//       "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
//     shortDescription: "Coastal Escapes - Where Waves Beckon",
//     bedrooms: 4,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/seaside-villa.png",
//   },
//   {
//     id: "2",
//     type: "Villa",
//     name: "Metropolitan Haven",
//     href: "#",
//     description:
//       "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
//     shortDescription: "Urban Oasis - Life in the Heart of the City",
//     bedrooms: 2,
//     bathrooms: 2,
//     price: 550000,
//     imageUrl: "/metropolitan.png",
//   },
//   {
//     id: "3",
//     type: "Villa",
//     name: "Rustic Retreat Cottage",
//     href: "#",
//     description:
//       "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
//     shortDescription: "Countryside Charm - Escape to Nature's Embrace",
//     bedrooms: 3,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/rustic-cottage.png",
//   },
//   {
//     id: "4",
//     type: "Villa",
//     name: "Seaside Serenity Villa",
//     href: "#",
//     description:
//       "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
//     shortDescription: "Coastal Escapes - Where Waves Beckon",
//     bedrooms: 4,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/seaside-villa.png",
//   },
//   {
//     id: "5",
//     type: "Villa",
//     name: "Metropolitan Haven",
//     href: "#",
//     description:
//       "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
//     shortDescription: "Urban Oasis - Life in the Heart of the City",
//     bedrooms: 2,
//     bathrooms: 2,
//     price: 550000,
//     imageUrl: "/metropolitan.png",
//   },
//   {
//     id: "6",
//     type: "Villa",
//     name: "Rustic Retreat Cottage",
//     href: "#",
//     description:
//       "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
//     shortDescription: "Countryside Charm - Escape to Nature's Embrace",
//     bedrooms: 3,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/rustic-cottage.png",
//   },
//   {
//     id: "7",
//     type: "Villa",
//     name: "Seaside Serenity Villa",
//     href: "#",
//     description:
//       "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
//     shortDescription: "Coastal Escapes - Where Waves Beckon",
//     bedrooms: 4,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/seaside-villa.png",
//   },
//   {
//     id: "8",
//     type: "Villa",
//     name: "Metropolitan Haven",
//     href: "#",
//     description:
//       "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
//     shortDescription: "Urban Oasis - Life in the Heart of the City",
//     bedrooms: 2,
//     bathrooms: 2,
//     price: 550000,
//     imageUrl: "/metropolitan.png",
//   },
//   {
//     id: "9",
//     type: "Villa",
//     name: "Rustic Retreat Cottage",
//     href: "#",
//     description:
//       "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
//     shortDescription: "Countryside Charm - Escape to Nature's Embrace",
//     bedrooms: 3,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/rustic-cottage.png",
//   },
//   {
//     id: "10",
//     type: "Villa",
//     name: "Seaside Serenity Villa",
//     href: "#",
//     description:
//       "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
//     shortDescription: "Coastal Escapes - Where Waves Beckon",
//     bedrooms: 4,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/seaside-villa.png",
//   },
//   {
//     id: "11",
//     type: "Villa",
//     name: "Metropolitan Haven",
//     href: "#",
//     description:
//       "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
//     shortDescription: "Urban Oasis - Life in the Heart of the City",
//     bedrooms: 2,
//     bathrooms: 2,
//     price: 550000,
//     imageUrl: "/metropolitan.png",
//   },
//   {
//     id: "12",
//     type: "Villa",
//     name: "Rustic Retreat Cottage",
//     href: "#",
//     description:
//       "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
//     shortDescription: "Countryside Charm - Escape to Nature's Embrace",
//     bedrooms: 3,
//     bathrooms: 3,
//     price: 550000,
//     imageUrl: "/rustic-cottage.png",
//   },
// ];

export default async function PropCards({ cardType }: { cardType?: string }) {
  const properties = await fetchProperties();

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 pt-10 sm:pt-[60px] desktop:pt-20 lg:mx-0 lg:max-w-none">
      <Swiper
        currentEl=".properties-pagination"
        breakpoints={{
          0: {
            slidesPerView: 1,
            pagination: {
              el: ".properties-pagination-center",
            },
          },
          640: {
            slidesPerView: 1.4,
            spaceBetween: 15,
            pagination: {
              el: ".properties-pagination-center",
            },
          },
          768: {
            slidesPerView: 1.6,
            spaceBetween: 15,
            pagination: {
              el: ".properties-pagination-center",
            },
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
            width: 850,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={{
          disabledClass: "swiper-button-disabled",
          nextEl: ".properties-button-next",
          prevEl: ".properties-button-prev",
        }}
        className={clsx(
          "swiper2 w-full pb-[30px] sm:pb-10 desktop:pb-[50px] border-b border-solid border-signal-black",
          {
            "max-sm:pb-0 max-sm:-mb-1.5 max-sm:border-b-0": cardType,
          }
        )}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="p-6 sm:p-[30px] desktop:p-10 flex-[1_0_0%] gap-4 sm:gap-5 desktop:gap-[30px] flex flex-col ring-1 ring-signal-black ring-inset rounded-xl opacity-85 transition duration-300 ease-in-out hover:opacity-100 hover:ring-blue-700">
              <Link
                href="#"
                className="max-xs:max-w-full h-[210px] xs:h-[255px] desktop:max-w-[432px] desktop:h-full"
              >
                <Image
                  src={property.image_url}
                  // src={property.imageUrl}
                  alt={`${property.name} image`}
                  width={432}
                  height={318}
                  className="rounded-[10px] h-full w-full object-cover"
                />
              </Link>
              <div className="flex flex-col">
                {cardType && (
                  <span className="line-clamp-1 max-w-fit mb-4 desktop:mb-5 p-1.5 desktop:p-2 px-3 desktop:px-3.5 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[28px] not-italic font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-[27px]">
                    {property.short_description}
                    {/* {property.shortDescription} */}
                  </span>
                )}
                <Link href="#">
                  <h5 className="leading-[150%] sm:leading-[150%] desktop:leading-[150%] text-lg sm:text-xl desktop:text-2xl not-italic font-semibold">
                    {property.name}
                  </h5>
                </Link>
                <p
                  className={clsx(
                    "line-clamp-2 leading-[150%] sm:leading-[150%] desktop:leading-[150%] mt-0.5 sm:mt-1 desktop:mt-1.5 text-sm sm:text-base desktop:text-lg not-italic font-medium text-[#999]",
                    {
                      "max-xs:mt-1 mb-6 desktop:mb-[30px]": cardType,
                    }
                  )}
                >
                  {property.description}
                  <Link className="text-white underline" href="#">
                    Read More
                  </Link>
                </p>
                {!cardType && (
                  <div className="max-sm:flex-wrap flex items-center my-5 sm:my-6 desktop:my-[30px] gap-1.5 desktop:gap-2.5">
                    <div className="bg-graphite-black items-center leading-[150%] desktop:leading-[150%] text-sm desktop:text-lg not-italic font-medium outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="17"
                        fill="none"
                        viewBox="0 0 22 18"
                        className="w-5 h-5 desktop:w-6 desktop:h-6"
                      >
                        <g fill="#fff" clipPath="url(#clip0_122_2006)">
                          <path d="M11.012 15.96H2.018c-.303 0-.443.138-.443.438 0 .077.004.155-.001.232a2.31 2.31 0 01-.033.276c-.065.331-.382.596-.761.592a.774.774 0 01-.755-.65 1.68 1.68 0 01-.02-.259c-.001-1.761-.013-3.523.004-5.284.01-1.027.389-1.92 1.116-2.663a3.932 3.932 0 011.568-.977c.472-.16.96-.21 1.458-.21 4.611.002 9.223-.002 13.834.004 1.352.001 2.446.538 3.257 1.605.398.524.636 1.12.717 1.772.028.219.04.442.04.664.004 1.71.003 3.42.002 5.13 0 .268-.067.511-.29.688-.237.187-.5.235-.782.121a.728.728 0 01-.478-.601c-.02-.146-.017-.295-.02-.443-.007-.238-.107-.381-.307-.425-.044-.01-.09-.01-.136-.01h-8.976zM10.902.5h5.833c.651 0 1.26.143 1.785.54.676.509 1.07 1.18 1.103 2.021.028.714.016 1.43.019 2.144.002.46 0 .921 0 1.382a.47.47 0 01-.013.124c-.034.125-.103.174-.232.15-.14-.026-.277-.083-.418-.098-.331-.036-.664-.06-.997-.078-.222-.011-.29-.05-.322-.266-.1-.68-.74-1.293-1.56-1.283-.913.01-1.826.002-2.739.002-.68 0-1.26.398-1.49 1.026-.033.09-.046.188-.063.283-.032.17-.096.233-.268.235-.36.004-.72.004-1.08 0-.165-.001-.23-.066-.26-.254a1.449 1.449 0 00-.316-.707c-.308-.375-.707-.58-1.198-.581-.942-.005-1.885-.003-2.828-.001-.792 0-1.412.61-1.513 1.279-.032.216-.097.254-.32.268-.367.024-.735.058-1.101.097-.113.012-.22.06-.333.078-.12.02-.176-.02-.21-.137a.511.511 0 01-.02-.143c0-1.104-.015-2.209.003-3.314.02-1.155.563-2.005 1.624-2.519C4.408.546 4.864.5 5.326.5h5.577z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_122_2006">
                            <path
                              fill="#fff"
                              d="M0 0H22V17H0z"
                              transform="translate(0 .5)"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                      {property.bedrooms}-Bedroom
                    </div>
                    <div className="bg-graphite-black items-center leading-[150%] desktop:leading-[150%] text-sm desktop:text-lg not-italic font-medium  outline outline-1 outline-solid outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        fill="none"
                        viewBox="0 0 22 22"
                        className="w-5 h-5 desktop:w-6 desktop:h-6"
                      >
                        <g fill="#fff" clipPath="url(#clip0_122_2010)">
                          <path d="M1.27 14.262h9.84v1.808h6.152v-1.805h2.443c.159 2.15.171 4.065-2.034 5.525-.027.018-.049.042-.109.095l.803.668-.973.931c-.29-.3-.604-.647-.946-.963-.1-.094-.279-.132-.425-.14-.238-.015-.48.023-.72.024-3.195.002-6.39.002-9.586.002-.153 0-.317.029-.458-.014-.426-.128-.697.07-.95.375-.217.26-.463.495-.688.733l-.884-.93.755-.67c-.2-.143-.351-.243-.494-.354-1.068-.823-1.645-1.914-1.72-3.255-.038-.664-.007-1.332-.007-2.03zM1.276 9.287c-.006-.119-.015-.226-.015-.333 0-1.74-.003-3.48 0-5.22C1.264 1.82 2.591.485 4.501.5c.641.005 1.302-.009 1.918.137C7.512.895 8.2 1.653 8.532 2.72c.065.207.148.308.376.37 1.286.348 2.188 1.55 2.205 2.891.003.216 0 .432 0 .667H5.026c-.29-1.535.544-3.12 2.287-3.614-.157-.685-.832-1.263-1.54-1.288a21.512 21.512 0 00-1.608 0c-.922.036-1.665.884-1.668 1.9-.007 1.75-.002 3.502-.002 5.253v.386h-1.22v.001zM11.093 13.033H1.388c-.673 0-1.157-.32-1.328-.863-.256-.819.324-1.607 1.208-1.619.94-.012 1.881-.003 2.822-.003h7.003v2.484z"></path>
                          <path d="M16.024 14.871h-3.66c-.007-.116-.016-.22-.016-.326-.002-1.268-.002-2.537 0-3.805 0-.918.501-1.422 1.415-1.426.339-.001.678-.008 1.017.002.76.024 1.258.536 1.26 1.3.004 1.323.001 2.645 0 3.969 0 .086-.01.171-.016.286zM17.283 13.02v-2.472c.595 0 1.182-.002 1.768 0 .305.002.617-.023.916.026.652.108 1.076.642 1.05 1.265-.027.612-.478 1.137-1.119 1.17-.859.045-1.722.011-2.614.011z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_122_2010">
                            <path
                              fill="#fff"
                              d="M0 0H21.017V21H0z"
                              transform="translate(0 .5)"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                      {property.bathrooms}-Bathroom
                    </div>
                    <div className="bg-graphite-black items-center leading-[150%] desktop:leading-[150%] text-sm desktop:text-lg not-italic font-medium outline outline-1 outline-signal-black rounded-[28px] py-1.5 desktop:py-2 px-3.5 flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        fill="none"
                        viewBox="0 0 24 25"
                        className="w-5 h-5 desktop:w-6 desktop:h-6"
                      >
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M4.8 20.3V4.7h-.3a.9.9 0 110-1.8h15a.9.9 0 110 1.8h-.3v15.6h.3a.9.9 0 010 1.8h-4.2a.9.9 0 01-.9-.9v-3a.9.9 0 00-.9-.9h-3a.9.9 0 00-.9.9v3a.9.9 0 01-.9.9H4.5a.9.9 0 110-1.8h.3zM8.4 7.1a.6.6 0 01.6-.6h1.2a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6H9a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6h1.2a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6H9zm4.2-4.2a.6.6 0 01.6-.6H15a.6.6 0 01.6.6v1.2a.6.6 0 01-.6.6h-1.2a.6.6 0 01-.6-.6V7.1zm.6 4.2a.6.6 0 00-.6.6v1.2a.6.6 0 00.6.6H15a.6.6 0 00.6-.6v-1.2a.6.6 0 00-.6-.6h-1.2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Villa
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between gap-[5px] min-[390px]:gap-[30px] sm:gap-10 desktop:gap-[50px]">
                  <div className="not-italic laptop:flex laptop:flex-col laptop:gap-[1px] desktop:gap-0.5">
                    <span className=" desktop:leading-[150%] text-sm desktop:text-lg font-medium text-[#999]">
                      Price
                    </span>
                    <p className="text-lg sm:text-xl desktop:text-2xl leading-[150%] sm:leading-[150%] desktop:leading-[150%] font-bold">
                      ${formatCurrency(property.price)}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="whitespace-nowrap text-center flex-[1_0_0%] py-3.5 desktop:py-[18px] px-5 desktop:px-6 rounded-lg desktop:rounded-[10px] bg-[#703BF7] text-sm desktop:text-lg not-italic font-medium leading-[150%] desktop:leading-[150%] transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Property Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex-wrap max-lg:flex max-[390px]:justify-evenly max-lg:justify-between">
        {!cardType && (
          <Link
            href="/properties"
            className="btn-primary inline-flex lg:hidden mt-4"
          >
            View All Properties
          </Link>
        )}
        <Controler
          pagination="properties-pagination"
          mobilePagination="properties-pagination-center"
          prevBtn="properties-button-prev"
          nextBtn="properties-button-next"
          controlerType={cardType || ""}
        />
      </div>
    </div>
  );
}
