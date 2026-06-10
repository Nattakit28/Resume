import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const Projects = () => {
  const titleRef = useScrollReveal();

  // Component to render image or emoji
  const ImageRender = ({ image }) => {
    if (
      image.includes("/") ||
      image.endsWith(".png") ||
      image.endsWith(".jpg") ||
      image.endsWith(".jpeg")
    ) {
      // It's a file path
      return (
        <img src={image} alt="Project" className="w-full h-full object-cover" />
      );
    } else {
      // It's an emoji
      return <span className="text-8xl">{image}</span>;
    }
  };

  const ImageRenderSmall = ({ image }) => {
    if (
      image.includes("/") ||
      image.endsWith(".png") ||
      image.endsWith(".jpg") ||
      image.endsWith(".jpeg")
    ) {
      // It's a file path
      return (
        <img src={image} alt="Project" className="w-full h-full object-cover" />
      );
    } else {
      // It's an emoji
      return <span className="text-6xl">{image}</span>;
    }
  };

  const projects = [
    {
      id: 1,
      title: "Repair Request Management System",
      description:
        "ระบบแจ้งซ่อมและติดตามสถานะงานผ่านไลน์ คณะเภสัชศาสตร์ มหาวิทยาลัยเชียงใหม่",
      tech: ["React", "Node.js", "Express", "MySQL", "Line API"],
      image: "/image/1.PNG",
      github: "https://github.com/Nattakit28/Phar_repair_system",
      live: "https://phar-repair-system.onrender.com/",
      features: [
        "User Authentication",
        "Product Catalog",
        "Shopping Cart",
        "Payment Gateway",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "เว็บไซต์ระบบบันทึกกิจกรรมของผู้ใช้งาน",
      tech: ["React", "Node.js", "MySQL"],
      image: "/image/User_activity.png",
      github: "https://github.com/Nattakit28/User_activity_logging_system",
      live: "https://demo.com",
      features: ["Create/Edit/Delete Task", "Drag & Drop", "Local Storage"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "เว็บไซต์ Portfolio สำหรับสมัครงาน (เว็บนี้เอง!)",
      tech: ["React", "Tailwind CSS", "Responsive"],
      image: "🎨",
      github: "https://github.com",
      live: "https://yourportfolio.com",
      features: ["Responsive Design", "Smooth Scroll", "SEO Ready"],
    },
  ];

  return (
    <section className="py-32 px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="scroll-reveal text-6xl md:text-7xl font-serif font-bold text-dark mb-4 text-center"
        >
          Showcase
        </h2>
        <p className="scroll-reveal text-dark/60 font-light text-center mb-20 max-w-2xl mx-auto">
          Selected projects showcasing design & development expertise
        </p>

        {/* Featured Project */}
        <div className="scroll-reveal mb-20">
          <div className="bg-light border border-dark/10 rounded-2xl overflow-hidden card-hover">
            <div className="grid md:grid-cols-2 gap-0 h-96">
              {/* Image */}
              <div className="h-full bg-gradient-to-br from-dark/5 to-dark/10 flex items-center justify-center overflow-hidden">
                <ImageRender image={projects[0].image} />
              </div>
              {/* Content */}
              <div className="p-12 flex flex-col justify-center h-full">
                <span className="text-xs uppercase tracking-widest text-dark/60 mb-4">
                  Featured Project
                </span>
                <h3 className="text-4xl font-serif font-bold text-dark mb-4">
                  {projects[0].title}
                </h3>
                <p className="text-dark/70 font-light leading-relaxed mb-6">
                  {projects[0].description}
                </p>
                <div className="flex gap-3 mb-8 flex-wrap">
                  {projects[0].tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-dark/20 text-xs font-light rounded text-dark/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-dark text-sm font-light hover:text-dark transition"
                  >
                    GitHub →
                  </a>
                  <a
                    href={projects[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-dark text-sm font-light hover:text-dark transition"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div>
          <h3 className="scroll-reveal text-2xl font-serif font-bold text-dark mb-8">
            Other Works
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.id}
                className="scroll-reveal bg-light border border-dark/10 rounded-xl overflow-hidden card-hover group cursor-pointer"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-dark/5 to-dark/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <ImageRenderSmall image={project.image} />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-xl font-serif font-bold text-dark mb-2 group-hover:text-dark transition">
                    {project.title}
                  </h4>
                  <p className="text-dark/60 font-light text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 2).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-beige text-xs font-light text-dark/70 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-1 bg-beige text-xs font-light text-dark/70 rounded">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover text-dark/70 hover:text-dark font-light"
                    >
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover text-dark/70 hover:text-dark font-light"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal mt-20 text-center">
          <p className="text-dark/60 font-light mb-6">Want to see more?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-dark text-dark font-light tracking-widest uppercase text-sm btn-minimal hover:bg-dark hover:text-cream transition"
          >
            View More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
