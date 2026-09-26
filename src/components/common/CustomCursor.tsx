import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Stethoscope, Users, Baby, HeartPulse, Syringe, Droplets } from 'lucide-react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  useEffect(() => {
    // Detect touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const text = textRef.current;

    if (!cursor || !text) return;

    // Center cursor perfectly to mouse
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look up the DOM tree for elements with data-cursor or data-cursor-icon
      const cursorTarget = target.closest('[data-cursor], [data-cursor-icon]') as HTMLElement;
      
      if (cursorTarget) {
        const cursorType = cursorTarget.getAttribute('data-cursor');
        const cursorIcon = cursorTarget.getAttribute('data-cursor-icon');
        
        if (cursorType) {
          setActiveIcon(null);
          gsap.to(cursor, {
            width: 80,
            height: 80,
            backgroundColor: 'var(--color-primary)',
            mixBlendMode: 'normal',
            duration: 0.3,
            ease: 'back.out(1.7)'
          });
          
          text.innerText = cursorType.toUpperCase();
          gsap.to(text, { opacity: 1, duration: 0.2 });
        } else if (cursorIcon) {
          setActiveIcon(cursorIcon);
          text.innerText = '';
          gsap.to(text, { opacity: 0, duration: 0.2 });
          
          gsap.to(cursor, {
            width: 60,
            height: 60,
            backgroundColor: 'var(--color-primary)',
            mixBlendMode: 'normal',
            border: 'none',
            duration: 0.3,
            ease: 'back.out(1.7)'
          });
        }
      } else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        // Default hover for buttons/links
        setActiveIcon(null);
        gsap.to(cursor, {
          width: 40,
          height: 40,
          backgroundColor: 'transparent',
          border: '1px solid var(--color-primary)',
          mixBlendMode: 'difference',
          duration: 0.3,
        });
        text.innerText = '';
        gsap.to(text, { opacity: 0, duration: 0.2 });
      } else {
        // Reset to default dot
        setActiveIcon(null);
        gsap.to(cursor, {
          width: 12,
          height: 12,
          backgroundColor: 'var(--color-primary)',
          border: 'none',
          mixBlendMode: 'normal',
          duration: 0.3,
          ease: 'power2.out'
        });
        text.innerText = '';
        gsap.to(text, { opacity: 0, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div ref={cursorRef} className="custom-cursor">
      <span ref={textRef} className="cursor-text"></span>
      {activeIcon === 'stethoscope' && <Stethoscope size={24} color="#fff" />}
      {activeIcon === 'users' && <Users size={24} color="#fff" />}
      {activeIcon === 'baby' && <Baby size={24} color="#fff" />}
      {activeIcon === 'heartpulse' && <HeartPulse size={24} color="#fff" />}
      {activeIcon === 'syringe' && <Syringe size={24} color="#fff" />}
      {activeIcon === 'droplets' && <Droplets size={24} color="#fff" />}
    </div>
  );
};

export default CustomCursor;
