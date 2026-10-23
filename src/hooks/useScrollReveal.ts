'use client';

import React, { useEffect, useRef } from 'react';

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * useScrollReveal - adds a CSS class when an element scrolls into view.
 * Returns a ref compatible with all React JSX element ref props.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  revealClass: string = 'scroll-revealed',
  options: ScrollRevealOptions = {}
): React.RefObject<any> {
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
 * userScrollReveal - alias for useScrollReveal to prevent import errors on common typo
 */
export const userScrollReveal = useScrollReveal;

/**
 * useStaggerReveal - reveals container with stagger class, child delays handled by CSS.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
): React.RefObject<any> {
  return useScrollReveal<T>('scroll-stagger-visible', {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px',
    ...options,
  });
}

export default useScrollReveal;
