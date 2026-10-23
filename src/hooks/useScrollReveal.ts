'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * useScrollReveal - adds a CSS class when an element scrolls into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  revealClass: string = 'scroll-revealed',
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      el.classList.add(revealClass);
      return;
    }

    const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(revealClass);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [revealClass, options.threshold, options.rootMargin]);

  return ref;
}

/**
 * useStaggerReveal - reveals container with stagger class, child delays handled by CSS.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  return useScrollReveal<T>('scroll-stagger-visible', {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px',
    ...options,
  });
}
