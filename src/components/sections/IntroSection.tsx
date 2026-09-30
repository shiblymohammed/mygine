"use client";
import Image from "next/image";
import { Caveat, Kalam } from 'next/font/google';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const caveat = Caveat({ subsets: ['latin'], weight: '700' });
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

const features = [
  {
    title: 'Hygienic',
    subtitle: 'Always a barrier',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    )
  },
  {
    title: 'Easy to Use',
    subtitle: 'In seconds',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    title: 'Carry Anywhere',
    subtitle: 'Pocket friendly',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="14" rx="2" ry="2"></rect>
        <path d="M8 8V6a4 4 0 0 1 8 0v2"></path>
      </svg>
    )
  },
  {
    title: 'Eco Friendly',
    subtitle: 'Cleaner tomorrow',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    )
  },
  {
    title: 'Stylish',
    subtitle: 'Because you care',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    )
  }
];

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLImageElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);
  const heading1Ref = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Mask reveal
      if (maskRef.current) {
        gsap.from(maskRef.current, {
          scrollTrigger: {
            trigger: maskRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      }

      // Feature icons stagger reveal
      if (featuresRef.current.length > 0) {
        gsap.from(featuresRef.current, {
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        });
      }

      // Headings reveal
      if (heading1Ref.current && heading2Ref.current) {
        gsap.from([heading1Ref.current, heading2Ref.current], {
          scrollTrigger: {
            trigger: heading1Ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          rotation: -5,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }

      // Testimonials image reveal
      if (testimonialsRef.current.length > 0) {
        gsap.from(testimonialsRef.current, {
          scrollTrigger: {
            trigger: testimonialsRef.current[0],
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          rotation: () => gsap.utils.random(-8, 8),
          duration: 1.2,
          stagger: 0.15,
          ease: 'back.out(1.2)'
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: -10, scale: 1.05, duration: 0.3, ease: 'power2.out', zIndex: 20 });
  };
  
  const handleHoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out', zIndex: 1 });
  };

  return (
    <section 
      ref={containerRef}
      style={{ 
        backgroundColor: '#FFFDF7', // Warm White
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Shape Divider Overlaying the Hero Section */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        transform: 'translateY(-99%)', 
        lineHeight: 0,
        zIndex: 10,
      }}>
        <img 
          ref={maskRef}
          src="/intro_canvas.svg?v=3" 
          alt="Intro Transition" 
          style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }} 
        />
        
        {/* Features laid over the SVG cutout */}
        <div style={{
          position: 'absolute',
          top: '60%', // Anchor to the top so it grows downwards if it wraps
          left: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pointerEvents: 'auto'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem', // Reduced gap to avoid wrapping early
            maxWidth: '1200px',
            width: '100%',
            padding: '0 1rem'
          }}>
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                ref={(el) => { if(el) featuresRef.current[idx] = el; }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  flex: '1 1 140px', // Smaller base size to fit more on one row
                  maxWidth: '220px',
                  lineHeight: 'normal' // restore line-height inside absolute container
                }}
              >
                <div style={{
                  color: '#022C22', // Dark Green
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  color: '#022C22',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '0.4rem',
                  margin: 0
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#475569', // Slate Gray
                  fontSize: '1.1rem',
                  margin: 0,
                  marginTop: '0.3rem'
                }}>
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        padding: '1rem 0.5rem 6rem', // Minimal side padding to stretch to screen edge
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '100%', // Allow full screen width
        margin: '0 auto'
      }}>
        {/* Testimonial Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-around', // Spread them wider across the screen
          gap: '2rem',
          marginBottom: '3rem',
          width: '100%',
          padding: '0 2rem',
          flexWrap: 'wrap'
        }}>
          {/* Main Heading with underline */}
          <div ref={heading1Ref} style={{ position: 'relative' }}>
            <h2 className={kalam.className} style={{
              fontSize: 'clamp(3rem, 5vw, 6rem)', // Huge scalable text
              color: '#022C22',
              margin: 0,
              lineHeight: '1',
              transform: 'rotate(-2deg)'
            }}>
              We've all been there!
            </h2>
            {/* Yellow Highlight Underline */}
            <svg width="100%" height="20" viewBox="0 0 300 20" preserveAspectRatio="none" fill="none" style={{ position: 'absolute', bottom: '-10px', left: 0, zIndex: -1 }}>
              <path d="M 5 15 Q 150 5 295 10" stroke="#FFD84D" strokeWidth="12" strokeLinecap="round" />
            </svg>
          </div>

          {/* Subheading */}
          <div ref={heading2Ref} className={caveat.className} style={{
            fontSize: 'clamp(1.8rem, 3vw, 4rem)', // Huge scalable handwritten text
            color: '#333',
            lineHeight: '1.2',
            transform: 'rotate(-4deg)',
            marginBottom: '0.5rem'
          }}>
            Same place.<br/>Different nightmares.
          </div>
        </div>

        {/* 4 Images Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'nowrap', // Force them all onto one line
          justifyContent: 'center',
          gap: '0.5rem', // Tight gap
          width: '100%'
        }}>
          {/* Testimonial 1 */}
          <div 
            ref={(el) => { if(el) testimonialsRef.current[0] = el; }}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            style={{ position: 'relative', flex: 1, minWidth: 0, cursor: 'pointer' }}
          >
            <Image src="/testimonial_1.png" alt="The Smell Attacker" width={500} height={600} style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
          </div>

          {/* Testimonial 2 */}
          <div 
            ref={(el) => { if(el) testimonialsRef.current[1] = el; }}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            style={{ position: 'relative', flex: 1, minWidth: 0, cursor: 'pointer' }}
          >
            <Image src="/testimonial_2.png" alt="The Mystery Stains" width={500} height={600} style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
          </div>

          {/* Testimonial 3 */}
          <div 
            ref={(el) => { if(el) testimonialsRef.current[2] = el; }}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            style={{ position: 'relative', flex: 1, minWidth: 0, cursor: 'pointer' }}
          >
            <Image src="/testimonial_3.png" alt="The Still Warm Surprise" width={500} height={600} style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
          </div>

          {/* Testimonial 4 */}
          <div 
            ref={(el) => { if(el) testimonialsRef.current[3] = el; }}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            style={{ position: 'relative', flex: 1, minWidth: 0, cursor: 'pointer' }}
          >
            <Image src="/testimonial_4.png" alt="The I Don't Trust Anyone Look" width={500} height={600} style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
