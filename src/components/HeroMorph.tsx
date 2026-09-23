import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './HeroMorph.css';

gsap.registerPlugin(ScrollTrigger);

/* ─── Helper: hex color lerp ─────────────────────── */
function lerpHex(hex1: string, hex2: string, t: number): string {
  const p = (h: string, i: number) => parseInt(h.slice(i, i + 2), 16);
  const r = Math.round(p(hex1, 1) + (p(hex2, 1) - p(hex1, 1)) * t);
  const g = Math.round(p(hex1, 3) + (p(hex2, 3) - p(hex1, 3)) * t);
  const b = Math.round(p(hex1, 5) + (p(hex2, 5) - p(hex1, 5)) * t);
  return `rgb(${r},${g},${b})`;
}
const lerpN = (a: number, b: number, t: number) => a + (b - a) * t;

/* ─── 3D Atmospheric Background ─────────────────── */
const Atmosphere = () => (
  <>
    <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.4}>
      <mesh position={[2.5, 0, -4]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial color="#5D1F8C" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>
    </Float>
    <Float speed={0.7} rotationIntensity={0.3}>
      <mesh rotation={[0.6, 0, 0.2]}>
        <torusGeometry args={[6, 0.025, 16, 200]} />
        <meshStandardMaterial color="#D6A85F" transparent opacity={0.22} />
      </mesh>
    </Float>
    <Float speed={0.5} rotationIntensity={0.2}>
      <mesh rotation={[-0.4, 0.5, 0.6]}>
        <torusGeometry args={[8.5, 0.015, 16, 200]} />
        <meshStandardMaterial color="#8B3AC0" transparent opacity={0.14} />
      </mesh>
    </Float>
    <Sparkles count={90}  scale={15} size={0.8}  speed={0.1}  color="#D6A85F" opacity={0.28} />
    <Sparkles count={45}  scale={18} size={0.5}  speed={0.06} color="#C8A8E8" opacity={0.18} />
  </>
);

/* ════════════════════════════════════════════════════════════
   STAGE DEFINITIONS
   All measurements in px. Character container is 240px wide.
   Head / body horizontally centred at x = 120.
   ════════════════════════════════════════════════════════════ */
interface Stage {
  /* Container */
  wrapH: number;   // overall height of char container
  /* Head */
  headW:  number; headH:  number; headTop: number;
  /* Hair */
  hairH:  number; hairColor: string;
  /* Body (clothing) */
  bodyW:  number; bodyH:  number; bodyTop: number; bodyColor: string;
  /* Left arm */
  aLW: number; aLH: number; aLTop: number; aLLeft: number; aLRot: number;
  /* Right arm */
  aRW: number; aRH: number; aRTop: number; aRRight: number; aRRot: number;
  /* Left leg */
  lLW: number; lLH: number; lLTop: number; lLLeft: number; lLRot: number;
  /* Right leg */
  lRW: number; lRH: number; lRTop: number; lRRight: number; lRRot: number;
  /* Bottle */
  bottleOp: number; bottleLeft: number; bottleTop: number; bottleRot: number;
  /* Label */
  label: string; accent: string;
}

const S: Stage[] = [
  { /* ── 0: NEWBORN ── pink onesie, bent legs, bottle, large head */
    wrapH: 232,
    headW: 106, headH: 106, headTop: 0,
    hairH: 6, hairColor: '#6B3F1A',
    bodyW: 80, bodyH: 72, bodyTop: 106, bodyColor: '#FBCFE8',
    aLW: 20, aLH: 54, aLTop: 112, aLLeft: 27, aLRot: -68,
    aRW: 20, aRH: 54, aRTop: 110, aRRight: 27, aRRot: 62,
    lLW: 22, lLH: 52, lLTop: 175, lLLeft: 48, lLRot: 42,
    lRW: 22, lRH: 52, lRTop: 175, lRRight: 48, lRRot: -42,
    bottleOp: 1, bottleLeft: 22, bottleTop: 158, bottleRot: -40,
    label: 'Newborn', accent: '#F9A8D4',
  },
  { /* ── 1: INFANT ── blue sleepsuit, slightly longer, bottle still visible */
    wrapH: 264,
    headW: 94, headH: 94, headTop: 0,
    hairH: 14, hairColor: '#7B4A22',
    bodyW: 82, bodyH: 90, bodyTop: 94, bodyColor: '#BFDBFE',
    aLW: 20, aLH: 66, aLTop: 100, aLLeft: 26, aLRot: -50,
    aRW: 20, aRH: 66, aRTop: 98,  aRRight: 26, aRRot: 44,
    lLW: 22, lLH: 68, lLTop: 180, lLLeft: 48, lLRot: 30,
    lRW: 22, lRH: 68, lRTop: 180, lRRight: 48, lRRot: -30,
    bottleOp: 0.65, bottleLeft: 24, bottleTop: 158, bottleRot: -32,
    label: 'Infant', accent: '#93C5FD',
  },
  { /* ── 2: TODDLER ── green shirt, more upright, no bottle */
    wrapH: 316,
    headW: 82, headH: 82, headTop: 0,
    hairH: 22, hairColor: '#8B5E3C',
    bodyW: 84, bodyH: 116, bodyTop: 82, bodyColor: '#A7F3D0',
    aLW: 20, aLH: 86, aLTop: 90,  aLLeft: 25, aLRot: -18,
    aRW: 20, aRH: 86, aRTop: 88,  aRRight: 25, aRRot: 16,
    lLW: 22, lLH: 96, lLTop: 194, lLLeft: 46, lLRot: 16,
    lRW: 22, lRH: 96, lRTop: 194, lRRight: 46, lRRot: -16,
    bottleOp: 0, bottleLeft: 22, bottleTop: 165, bottleRot: -20,
    label: 'Toddler', accent: '#6EE7B7',
  },
  { /* ── 3: YOUNG CHILD ── yellow shirt, standing, wave */
    wrapH: 410,
    headW: 70, headH: 70, headTop: 0,
    hairH: 32, hairColor: '#5A3011',
    bodyW: 78, bodyH: 148, bodyTop: 70, bodyColor: '#FDE68A',
    aLW: 19, aLH: 118, aLTop: 78,  aLLeft: 25, aLRot: 14,   // waving
    aRW: 19, aRH: 118, aRTop: 76,  aRRight: 25, aRRot: -10,
    lLW: 21, lLH: 162, lLTop: 214, lLLeft: 46, lLRot: 4,
    lRW: 21, lRH: 162, lRTop: 214, lRRight: 46, lRRot: -4,
    bottleOp: 0, bottleLeft: 22, bottleTop: 185, bottleRot: -10,
    label: 'Young Child', accent: '#FCD34D',
  },
];

/* ════════════════════════════════════════════════════════════
   HeroMorph Component
   ════════════════════════════════════════════════════════════ */
const HeroMorph = () => {
  const wrapRef   = useRef<HTMLElement>(null);
  const charRef   = useRef<HTMLDivElement>(null);
  const headRef   = useRef<HTMLDivElement>(null);
  const hairRef   = useRef<HTMLDivElement>(null);
  const bodyRef   = useRef<HTMLDivElement>(null);
  const aLRef     = useRef<HTMLDivElement>(null);
  const aRRef     = useRef<HTMLDivElement>(null);
  const lLRef     = useRef<HTMLDivElement>(null);
  const lRRef     = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const eyeLRef   = useRef<HTMLDivElement>(null);
  const eyeRRef   = useRef<HTMLDivElement>(null);

  const [stageIdx, setStageIdx] = useState(0);

  useEffect(() => {
    if (!wrapRef.current) return;

    /* Blinking animation */
    const blinkInterval = setInterval(() => {
      if (!eyeLRef.current || !eyeRRef.current) return;
      gsap.to([eyeLRef.current, eyeRRef.current], {
        scaleY: 0.05, duration: 0.06, yoyo: true, repeat: 1, ease: 'power2.inOut'
      });
    }, 2800);

    /* Breathing animation on whole character */
    if (charRef.current) {
      gsap.to(charRef.current, {
        scaleY: 1.012, scaleX: 0.995, duration: 2.4,
        yoyo: true, repeat: -1, ease: 'sine.inOut'
      });
    }

    /* Initial entrance */
    gsap.fromTo('.hm-text-content > *',
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, delay: 0.7, ease: 'power3.out' }
    );
    gsap.fromTo('.char-root',
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, delay: 0.5, ease: 'power3.out' }
    );

    /* Core interpolation function — called each scroll frame */
    const applyProgress = (p: number) => {
      const n = S.length - 1;
      const scaled = p * n;
      const idx = Math.min(Math.floor(scaled), n - 1);
      const t = scaled - idx;
      const a = S[idx];
      const b = S[Math.min(idx + 1, n)];
      const L = lerpN;
      const LC = lerpHex;

      // Determine rounded stage for label
      setStageIdx(t < 0.5 ? idx : Math.min(idx + 1, n));

      if (!charRef.current) return;

      /* Container */
      charRef.current.style.height = `${L(a.wrapH, b.wrapH, t)}px`;

      /* Head */
      if (headRef.current) {
        const w = L(a.headW, b.headW, t);
        const h = L(a.headH, b.headH, t);
        headRef.current.style.width = `${w}px`;
        headRef.current.style.height = `${h}px`;
        headRef.current.style.top = `${L(a.headTop, b.headTop, t)}px`;
        headRef.current.style.left = `${(240 - w) / 2}px`; // always centred
      }

      /* Hair */
      if (hairRef.current) {
        hairRef.current.style.height = `${L(a.hairH, b.hairH, t)}px`;
        hairRef.current.style.backgroundColor = LC(a.hairColor, b.hairColor, t);
      }

      /* Body */
      if (bodyRef.current) {
        const w = L(a.bodyW, b.bodyW, t);
        const h = L(a.bodyH, b.bodyH, t);
        bodyRef.current.style.width = `${w}px`;
        bodyRef.current.style.height = `${h}px`;
        bodyRef.current.style.top = `${L(a.bodyTop, b.bodyTop, t)}px`;
        bodyRef.current.style.left = `${(240 - w) / 2}px`;
        bodyRef.current.style.backgroundColor = LC(a.bodyColor, b.bodyColor, t);
      }

      /* Left arm */
      if (aLRef.current) {
        aLRef.current.style.width  = `${L(a.aLW, b.aLW, t)}px`;
        aLRef.current.style.height = `${L(a.aLH, b.aLH, t)}px`;
        aLRef.current.style.top   = `${L(a.aLTop, b.aLTop, t)}px`;
        aLRef.current.style.left  = `${L(a.aLLeft, b.aLLeft, t)}px`;
        aLRef.current.style.transform = `rotate(${L(a.aLRot, b.aLRot, t)}deg)`;
      }

      /* Right arm */
      if (aRRef.current) {
        aRRef.current.style.width  = `${L(a.aRW, b.aRW, t)}px`;
        aRRef.current.style.height = `${L(a.aRH, b.aRH, t)}px`;
        aRRef.current.style.top   = `${L(a.aRTop, b.aRTop, t)}px`;
        aRRef.current.style.right = `${L(a.aRRight, b.aRRight, t)}px`;
        aRRef.current.style.transform = `rotate(${L(a.aRRot, b.aRRot, t)}deg)`;
      }

      /* Left leg */
      if (lLRef.current) {
        lLRef.current.style.width  = `${L(a.lLW, b.lLW, t)}px`;
        lLRef.current.style.height = `${L(a.lLH, b.lLH, t)}px`;
        lLRef.current.style.top   = `${L(a.lLTop, b.lLTop, t)}px`;
        lLRef.current.style.left  = `${L(a.lLLeft, b.lLLeft, t)}px`;
        lLRef.current.style.transform = `rotate(${L(a.lLRot, b.lLRot, t)}deg)`;
      }

      /* Right leg */
      if (lRRef.current) {
        lRRef.current.style.width  = `${L(a.lRW, b.lRW, t)}px`;
        lRRef.current.style.height = `${L(a.lRH, b.lRH, t)}px`;
        lRRef.current.style.top   = `${L(a.lRTop, b.lRTop, t)}px`;
        lRRef.current.style.right = `${L(a.lRRight, b.lRRight, t)}px`;
        lRRef.current.style.transform = `rotate(${L(a.lRRot, b.lRRot, t)}deg)`;
      }

      /* Bottle */
      if (bottleRef.current) {
        bottleRef.current.style.opacity   = String(L(a.bottleOp, b.bottleOp, t));
        bottleRef.current.style.left      = `${L(a.bottleLeft, b.bottleLeft, t)}px`;
        bottleRef.current.style.top       = `${L(a.bottleTop, b.bottleTop, t)}px`;
        bottleRef.current.style.transform = `rotate(${L(a.bottleRot, b.bottleRot, t)}deg)`;
      }
    };

    /* ScrollTrigger pin + scrub */
    const st = ScrollTrigger.create({
      trigger: wrapRef.current,
      start:   'top top',
      end:     '+=310%',
      pin:     true,
      scrub:   0.9,
      onUpdate: (self) => applyProgress(self.progress),
    });

    return () => {
      clearInterval(blinkInterval);
      st.kill();
    };
  }, []);

  const cur = S[stageIdx];

  return (
    <section ref={wrapRef} id="home" style={{ position: 'relative' }}>
      <div className="hero-morph">

        {/* ── Three.js atmospheric canvas ── */}
        <div className="hm-canvas">
          <Canvas camera={{ position: [0, 0, 9], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
            <ambientLight intensity={0.45} />
            <pointLight position={[5, 5, 5]}   intensity={1.5} color="#9B59B6" />
            <pointLight position={[-5, -3, 3]} intensity={0.8} color="#D6A85F" />
            <Atmosphere />
          </Canvas>
        </div>

        {/* ── Main split layout ── */}
        <div className="hm-inner container">

          {/* Left: Text */}
          <div className="hm-text-content">
            <span className="hm-eyebrow">Pediatric &amp; Neonatal Care</span>
            <h1 className="hm-title serif-heading">
              <span className="line">Growing With Them.</span>
              <span className="line">Caring At Every Stage.</span>
            </h1>
            <p className="hm-desc">
              Comprehensive, compassionate care for newborns, infants and children through every milestone of growth — led by Dr. Haseen Fathima.
            </p>
            <div className="hm-btns">
              <button className="btn-primary hm-book" data-cursor="book">
                Book an Appointment <ArrowRight size={18} className="hm-arrow" />
              </button>
              <button className="btn-secondary hm-explore" data-cursor="explore">
                Explore Our Services
              </button>
            </div>

            {/* Journey progress indicator */}
            <div className="hm-journey-track">
              <span className="hm-journey-label" style={{ color: cur.accent }}>{cur.label}</span>
              <div className="hm-journey-dots">
                {S.map((stage, i) => (
                  <div key={i}
                    className={`hm-jdot ${i === stageIdx ? 'active' : ''}`}
                    style={{ backgroundColor: i === stageIdx ? stage.accent : 'rgba(255,255,255,0.2)' }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: CSS Character */}
          <div className="hm-char-stage">

            {/* Atmospheric glow behind character */}
            <div className="hm-char-glow" style={{ backgroundColor: cur.accent }} />
            <div className="hm-char-glow hm-char-glow-2" style={{ backgroundColor: cur.accent }} />

            {/* The morphing character */}
            <div ref={charRef} className="char-root" style={{ height: S[0].wrapH }}>

              {/* ── Head ── */}
              <div ref={headRef} className="char-head"
                style={{ width: S[0].headW, height: S[0].headH, top: S[0].headTop, left: (240 - S[0].headW) / 2 }}>
                {/* Hair */}
                <div ref={hairRef} className="char-hair"
                  style={{ height: S[0].hairH, backgroundColor: S[0].hairColor }} />
                {/* Eyes */}
                <div ref={eyeLRef} className="char-eye char-eye-l" />
                <div ref={eyeRRef} className="char-eye char-eye-r" />
                {/* Cheeks */}
                <div className="char-cheek char-cheek-l" />
                <div className="char-cheek char-cheek-r" />
                {/* Nose */}
                <div className="char-nose" />
                {/* Smile */}
                <div className="char-smile" />
              </div>

              {/* ── Body ── */}
              <div ref={bodyRef} className="char-body"
                style={{ width: S[0].bodyW, height: S[0].bodyH, top: S[0].bodyTop,
                  left: (240 - S[0].bodyW) / 2, backgroundColor: S[0].bodyColor }}>
                <div className="char-belly-dot" />
              </div>

              {/* ── Left arm ── */}
              <div ref={aLRef} className="char-limb char-arm-l"
                style={{ width: S[0].aLW, height: S[0].aLH, top: S[0].aLTop, left: S[0].aLLeft,
                  transform: `rotate(${S[0].aLRot}deg)`, transformOrigin: 'top center' }}>
                <div className="char-hand" />
              </div>

              {/* ── Right arm ── */}
              <div ref={aRRef} className="char-limb char-arm-r"
                style={{ width: S[0].aRW, height: S[0].aRH, top: S[0].aRTop, right: S[0].aRRight,
                  transform: `rotate(${S[0].aRRot}deg)`, transformOrigin: 'top center' }}>
                <div className="char-hand" />
              </div>

              {/* ── Feeding bottle ── */}
              <div ref={bottleRef} className="char-bottle"
                style={{ left: S[0].bottleLeft, top: S[0].bottleTop,
                  transform: `rotate(${S[0].bottleRot}deg)`, opacity: S[0].bottleOp }}>
                <div className="char-bottle-body" />
                <div className="char-bottle-nipple" />
                <div className="char-bottle-milk" />
              </div>

              {/* ── Left leg ── */}
              <div ref={lLRef} className="char-limb char-leg-l"
                style={{ width: S[0].lLW, height: S[0].lLH, top: S[0].lLTop, left: S[0].lLLeft,
                  transform: `rotate(${S[0].lLRot}deg)`, transformOrigin: 'top center' }}>
                <div className="char-foot" />
              </div>

              {/* ── Right leg ── */}
              <div ref={lRRef} className="char-limb char-leg-r"
                style={{ width: S[0].lRW, height: S[0].lRH, top: S[0].lRTop, right: S[0].lRRight,
                  transform: `rotate(${S[0].lRRot}deg)`, transformOrigin: 'top center' }}>
                <div className="char-foot" />
              </div>

            </div>{/* end char-root */}

            {/* Stage label badge */}
            <div className="hm-stage-badge" style={{ borderColor: cur.accent, color: cur.accent }}>
              {cur.label}
            </div>

          </div>{/* end hm-char-stage */}
        </div>

        {/* ── Scroll cue ── */}
        <div className="hm-scroll-hint">
          <span className="hm-scroll-line" />
          <span>Scroll to watch the journey</span>
        </div>

      </div>
    </section>
  );
};

export default HeroMorph;
