import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <section className="py-32 px-8 bg-light">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="scroll-reveal text-6xl md:text-7xl font-serif font-bold text-dark mb-16 text-center"
        >
          About
        </h2>

        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="scroll-reveal md:col-span-2 flex justify-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden card-hover shadow-xl border border-dark/5 transition-all duration-300 hover:shadow-2xl">
              <img
                src="/image/Profile.jpg"
                alt="Nattakit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            <div ref={contentRef} className="scroll-reveal">
              <h3 className="text-3xl font-serif font-bold mb-6 text-dark">
                Nattakit Ploytrakul
              </h3>
              <div className="w-12 h-1 bg-dark/30 rounded-full mb-6"></div>
              <p className="text-dark/70 font-light leading-relaxed text-lg">
                I am a Full Stack Developer who focuses not only on writing code
                but also on user experience. Through my experience in building
                web applications, I understand where users often face
                difficulties and aim to design and improve systems to make them
                easier to use.
              </p>
            </div>

            <div className="scroll-reveal">
              <p className="text-dark/70 font-light leading-relaxed text-lg">
                I am able to explain technical concepts in a simple and clear
                way, and I approach problem-solving from the user's perspective
                to deliver practical solutions and ensure customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
