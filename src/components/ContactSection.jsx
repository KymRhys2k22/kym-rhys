import { useState } from "react";
import { TfiLinkedin, TfiGithub, TfiEmail } from "react-icons/tfi";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <footer className="py-20  bg-white dark:bg-slate-800" id="contact">
      <div className="container dark:text-slate-50 mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-50"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-50"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div >
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm dark:text-slate-50  font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              I&apos;m always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className="flex items-center space-x-4 ">
              <TfiEmail size={20} />
              <a
                href={
                  "mailto:kymrhys@gmail.com?subject=Hello%20there&body=This%20is%20a%20predefined%20email%20body."
                }
                className="hover:underline text-blue-600"

              >
                kymrhys@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <TfiGithub size={20} />
              <a
                href="https://github.com/kymrhys2k22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                github.com/kymrhys2k22
              </a>
            </div>
            <div className="flex   space-x-4">
              <TfiLinkedin size={20} />
              <a
                href="https://www.linkedin.com/in/kymrhys/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                linkedin.com/in/kymrhys
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
