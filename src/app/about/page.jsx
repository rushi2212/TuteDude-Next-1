const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Hello! I'm passionate about sharing knowledge and experiences through writing. 
              This blog is my space to explore ideas, discuss topics I care about, and 
              connect with like-minded individuals.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether it's technology, lifestyle, personal growth, or just random thoughts, 
              you'll find a variety of content here. I believe in the power of storytelling 
              and how it can inspire, educate, and bring people together.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              When I'm not writing, you can find me exploring new places, reading books, 
              or experimenting with new ideas. I'm always excited to learn something new 
              and share those discoveries with my readers.
            </p>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect!</h3>
              <p className="text-gray-600 mb-6">
                I'd love to hear from you. Feel free to reach out through the contact page 
                or follow along for new posts.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;