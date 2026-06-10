import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with scroll-reveal class
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach(el => {
      observer.observe(el);
    });

    // Also observe single ref if provided
    if (element) {
      observer.observe(element);
    }

    return () => {
      scrollRevealElements.forEach(el => {
        observer.unobserve(el);
      });
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return ref;
};

export default useScrollReveal;