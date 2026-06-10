import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const triggerResumeDownload = (e) => {
    e.preventDefault();
    const downloadButton = document.getElementById("download-resume-btn");
    if (downloadButton) {
      downloadButton.click();
      return;
    }
    const resumeSection = document.getElementById("resume");
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "crystalza55@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=crystalza55@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+66 064 689 5412",
      link: "tel:+660646895412",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chaing Mai, Thailand",
      link: "https://maps.app.goo.gl/CPKcAe9pjYP8H3Ku7",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/nattakit-ploytrakul",
      link: "https://www.linkedin.com/in/nattakit-ploytrakul-500274385/",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="scroll-reveal text-5xl md:text-7xl font-serif font-bold text-dark mb-4 text-center">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              ข้อมูลติดต่อ
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition group"
                >
                  <span className="text-3xl mr-4 group-hover:scale-110 transition">
                    {info.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{info.label}</p>
                    <p className="text-gray-600 group-hover:text-blue-600 transition">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                ติดตามฉัน
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nattakit28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.01c-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.17 1.18a10.96 10.96 0 012.88-.39c.98 0 1.97.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nattakit-ploytrakul-500274385/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/khristal.nadth.kitti"
                  className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xl hover:bg-blue-600 transition"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/02.10.05abcdefg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg flex items-center justify-center hover:opacity-90 transition"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              ส่งข้อความมาให้ฉัน
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                ✓ ขอบคุณที่ติดต่อ! ฉันจะตอบกลับในไม่ช้า
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ชื่อ *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  อีเมล *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="your.email@gmail.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  หัวเรื่อง *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ข้อความ *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
              >
                📨 ส่งข้อความ
              </button>
            </form>

            {/* Quick Links */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-3">💡 ตอบสนองเร็ว ผ่าน:</p>
              <div className="flex gap-2 flex-wrap">
                <a
                  href="mailto:your.email@gmail.com"
                  className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border border-blue-300 hover:bg-blue-100 transition"
                >
                  📧 Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border border-blue-300 hover:bg-blue-100 transition"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border border-blue-300 hover:bg-blue-100 transition"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
