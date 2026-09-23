import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './Hero3D.css';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────
   Module-level mutable ref — keeps 3D loop off React
   ────────────────────────────────────────────────── */
let _progress = 0; // 0 → 1 driven by ScrollTrigger scrub

/* ──── Math helpers ──── */
const c01 = (x: number) => Math.max(0, Math.min(1, x));
const ss  = (e0: number, e1: number, x: number) => { const t = c01((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
// Per-scene alpha bands
const a1  = (p: number) => 1 - ss(0.22, 0.36, p);         // scene 1 fades out
const a2  = (p: number) => ss(0.25, 0.40, p) * (1 - ss(0.60, 0.74, p)); // scene 2 mid
const a3  = (p: number) => ss(0.63, 0.78, p);              // scene 3 fades in

/* ════════════════════════════════════════════════
   Full 3D World — all three scenes coexist,
   driven by _progress in useFrame (no re-renders)
   ════════════════════════════════════════════════ */
const JourneyScene = () => {
  const { camera } = useThree();

  /* scene 1 refs */
  const blob   = useRef<THREE.Mesh>(null);
  const btl1   = useRef<THREE.Group>(null);
  const btl2   = useRef<THREE.Group>(null);
  const ring1  = useRef<THREE.Mesh>(null);
  const orbs1  = useRef<(THREE.Mesh | null)[]>([null, null, null]);

  /* scene 2 refs */
  const clusters = useRef<(THREE.Mesh | null)[]>([null, null, null, null, null]);
  const ring2  = useRef<THREE.Mesh>(null);

  /* scene 3 refs */
  const octas  = useRef<(THREE.Mesh | null)[]>([null, null, null]);
  const ring3a = useRef<THREE.Mesh>(null);
  const ring3b = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const p = _progress;
    const t = state.clock.getElapsedTime();
    const op1 = a1(p);
    const op2 = a2(p);
    const op3 = a3(p);

    /* ── Camera zooms forward as journey progresses ── */
    const tz = 8.5 - p * 3.5;
    camera.position.z += (tz - camera.position.z) * 0.04;
    /* Subtle tilt upward in scene 3 */
    camera.position.y += (-p * 0.5 - camera.position.y) * 0.03;

    /* ── Central blob (always present) ── */
    if (blob.current) {
      blob.current.rotation.y = t * 0.09;
      blob.current.rotation.z = t * 0.04;
    }

    /* ── Scene 1: floating bottles ── */
    if (btl1.current) {
      btl1.current.position.y = Math.sin(t * 0.7) * 0.5 + 1.5;
      btl1.current.children.forEach(c => {
        const mat = (c as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (mat) mat.opacity = c01(op1 * 0.55);
      });
    }
    if (btl2.current) {
      btl2.current.position.y = Math.sin(t * 0.9 + 1) * 0.4 - 1.2;
      btl2.current.children.forEach(c => {
        const mat = (c as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (mat) mat.opacity = c01(op1 * 0.42);
      });
    }
    if (ring1.current) {
      const m = ring1.current.material as THREE.MeshStandardMaterial;
      m.opacity = c01(op1 * 0.30);
      ring1.current.rotation.z = t * 0.04;
    }
    orbs1.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.opacity = c01(op1 * 0.55);
      const angle = t * (0.12 + i * 0.04) + i * 2.1;
      m.position.set(Math.cos(angle) * 3.8, Math.sin(angle * 0.7) * 1.5, Math.sin(angle) * 1.9);
    });

    /* ── Scene 2: growth clusters + torus ── */
    clusters.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.opacity = c01(op2 * 0.60);
      m.rotation.y = t * 0.15 + i * 0.5;
    });
    if (ring2.current) {
      const m = ring2.current.material as THREE.MeshStandardMaterial;
      m.opacity = c01(op2 * 0.22);
      ring2.current.rotation.z = t * 0.035;
    }

    /* ── Scene 3: precision octahedrons + outer rings ── */
    octas.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.opacity = c01(op3 * 0.65);
      m.rotation.x = t * 0.20 + i;
      m.rotation.y = t * 0.14 + i * 0.7;
    });
    if (ring3a.current) {
      const m = ring3a.current.material as THREE.MeshStandardMaterial;
      m.opacity = c01(op3 * 0.20);
      ring3a.current.rotation.y = t * 0.03;
    }
    if (ring3b.current) {
      const m = ring3b.current.material as THREE.MeshStandardMaterial;
      m.opacity = c01(op3 * 0.14);
      ring3b.current.rotation.x = 0.4 + t * 0.025;
    }
  });

  return (
    <group>
      {/* ── Central Distort Blob (all scenes) ── */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.4}>
        <mesh ref={blob}>
          <sphereGeometry args={[1.9, 64, 64]} />
          <MeshDistortMaterial color="#6B2A91" transparent opacity={0.28} distort={0.35} speed={2} roughness={0} metalness={0.22} />
        </mesh>
      </Float>

      {/* ── Scene 1 ── Feeding Bottle A ── */}
      <group ref={btl1} position={[-3.2, 1.5, 0.5]}>
        <mesh>
          <capsuleGeometry args={[0.28, 0.78, 8, 16]} />
          <meshStandardMaterial color="#D6A85F" transparent opacity={0} roughness={0.2} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.72, 0]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#F3EAF7" transparent opacity={0} roughness={0.3} />
        </mesh>
      </group>

      {/* ── Scene 1 ── Feeding Bottle B ── */}
      <group ref={btl2} position={[3.4, -1, 0.8]}>
        <mesh>
          <capsuleGeometry args={[0.22, 0.64, 8, 16]} />
          <meshStandardMaterial color="#9B59B6" transparent opacity={0} roughness={0.2} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.60, 0]}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial color="#F3EAF7" transparent opacity={0} />
        </mesh>
      </group>

      {/* ── Scene 1 ── Orbiting spheres ── */}
      {(['#9B59B6', '#D6A85F', '#C8A8E8'] as const).map((col, i) => (
        <mesh key={`o1-${i}`} ref={el => { orbs1.current[i] = el; }}>
          <sphereGeometry args={[0.3 + i * 0.08, 24, 24]} />
          <meshStandardMaterial color={col} transparent opacity={0} roughness={0.25} metalness={0.5} />
        </mesh>
      ))}

      {/* ── Scene 1 ── Gold ring ── */}
      <mesh ref={ring1} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[4.2, 0.022, 16, 200]} />
        <meshStandardMaterial color="#D6A85F" transparent opacity={0} />
      </mesh>

      {/* ── Scene 2 ── Growth clusters ── */}
      {[
        { pos: [-4.2,  0.8, -2.0], size: 0.50, col: '#7B68EE' },
        { pos: [ 4.6,  1.3, -2.2], size: 0.36, col: '#D6A85F' },
        { pos: [ 0.5,  4.0, -1.5], size: 0.40, col: '#9B59B6' },
        { pos: [-2.8, -3.3, -1.8], size: 0.30, col: '#8B3AC0' },
        { pos: [ 3.2, -2.8, -2.0], size: 0.45, col: '#C8A8E8' },
      ].map((s, i) => (
        <mesh key={`c2-${i}`} position={s.pos as [number,number,number]}
          ref={el => { clusters.current[i] = el; }}>
          <sphereGeometry args={[s.size, 24, 24]} />
          <meshStandardMaterial color={s.col} transparent opacity={0} roughness={0.3} metalness={0.4} />
        </mesh>
      ))}

      {/* ── Scene 2 ── Vaccination-cycle ring ── */}
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5.6, 0.016, 16, 200]} />
        <meshStandardMaterial color="#8B3AC0" transparent opacity={0} />
      </mesh>

      {/* ── Scene 3 ── Precision octahedrons ── */}
      {[
        { pos: [-4.2,  2.8, -1.5], size: 0.50 },
        { pos: [ 4.1, -2.2, -1.5], size: 0.38 },
        { pos: [ 0.5, -4.2, -2.0], size: 0.44 },
      ].map((o, i) => (
        <Float key={`oc-${i}`} speed={1 + i * 0.3} rotationIntensity={1.2}>
          <mesh position={o.pos as [number,number,number]}
            ref={el => { octas.current[i] = el; }}>
            <octahedronGeometry args={[o.size]} />
            <meshStandardMaterial color="#D6A85F" transparent opacity={0} roughness={0.08} metalness={0.75} />
          </mesh>
        </Float>
      ))}

      {/* ── Scene 3 ── Outer dual rings ── */}
      <mesh ref={ring3a} rotation={[0.3, 0, 0.5]}>
        <torusGeometry args={[7.0, 0.014, 16, 200]} />
        <meshStandardMaterial color="#D6A85F" transparent opacity={0} />
      </mesh>
      <mesh ref={ring3b} rotation={[-0.4, 0.2, 0.3]}>
        <torusGeometry args={[8.2, 0.010, 16, 200]} />
        <meshStandardMaterial color="#C8A8E8" transparent opacity={0} />
      </mesh>

      {/* ── Always-on ambient sparkles ── */}
      <Sparkles count={130} scale={13} size={0.7}  speed={0.15} color="#D6A85F" opacity={0.32} />
      <Sparkles count={55}  scale={16} size={0.45} speed={0.08} color="#C8A8E8" opacity={0.22} />
    </group>
  );
};

/* ════════════════════════════════════════════════
   Scene text data
   ════════════════════════════════════════════════ */
const SCENES = [
  {
    eyebrow: 'Scene 01 — Newborn Care',
    title:   ['A healthier beginning', 'starts with the right care.'],
    sub:     'Every newborn deserves world-class support from their very first breath. Specialist neonatal care from day one.',
    tags:    ['Feeding Support', 'Newborn Assessment', 'Lactation Care'],
    cta:     true,
  },
  {
    eyebrow: 'Scene 02 — Growing Child',
    title:   ['Supporting every milestone', 'of childhood.'],
    sub:     'From first vaccines to developmental monitoring, we stand beside your child at every stage of their growth journey.',
    tags:    ['Vaccination', 'Growth Tracking', 'Development', 'Wellness'],
    cta:     false,
  },
  {
    eyebrow: 'Scene 03 — Advanced Care',
    title:   ['Expertise when your', 'child needs it most.'],
    sub:     'When the situation demands more, our specialist team is equipped, compassionate, and ready around the clock.',
    tags:    ['Specialist Care', 'Monitoring', 'Treatment', 'Emergency Support'],
    cta:     true,
  },
];

/* ════════════════════════════════════════════════
   Main Hero3D Component
   ════════════════════════════════════════════════ */
const Hero3D = () => {
  const wrapRef  = useRef<HTMLElement>(null);   // pinned by ScrollTrigger
  const heroRef  = useRef<HTMLDivElement>(null); // inner 100vh div
  const [sceneIdx, setSceneIdx] = useState(0);

  useEffect(() => {
    let st: ScrollTrigger | undefined;

    if (wrapRef.current) {
      // Initial text entrance
      gsap.fromTo('.h3d-scene-text-0 .h3d-scene-inner > *',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.14, delay: 0.9, ease: 'power3.out' }
      );

      // Pin + scrub
      st = ScrollTrigger.create({
        trigger: wrapRef.current,
        start:   'top top',
        end:     '+=280%',   // 3 scenes × ~93vh of scroll each
        pin:     true,
        scrub:   0.9,
        onUpdate: (self) => {
          _progress = self.progress;
          const p = self.progress;
          const idx = p < 0.33 ? 0 : p < 0.67 ? 1 : 2;
          setSceneIdx(prev => prev !== idx ? idx : prev);
        },
      });
    }

    return () => st?.kill();
  }, []);

  return (
    <section ref={wrapRef} id="home" style={{ position: 'relative' }}>
      <div ref={heroRef} className="hero3d-section">

        {/* WebGL Canvas */}
        <div className="hero3d-canvas">
          <Canvas camera={{ position: [0, 0, 8.5], fov: 58 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
            <ambientLight intensity={0.55} />
            <pointLight position={[5,  5,  5]}  intensity={1.9} color="#9B59B6" />
            <pointLight position={[-5,-3,  3]}  intensity={0.9} color="#D6A85F" />
            <spotLight  position={[0,  10, 0]}  intensity={0.7} color="#F3EAF7" />
            <JourneyScene />
          </Canvas>
        </div>

        {/* 2D Text Overlay — all 3 scenes stacked, CSS opacity transitions */}
        <div className="hero3d-overlay">
          {SCENES.map((sc, i) => (
            <div key={i} className={`h3d-scene-text h3d-scene-text-${i} ${sceneIdx === i ? 'scene-active' : ''}`}>
              <div className="h3d-scene-inner">
                <span className="h3d-eyebrow">{sc.eyebrow}</span>
                <h1 className="h3d-title serif-heading">
                  {sc.title.map((line, j) => <span key={j} className="line">{line}</span>)}
                </h1>
                <p className="h3d-desc">{sc.sub}</p>
                <div className="h3d-tags">
                  {sc.tags.map(tag => <span key={tag} className="h3d-tag">{tag}</span>)}
                </div>
                {sc.cta && (
                  <div className="h3d-btns">
                    <button className="btn-primary h3d-book" data-cursor="book">
                      Book an Appointment <ArrowRight size={18} className="h3d-arrow" />
                    </button>
                    {i === 0 && (
                      <button className="btn-secondary h3d-explore" data-cursor="explore">
                        Explore Our Care
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scene progress dots */}
        <div className="h3d-scene-dots" aria-hidden="true">
          {[0, 1, 2].map(i => (
            <div key={i} className={`h3d-dot ${sceneIdx === i ? 'dot-active' : ''}`} />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="h3d-scroll-hint">
          <span className="h3d-scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
