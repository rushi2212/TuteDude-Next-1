import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "What I learned about simple web design",
    date: "March 15, 2025",
    readTime: "5 min read",
    paragraphs: [
      "When I started designing pages, I used to add too many colors, shadows, and sections. Later I understood that a simple page can look better when the spacing is clear.",
      "Good design does not always mean adding more. Sometimes it means removing the parts that are not useful and keeping the important content easy to read.",
      "For this project, I used a plain background, white content boxes, and only one main accent color. That makes the site feel neat without becoming complicated.",
    ],
  },
  {
    id: "2",
    title: "Making pages easier to use",
    date: "March 10, 2025",
    readTime: "6 min read",
    paragraphs: [
      "A user should quickly understand where to click and what each page is about. Clear headings and simple navigation help a lot.",
      "I also learned that buttons and form fields should have enough padding. Small details like this make the page feel more comfortable.",
      "This is something I want to keep improving in every frontend project I build.",
    ],
  },
  {
    id: "3",
    title: "JavaScript habits I want to follow",
    date: "March 5, 2025",
    readTime: "4 min read",
    paragraphs: [
      "Readable JavaScript is easier to fix later. I try to use proper names for variables and keep functions short when possible.",
      "I also like separating repeated data into arrays. It keeps the JSX cleaner and makes it easier to add or remove content.",
      "These are small habits, but they make a project easier to understand after some time.",
    ],
  },
  {
    id: "4",
    title: "Why I am learning Next.js",
    date: "February 28, 2025",
    readTime: "5 min read",
    paragraphs: [
      "Next.js makes it easier to create pages, routes, and layouts in one project. The file-based routing is useful once the folder structure becomes familiar.",
      "I wanted to practice components like header, footer, blog list, and contact form because these are common parts of real websites.",
      "This project helped me revise React basics while also learning how a Next.js app is organized.",
    ],
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <main className="px-5 py-10">
        <section className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-6">
          <h1 className="text-2xl font-semibold text-gray-950">
            Post not found
          </h1>
          <Link
            href="/blog"
            className="mt-4 inline-block text-sm font-medium text-teal-700"
          >
            Back to blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="px-5 py-10">
      <article className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
        <Link href="/blog" className="text-sm font-medium text-teal-700">
          Back to blog
        </Link>

        <header className="mt-5 border-b border-gray-200 pb-5">
          <p className="text-sm text-gray-500">
            {post.date} / {post.readTime}
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-gray-950">
            {post.title}
          </h1>
        </header>

        <div className="mt-6 space-y-4 leading-7 text-gray-700">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
