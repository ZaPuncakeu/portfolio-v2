import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY || window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollY
  };
}
