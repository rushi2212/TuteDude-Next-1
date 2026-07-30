import Link from "next/link";

const posts = [
 {
    id: 1,
    title: "Why I Started Waking Up Earlier",
    author: "Rushikesh",
    date: "July 12, 2026",
    content:
      "For a long time, I stayed up late and struggled to start my day. A few weeks ago, I decided to wake up an hour earlier. The first few days were difficult, but now I use that time to read, exercise, or simply enjoy a quiet morning. It has made my days feel more organized and less rushed."
  },
  {
    id: 2,
    title: "My First Experience with Next.js",
    author: "Rushikesh",
    date: "July 15, 2026",
    content:
      "When I first opened a Next.js project, I was confused by the folder structure. After building a few small pages, things slowly started to make sense. Features like file-based routing and reusable layouts saved a lot of time. It felt different from React at first, but now I enjoy working with it."
  },
  {
    id: 3,
    title: "A Small Habit That Improved My Coding",
    author: "Rushikesh",
    date: "July 18, 2026",
    content:
      "Earlier, I used to jump straight into writing code. Now I spend a few minutes thinking about the logic before touching the keyboard. Drawing a simple flow or writing down the steps has reduced bugs and made debugging much easier."
  },
  {
    id: 4,
    title: "Learning Through Small Projects",
    author: "Rushikesh",
    date: "July 21, 2026",
    content:
      "Instead of watching endless tutorials, I started building small projects like a weather app and a notes app. Every project taught me something new, whether it was handling API requests or managing state. The mistakes I made while building helped me learn much faster."
  }
];

export default function BlogList() {
  return (
    <main className="px-5 py-10">
      <section className="mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="text-sm font-medium text-teal-700">Blog</p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-950">
            Recent posts
          </h1>
          <p className="mt-2 text-gray-600">
            Notes from my web development learning journey.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg border border-gray-200 bg-white p-5"
            >
              <p className="text-sm text-gray-500">
                {post.date} / {post.readTime}
              </p>

              <h2 className="mt-2 text-xl font-semibold text-gray-950">
                <Link href={`/blog/${post.id}`} className="hover:text-teal-700">
                  {post.title}
                </Link>
              </h2>

              <p className="mt-2 leading-7 text-gray-700">{post.excerpt}</p>

              <Link
                href={`/blog/${post.id}`}
                className="mt-4 inline-block text-sm font-medium text-teal-700 hover:text-teal-900"
              >
                Read post
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
