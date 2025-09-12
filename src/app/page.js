import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover amazing stories, insights, and ideas. Join me on this journey 
            of sharing knowledge and experiences.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Explore Articles
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Latest Posts</h3>
              <p className="text-gray-600">
                Stay updated with my newest articles and thoughts on various topics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h3>
              <p className="text-gray-600">
                Explore different topics and find content that interests you most.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h3>
              <p className="text-gray-600">
                Learn more about my background, interests, and why I started this blog.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
