import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const Experience = () => {
  const titleRef = useScrollReveal();
  const eduTitleRef = useScrollReveal();

  const education = [
    {
      category: "🎓 Formal Education",
      items: [
        {
          degree: "Higher Vocational Certificate – Information Technology",
          institution: "Polytechnic Lanna Chiang Mai",
          faculty: "",
          period: "2024 – Present",
          logo: "/image/logo_lannapoly.png",
          details: [
            "เน้นด้าน Software Engineering, Web Development และ Database Systems",
            "GPA: 3.5X",
          ],
        },
        {
          degree: "Vocational Certificate – Information Technology",
          institution: "Polytechnic Lanna Chiang Mai",
          faculty: "",
          period: "2020 – 2023",
          logo: "/image/logo_lannapoly.png",
          details: ["สำเร็จการศึกษาสาขาเทคโนโลยีสารสนเทศ", "GPA: 3.5X"],
        },
      ],
    },
  ];

  const timeline = [
    {
      id: 1,
      title: "IT Support Intern",
      company: "Dara Academy, Chiang Mai",
      period: "July - September, 2023",
      logo: "/image/dara_academy.gif",
      description: "ช่วยแก้ปัญหาทางเทคนิคคอมพิวเตอร์และให้คำแนะนำแก่บุคลากร",
      details: [
        "สื่อสารกับผู้ใช้งานเพื่อเข้าใจปัญหาและให้คำแนะนำที่เหมาะสม",
        "ซ่อมแซมและบำรุงรักษาคอมพิวเตอร์และอุปกรณ์เครือข่าย",
        "จัดการและอัปเดตซอฟต์แวร์เพื่อให้ระบบทำงานได้อย่างราบรื่น",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "Faculty of Pharmacy, CMU",
      period: "June - September 2025",
      logo: "/image/facuty_cmu.png",
      description: "ทำเว็บแอปแจ้งซ่อมและเก็บข้อมูลสถิติ",
      details: [
        "สร้างเว็บแอปแจ้งซ่อม สำหรับบุคลากรภายในคณะเภสัชศาสตร์",
        "เก็บข้อมูลสถิติการแจ้งซ่อมและการแก้ไขปัญหา",
        "ปรับปรุงประสิทธิภาพและความปลอดภัยของระบบ มี UX/UI ใช้งานง่ายและตอบสนองความต้องการของผู้ใช้ บุคลากรสามารถแก้ไขหน้าเว็บได้เองโดยไม่ต้องพึ่งพาผู้พัฒนา",
        "สื่อสารกับผู้ใช้งานเพื่อเข้าใจปัญหา แก้ไข และให้คำแนะนำวิธีการใช้งานที่เว็บแอปแก่บุคลากร รวมทั้งอธิบายการทำงานของเว็บเพื่อให้ผู้พัฒนาสามารถปรับปรุงและพัฒนาต่อได้ในอนาคต",
      ],
    },
  ];

  return (
    <section className="py-32 px-8 bg-light">
      <div className="max-w-5xl mx-auto">

        {/* ─── EDUCATION ─── */}
        <h2
          ref={eduTitleRef}
          className="scroll-reveal text-6xl md:text-7xl font-serif font-bold text-dark mb-20 text-center"
        >
          Education 🎓
        </h2>

        <div className="space-y-14 mb-32">
          {education.map((group, gi) => (
            <div key={gi} className="scroll-reveal">
              {/* Category Header */}
              <h3 className="text-xl font-serif font-semibold text-dark/80 mb-6 border-b border-dark/10 pb-3">
                {group.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {group.items.map((edu, ei) => (
                  <div
                    key={ei}
                    className="bg-cream border-2 border-dark/10 rounded-2xl p-6 card-hover transition-all hover:shadow-lg flex gap-4"
                  >
                    {/* Logo */}
                    {edu.logo && (
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl border border-dark/10 p-1 shadow-sm self-start">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="text-lg font-serif font-bold text-dark leading-snug">
                          {edu.degree}
                        </h4>
                        <span className="flex-shrink-0 text-xs uppercase tracking-widest text-dark/50 bg-white border border-dark/10 px-2 py-1 rounded-lg">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-dark/70 font-light text-sm mb-1">
                        {edu.institution}
                      </p>
                      {edu.faculty && (
                        <p className="text-dark/50 font-light text-xs mb-3">
                          {edu.faculty}
                        </p>
                      )}
                      {edu.details.length > 0 && (
                        <ul className="space-y-1">
                          {edu.details.map((d, i) => (
                            <li
                              key={i}
                              className="text-dark/60 font-light text-sm flex items-start gap-2"
                            >
                              <span className="text-dark/30 mt-1">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ─── EXPERIENCE ─── */}
        <h2
          ref={titleRef}
          className="scroll-reveal text-6xl md:text-7xl font-serif font-bold text-dark mb-20 text-center"
        >
          Experience 👜
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-dark/20 to-dark/30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "md:grid-flow-dense" : ""}`}
                >
                  {/* Left/Right content based on index */}
                  <div
                    className={`${index % 2 === 0 ? "md:col-span-1 md:text-right" : "md:col-span-1"}`}
                  >
                    <div
                      className={`relative bg-cream border-2 border-dark/10 rounded-2xl p-8 card-hover transition-all hover:shadow-lg ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                    >
                      <h3 className="text-2xl font-serif font-bold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-dark/70 font-light mb-4">
                        {item.company}
                      </p>
                      <p className="text-dark/60 font-light text-sm mb-4">
                        {item.description}
                      </p>
                      {item.details.length > 0 && (
                        <ul className="space-y-2 text-sm">
                          {item.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-dark/70 font-light flex items-start gap-2"
                            >
                              <span className="text-dark/40 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Center: Logo + Date */}
                  <div className="hidden md:flex md:col-span-1 justify-center items-start">
                    <div className="flex flex-col items-center gap-2">
                      {item.logo && (
                        <div className="w-20 h-20 bg-white rounded-lg border border-dark/10 p-1 shadow-sm">
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="bg-white px-4 py-2 rounded-lg border border-dark/10 text-center">
                        <p className="text-xs uppercase tracking-widest text-dark/60 font-light">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Logo + Date below */}
                  <div className="md:hidden flex flex-col items-center gap-2">
                    {item.logo && (
                      <div className="w-20 h-20 bg-white rounded-lg border border-dark/10 p-1 shadow-sm">
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <p className="text-sm text-dark/60 font-light">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;