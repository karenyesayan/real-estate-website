import Image from "next/image";
import Heading from "../page-heading";
import { fetchPeople } from "@/app/lib/data";

export default async function Team() {
  const people = await fetchPeople();

  return (
    <section
      id="team"
      className="container mb-20 xl:mb-[120px] desktop:mb-[150px] flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20"
    >
      <Heading
        heading="Meet the Estatein Team"
        paragraph="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
      />
      <div className="flex max-xl:flex-wrap max-xl:justify-center flex-row items-start gap-5 desktop:gap-[30px]">
        {people.map((person) => (
          <div
            key={person.id}
            className="relative text-center p-5 laptop:p-6 desktop:p-[30px] ring-inset ring-1 ring-signal-black rounded-xl transition duration-300 ease-in-out hover:ring-[#703BF7]"
          >
            <div className="mx-auto mb-10 laptop:mb-[50px] max-w-[318px] h-[268px] lg:h-[220px] lg:w-[257px] desktop:h-[253px] desktop:w-[316.75px]">
              <Image
                src={person.image_url}
                width={317}
                height={253}
                className="h-full w-full object-cover rounded-[10px] desktop:rounded-xl"
                alt={`${person.name} Avatar`}
              />
            </div>
            <h5 className="mb-0.5 laptop:mb-1 desktop:mb-1.5 not-italic text-lg xl:text-xl desktop:text-2xl leading-7 xl:leading-7 desktop:leading-7 font-semibold">
              {person.name}
            </h5>
            <p className="mb-4 laptop:mb-5 desktop:mb-6 not-italic font-medium text-sm xl:text-base desktop:text-lg leading-6 xl:leading-6 desktop:leading-6 text-[#999]">
              {person.role}
            </p>
            <div className="flex items-center justify-between pt-2 laptop:pt-2.5 desktop:pt-3.5 pr-2 laptop:pr-2.5 desktop:pr-3.5 pb-2 laptop:pb-2.5 desktop:pb-3.5 pl-6 laptop:pl-5 desktop:pl-6 bg-graphite-black ring-1 ring-inset ring-signal-black rounded-[100px] not-italic font-medium text-sm xl:text-base desktop:text-lg leading-7 xl:leading-7 desktop:leading-7">
              Say Hello 👋
              <a
                target="_blank"
                href="https://twitter.com/messages/compose?recipient_id=3805104374&text=Hello%20world"
                className="twitter-dm-button"
                data-screen-name={`@${person.profile}`}
              >
                <svg
                  className="w-12 laptop:w-9 desktop:w-11 h-12 laptop:h-9 desktop:h-11 hover:opacity-70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="44"
                  fill="none"
                  viewBox="0 0 45 44"
                >
                  <rect
                    width="44"
                    height="44"
                    x="0.75"
                    fill="#703BF7"
                    rx="22"
                  ></rect>
                  <path
                    fill="#fff"
                    d="M32.177 12.578c-.5-.51-1.24-.7-1.93-.5l-16.09 4.65a1.914 1.914 0 00-1.383 1.51c-.142.746.354 1.694 1.002 2.09l5.031 3.072a1.308 1.308 0 001.61-.19l5.76-5.762a.735.735 0 011.06 0c.29.29.29.76 0 1.06l-5.77 5.761a1.31 1.31 0 00-.194 1.61l3.074 5.05c.36.598.98.94 1.66.94.08 0 .17 0 .25-.012.78-.099 1.4-.63 1.63-1.38l4.77-15.969c.21-.68.02-1.42-.48-1.93z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M20.201 29.142a.752.752 0 010 1.061l-1.366 1.365a.744.744 0 01-.53.22.749.749 0 01-.53-1.28l1.365-1.366a.752.752 0 011.061 0zm-.783-3.788a.752.752 0 010 1.061l-1.366 1.365a.744.744 0 01-.53.22.749.749 0 01-.53-1.28l1.365-1.366a.752.752 0 011.06 0zm-3.761-1.192a.752.752 0 010 1.06l-1.367 1.366a.744.744 0 01-.53.22.749.749 0 01-.53-1.28l1.365-1.366a.752.752 0 011.061 0z"
                    opacity="0.4"
                  ></path>
                </svg>
              </a>
            </div>
            <a href={`https://twitter.com/${person.profile}`} target="_blank">
              <svg
                className="absolute w-[60px] desktop:w-[76px] h-10 desktop:h-[52px] left-[calc(50%_-_60px/2_-_1px)] sm:left-[calc(50%_-_60px/2_-_0.5px)] desktop:left-[calc(50%_-_76px/2_-_1.38px)] top-[266px] lg:top-[222px] desktop:top-[257px] hover:opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="52"
                fill="none"
                viewBox="0 0 76 52"
              >
                <rect width="76" height="52" fill="#703BF7" rx="26"></rect>
                <path
                  fill="#fff"
                  d="M33.55 35.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638A9.999 9.999 0 0050 18.555c-.898.4-1.85.66-2.826.774a4.95 4.95 0 002.165-2.723 9.897 9.897 0 01-3.126 1.195 4.93 4.93 0 00-8.394 4.49 13.984 13.984 0 01-10.146-5.142 4.93 4.93 0 001.523 6.571 4.93 4.93 0 01-2.23-.614v.06a4.922 4.922 0 003.95 4.829 4.895 4.895 0 01-2.221.084 4.934 4.934 0 004.597 3.422A9.875 9.875 0 0126 33.538a13.97 13.97 0 007.55 2.212z"
                ></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
