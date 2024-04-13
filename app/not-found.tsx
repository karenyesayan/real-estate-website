import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container h-96 flex gap-2 flex-col items-center justify-center">
      <div className="gap-2 flex divide-x-2 divide-signal-black items-center">
        <h2 className="text-xl font-bold">Not Found</h2>
        <p className="pl-2">Could not find requested resource</p>
      </div>
      <Link href="/" className="px-4 py-3 btn-primary">
        Return Home
      </Link>
    </main>
  );
}
