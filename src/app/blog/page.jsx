
import Link from "next/link";

const posts = [
  { 
    id: "1", 
    title: "The Art of Minimalist Web Design", 
    excerpt: "Discover how less can be more in creating beautiful, functional websites that users love.",
    date: "March 15, 2025",
    readTime: "5 min read"
  },
  { 
    id: "2", 
    title: "Building Better User Experiences", 
    excerpt: "Essential principles and practices for creating intuitive, accessible web applications.",
    date: "March 10, 2025",
    readTime: "7 min read"
  },
  { 
    id: "3", 
    title: "Modern JavaScript Best Practices", 
    excerpt: "Stay up-to-date with the latest JavaScript features and coding standards for 2025.",
    date: "March 5, 2025",
    readTime: "6 min read"
  },
  { 
    id: "4", 
    title: "The Future of Web Development", 
    excerpt: "Exploring emerging technologies and trends that will shape the next decade of web dev.",
    date: "February 28, 2025",
    readTime: "8 min read"
  },
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>

          <p className="text-gray-600 text-lg">Thoughts, insights, and tutorials on web development and design</p>
        </div>

        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{post.excerpt}</p>
                
                <Link href={`/blog/${post.id}`}>
                  <span className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}