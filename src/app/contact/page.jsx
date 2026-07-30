"use client";

import { useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Thanks for the message. I will reply soon.");
    setFormData(emptyForm);
  }

  return (
    <main className="px-5 py-10">
      <section className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-teal-700">Contact</p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-950">
            Send a message
          </h1>
          <p className="mt-2 text-gray-600">
            Use this form for feedback, questions, or project ideas.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 outline-none focus:border-teal-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 outline-none focus:border-teal-600"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 outline-none focus:border-teal-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="mt-1 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-gray-950 outline-none focus:border-teal-600"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              Submit
            </button>
          </form>
        </div>

        <aside className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-950">Details</h2>
          <div className="mt-4 space-y-4 text-sm leading-6 text-gray-700">
            <p>Email: hello@example.com</p>
            <p>Response time: usually in 1 or 2 days</p>
            <p>Topic: web development, feedback, and learning notes</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
