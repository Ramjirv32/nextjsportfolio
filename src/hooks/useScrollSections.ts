'use client';

import { useRef, useEffect, useState } from 'react';

export function useScrollSections() {
  const isScrollingProgrammatically = useRef(false);
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const sections = ["home", "about", "skills", "projects", "works", "research", "certificate", "contact"];
      const navbarHeight = 80;
      const scrollPosition = window.scrollY + navbarHeight + 50;
      
      let activeSection = 'home';

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionStart = offsetTop;
          const sectionEnd = offsetTop + offsetHeight;
          
          if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
            activeSection = sections[i];
            break;
          }
          
          if (i === sections.length - 1 && scrollPosition >= sectionStart) {
            activeSection = sections[i];
            break;
          }
        }
      }

      if (activeSection !== currentSection) {
        setCurrentSection(activeSection);
        
        const newHash = `#${activeSection}`;
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, '', newHash);
        }
      }
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [currentSection]);

  // Handle hash changes from direct URL access
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== currentSection) {
        setCurrentSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentSection]);

  return { currentSection, setCurrentSection, isScrollingProgrammatically };
}
