import React from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';

interface ContactProps {
  isVisible: Record<string, boolean>;
}

const Contact = ({ isVisible }: ContactProps) => {
  const contactInfo = [
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: "Phone",
      value: "+91 8003519879",
      href: "tel:+918003519879"
    },
    {
      icon: <Mail className="text-red-400" size={24} />,
      label: "Email",
      value: "sangramsuthar8454@gmail.com",
      href: "mailto:sangramsuthar8454@gmail.com"
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: "LinkedIn",
      value: "Sangram Suthar",
      href: "https://www.linkedin.com/in/sangram-suthar"
    },
    {
      icon: <Github className="text-purple-400" size={24} />,
      label: "GitHub",
      value: "sonujangir123",
      href: "https://github.com/sonujangir123/"
    },
    {
      icon: <MessageCircle className="text-indigo-400" size={24} />,
      label: "Discord",
      value: "Connect on Discord",
      href: "#discord"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Let's discuss your next project</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              id="contact-info"
              data-animate
              className={`transition-all duration-700 transform ${
                isVisible['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 
                             transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              id="contact-form"
              data-animate
              className={`transition-all duration-700 transform ${
                isVisible['contact-form'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-teal-400 
                             focus:outline-none text-white transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-teal-400 
                             focus:outline-none text-white transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-teal-400 
                             focus:outline-none text-white transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-lg 
                           font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 
                           transform hover:scale-105 animate-pulse"
                >
                  Contact Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <a
          href="mailto:sangramsuthar8454@gmail.com"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-full shadow-2xl 
                   hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 
                   animate-pulse"
        >
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;