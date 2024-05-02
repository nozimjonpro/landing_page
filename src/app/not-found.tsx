import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center h-full">
      <h2 className="text-3xl font-semibold">Not Found 404</h2>
      <p className="text-xl font-medium">Could not find requested resource</p>
      <Link className="underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
