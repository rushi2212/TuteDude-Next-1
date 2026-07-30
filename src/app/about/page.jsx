import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="px-5 py-10">
      <section className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium text-teal-700">About</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-950">About me</h1>

        <div className="mt-5 space-y-4 leading-7 text-gray-700">
          <p>
            Hi, I am Rushi. This blog is a practice project where I can write
            small posts and improve my frontend skills step by step.
          </p>
          <p>
            I like keeping pages clean and easy to read. For this project, I
            focused on basic layout, spacing, navigation, and simple reusable
            components.
          </p>
          <p>
            I am still learning, so the site is intentionally simple. The main
            goal is to make something that works well and feels like my own
            project.
          </p>
        </div>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
          Contact me
        </Link>
      </section>
    </main>
  );
}
