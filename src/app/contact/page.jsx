'use client';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
     

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
    
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Have a question or want to get in touch? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg  text-black" placeholder="Your name"/>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" placeholder="your.email@example.com" />
              </div>


              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" placeholder="What's this about?"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" placeholder="Your message..."></textarea>
              </div>


              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">hello@yourblog.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Response Time</h3>
                <p className="text-gray-600">I typically respond within 24-48 hours</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Social Media</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Twitter: @yourblog</p>
                  <p className="text-gray-600">LinkedIn: /in/yourprofile</p>
                  <p className="text-gray-600">Instagram: @yourblog</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Whether you have feedback, questions, or just want to say hello, I'm always happy to connect with my readers!
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;