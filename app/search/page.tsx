import SearchBar from "../ui/properties/search-bar";
import { fetchFilteredProperties } from "../lib/data";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    type?: string;
    price?: string;
    size?: string;
  };
}) {
  const query = searchParams?.query || "";
  const type = searchParams?.type || "";
  const price = searchParams?.price || "";
  const size = searchParams?.size || "";

  const searchResults = await fetchFilteredProperties(query, type, price, size);

  return (
    <main className="w-full">
      <div className="lg:pt-[100px]">
        <SearchBar />
      </div>
      <div className="container max-lg:pt-5">
        {searchResults.length ? (
          <ul className="bg-[#191919] rounded-xl overflow-hidden w-full">
            {searchResults.map((item, index) => (
              <li key={index}>
                <Link
                  href={`properties/${item.id}`}
                  className="flex items-center shadow flex-row border-gray-700 hover:bg-gray-700"
                >
                  <Image
                    className="hidden min-[388px]:block p-5 lg:p-2 object-cover h-auto rounded-none rounded-s-lg"
                    width={192}
                    height="0"
                    src={item.image_url}
                    alt={item.description}
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg xs:text-xl font-bold tracking-tight">
                      {item.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-400">
                      {item.type}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-fit mx-auto">
            Your search did not match any results
          </div>
        )}
      </div>
    </main>
  );
}
