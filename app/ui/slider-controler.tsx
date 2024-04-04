import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export default function Controler({
  pagination,
  mobilePagination,
  prevBtn,
  nextBtn,
  controlerType,
}: {
  pagination: string;
  mobilePagination: string;
  prevBtn: string;
  nextBtn: string;
  controlerType?: string;
}) {
  return (
    <div
      className={clsx("slider-controler", {
        "w-full": controlerType,
      })}
    >
      <div className={clsx("pagination hidden lg:block", pagination)}></div>
      <div
        className={clsx("flex gap-2.5 max-lg:items-center", {
          "max-lg:w-full justify-between": controlerType,
        })}
      >
        <div className={clsx("slider-arrow", prevBtn)}>
          <ArrowLeftIcon className="w-6 desktop:w-[30px]" />
        </div>
        <div
          className={clsx("pagination flex lg:hidden", mobilePagination)}
        ></div>
        <div className={clsx("slider-arrow", nextBtn)}>
          <ArrowRightIcon className="w-6 desktop:w-[30px]" />
        </div>
      </div>
    </div>
  );
}
