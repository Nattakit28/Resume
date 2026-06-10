import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const titleRef = useScrollReveal();

  const skillsCategories = [
    {
      icon: '💻',
      title: 'Technical Skills',
      items: [
        'HTML, CSS, JavaScript',
        'React, Node.js, Express',
        'REST API, Basic Database (MySQL / MongoDB)',
        'Git, Postman',
      ]
    },
    {
      icon: '🛠️',
      title: 'Tools',
      items: [
        'MySQL Workbench',
        'VS Code, Cursor',
        'GitHub, GitLab',
        'Postman',
      ]
    },
    {
      icon: '⚙️',
      title: 'Development Skills',
      items: [
        'Web Application (React, Node.js)',
        'Database Handling (MySQL, Firebase)',
        'API Integration (REST API, LINE Notify)',
        'Basic Frontend & UI (HTML, CSS, Tailwind)',
        'Version Control (Git, GitHub)',
        'Troubleshooting and resolving user issues',
      ]
    },
    {
      icon: '🤝',
      title: 'Soft Skills',
      items: [
        'Communication & Teamwork',
        'Problem resolution',
        'Adaptability & Fast Learning',
        'Attention to Detail',
        'Technical support',
      ]
    },

  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="scroll-reveal text-5xl md:text-7xl font-serif font-bold text-dark mb-14 md:mb-20 text-center tracking-tight"
        >
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {skillsCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="scroll-reveal bg-cream border border-dark/10 rounded-2xl p-6 md:p-7 card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-dark/20"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark/10">
                <span className="text-3xl md:text-4xl">{category.icon}</span>
                <h3 className="text-lg md:text-xl font-serif font-bold text-dark leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="scroll-reveal"
                    style={{ animationDelay: `${(catIndex * 0.1) + (itemIndex * 0.05)}s` }}
                  >
                    {typeof item === 'string' ? (
                      <div className="flex items-start gap-2 text-dark/80">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-dark/40 shrink-0" />
                        <p className="font-light text-sm leading-relaxed">{item}</p>
                      </div>
                    ) : (
                      <div className="group cursor-default bg-white/40 hover:bg-white/70 border border-dark/5 p-3 rounded-xl transition-all">
                        <p className="text-dark font-medium text-sm mb-1 leading-snug">
                          {item.skill}
                        </p>
                        <p className="text-dark/65 font-light text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
                              