import React from 'react';

const About = () => {
  return (
    <section className="py-32 px-8 bg-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-serif font-bold text-dark mb-16 text-center">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-light mb-4 text-dark">Who am I?</h3>
              <p className="text-dark/70 font-light leading-relaxed">
                I'm a designer and developer passionate about creating beautiful digital experiences.
                Every project is an opportunity to solve problems and create value.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-light mb-4 text-dark">Experience</h3>
              <p className="text-dark/70 font-light leading-relaxed">
                Over the years, I've worked on diverse projects ranging from branding to full-scale web applications.
                I believe in continuous learning and staying updated with the latest design and development trends.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-light mb-4 text-dark">Goals</h3>
              <p className="text-dark/70 font-light leading-relaxed">
                To create meaningful work that makes a difference. To collaborate with talented individuals and continue growing
                as a designer and developer.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-beige rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
