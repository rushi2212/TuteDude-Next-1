import Link from "next/link";

const notes = [
  "Short posts about web development and learning",
  "Simple layouts with readable text",
  "A place to keep ideas from practice projects",
];

export default function HomePage() {
  return (
    <main className="px-5 py-10">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
          <p className="mb-3 text-sm font-medium text-teal-700">
            Personal blog project
          </p>

          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            A simple blog website where I write about what I am learning.
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            This site is made as a small Next.js project. I kept the design
            clean so the posts, pages, and navigation are easy to understand.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              View blog
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              About me
            </Link>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {notes.map((note) => (
            <div key={note} className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="text-sm leading-6 text-gray-700">{note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
