import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionReveal = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 1,
  stagger = 0,
  threshold = 0.2,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animations = {
      'fade-up': {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 },
      },
      'fade-down': {
        from: { opacity: 0, y: -60 },
        to: { opacity: 1, y: 0 },
      },
      'fade-left': {
        from: { opacity: 0, x: -80 },
        to: { opacity: 1, x: 0 },
      },
      'fade-right': {
        from: { opacity: 0, x: 80 },
        to: { opacity: 1, x: 0 },
      },
      'scale': {
        from: { opacity: 0, scale: 0.85 },
        to: { opacity: 1, scale: 1 },
      },
      'fade': {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    };

    const anim = animations[animation] || animations['fade-up'];

    gsap.fromTo(el, anim.from, {
      ...anim.to,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [animation, delay, duration, stagger, threshold]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default SectionReveal;
