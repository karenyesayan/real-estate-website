import Heading from "../page-heading";

const posts = [
  {
    id: "1",
    title: "3+ Years of Excellence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    id: "2",
    title: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    id: "3",
    title: "Industry Recognition",
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="container mb-20 xl:mb-[120px] desktop:mb-[150px] flex flex-col items-start gap-10 xl:gap-[60px] desktop:gap-20"
    >
      <Heading
        heading="Our Achievements"
        paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:flex-row items-start gap-5 laptop:gap-[30px] desktop:gap-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="sm:max-lg:last:col-span-2 lg:max-w-[406.33px] desktop:max-w-[505.67px] p-[30px] xl:p-10 desktop:p-[50px] shadow-[0px_0px_0px_4px_#191919] laptop:shadow-[0px_0px_0px_6px_#191919] desktop:shadow-[0px_0px_0px_8px_#191919] bg-dark-gray rounded-xl ring-1 ring-inset ring-signal-black flex-col justify-start items-start inline-flex transition-colors duration-300 ease-in-out hover:border-neutral-700 hover:bg-neutral-800/30"
          >
            <div className="group relative flex flex-col items-start gap-4 xl:gap-6 desktop:gap-[30px]">
              <h3 className="text-[#FFF] text-xl xl:text-2xl desktop:text-3xl font-semibold leading-[30px] xl:leading-9 desktop:leading-[45px] not-italic">
                <a>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="line-clamp-3 text-[#999] not-italic text-sm xl:text-base desktop:text-lg font-medium leading-[21px] xl:leading-6 desktop:leading-[27px]">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
