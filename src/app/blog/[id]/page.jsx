
import Link from "next/link";

const posts = [
  { 
    id: "1", 
    title: "The Art of Minimalist Web Design", 
    date: "March 15, 2025",
    readTime: "5 min read",
    content: `
      <p>In an era of digital overwhelm, minimalist web design has emerged as a powerful approach to creating meaningful user experiences. But what exactly makes a design "minimalist," and how can we implement these principles effectively?</p>
      
      <h2>The Philosophy Behind Minimalism</h2>
      <p>Minimalist design isn't just about using fewer elements—it's about intentional design decisions that prioritize clarity and purpose. Every element on your page should serve a specific function and contribute to the overall user experience.</p>
      
      <h2>Key Principles to Follow</h2>
      <p><strong>White Space is Your Friend:</strong> Don't be afraid of empty space. It helps users focus on what's important and creates a sense of elegance and sophistication.</p>
      
      <p><strong>Typography Matters:</strong> Choose fonts that are both beautiful and readable. A well-chosen typeface can carry your entire design.</p>
      
      <p><strong>Color with Purpose:</strong> Use a limited color palette and ensure each color serves a specific purpose in your hierarchy.</p>
      
      <h2>Conclusion</h2>
      <p>Minimalist design is about making deliberate choices that enhance rather than distract from your content. By focusing on what truly matters, you can create websites that are both beautiful and highly functional.</p>
    `
  },
  { 
    id: "2", 
    title: "Building Better User Experiences", 
    date: "March 10, 2025",
    readTime: "7 min read",
    content: `
      <p>User Experience (UX) design has evolved significantly over the past decade. Today's users expect intuitive, accessible, and delightful interactions with digital products. Here's how to meet and exceed those expectations.</p>
      
      <h2>Understanding Your Users</h2>
      <p>Before diving into design solutions, invest time in understanding your users' needs, goals, and pain points. User research isn't just a nice-to-have—it's essential for creating products that truly serve your audience.</p>
      
      <h2>Accessibility First</h2>
      <p>Designing for accessibility isn't just about compliance; it's about creating inclusive experiences that work for everyone. Consider users with different abilities, devices, and contexts from the very beginning of your design process.</p>
      
      <h2>Performance as a Feature</h2>
      <p>A beautiful interface means nothing if it takes too long to load. Performance is a crucial aspect of user experience that often gets overlooked in the design phase.</p>
      
      <h2>Testing and Iteration</h2>
      <p>Great UX doesn't happen by accident. It's the result of continuous testing, learning, and iteration based on real user feedback and behavior data.</p>
    `
  },
  { 
    id: "3", 
    title: "Modern JavaScript Best Practices", 
    date: "March 5, 2025",
    readTime: "6 min read",
    content: `
      <p>JavaScript continues to evolve rapidly, with new features and best practices emerging regularly. Staying current with these developments is crucial for writing maintainable, performant code.</p>
      
      <h2>ES2024 and Beyond</h2>
      <p>The latest ECMAScript features provide powerful tools for modern development. Features like optional chaining, nullish coalescing, and private class fields have become standard parts of the JavaScript toolkit.</p>
      
      <h2>Async/Await Patterns</h2>
      <p>Modern JavaScript heavily relies on asynchronous operations. Understanding how to properly handle promises, async/await, and error handling is essential for robust applications.</p>
      
      <h2>Module Systems</h2>
      <p>ES modules have largely replaced older module systems. Understanding how to properly structure and import/export your code leads to better organization and maintainability.</p>
      
      <h2>Testing Strategies</h2>
      <p>Writing testable JavaScript requires understanding different testing patterns, from unit tests to integration tests, and choosing the right tools for your project.</p>
    `
  },
  { 
    id: "4", 
    title: "The Future of Web Development", 
    date: "February 28, 2025",
    readTime: "8 min read",
    content: `
      <p>Web development is at an exciting crossroads, with emerging technologies promising to reshape how we build and interact with web applications. Let's explore what the future holds.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is revolutionizing how we write code, with tools that can generate, optimize, and debug code automatically. However, understanding the fundamentals remains more important than ever.</p>
      
      <h2>Web Assembly's Growing Impact</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, opening up possibilities for complex applications that were previously only possible with native development.</p>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is bringing server functionality closer to users, reducing latency and improving performance for global applications.</p>
      
      <h2>Sustainable Web Development</h2>
      <p>As environmental concerns grow, developers are increasingly focused on creating energy-efficient websites and applications that minimize their carbon footprint.</p>
      
      <h2>What This Means for Developers</h2>
      <p>The key to thriving in this evolving landscape is continuous learning and adaptability. Focus on fundamental skills while staying curious about emerging technologies.</p>
    `
  },
];


export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}


export default function BlogPost({ params }) {
  const post = posts.find((p) => p.id === params.id);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
        
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
              <div className="w-24 h-1 bg-blue-600"></div>
            </header>

    
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <div className="mt-12 text-center">
          <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Read More Articles</Link>
        </div>
      </div>
    </div>
  );
}