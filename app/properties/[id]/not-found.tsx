import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-96 flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested property.</p>
      <Link
        href="/properties"
        className="mt-4 rounded-md btn-primary px-8 py-3 text-sm text-white transition-colors"
      >
        Go Back
      </Link>
    </main>
  );
}
