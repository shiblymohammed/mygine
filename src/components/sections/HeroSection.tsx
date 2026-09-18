"use client";

import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Caveat } from 'next/font/google';
import { useState, useEffect } from "react";
import row1Image from "../../../public/row-1.png";
import row2Image from "../../../public/row-2.png";
import manImage from "../../../public/man.webp";
import man2Image from "../../../public/man2.png";

const caveat = Caveat({ subsets: ['latin'], weight: '700' });

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [useMan2, setUseMan2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUseMan2(prev => !prev);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // By importing statically, Next.js gives us the intrinsic width and height.
  // We use the aspect ratios to calculate the exact percentage width each image needs 
  // so that their rendered heights are identical and they seamlessly fill 100vw.
  const r1 = row1Image.width / row1Image.height;
  const r2 = row2Image.width / row2Image.height;
  const totalR = r1 + r2;
  const pct1 = (r1 / totalR) * 100;
  const pct2 = (r2 / totalR) * 100;

  return (
    <section 
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        marginTop: '-6rem',
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'hidden',
        position: 'sticky',
        top: 0,
        zIndex: 0
      }}
    >
      <div style={{ width: `${pct1}%`, position: 'relative', zIndex: 3 }}>
        <Image 
          src={row1Image} 
          alt="Hero Left" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
          priority 
        />
        
        {/* NEW TYPOGRAPHY OVERLAY */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '0',
          width: '100%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          zIndex: 5,
          paddingLeft: '2rem' // Padding from the left edge
        }}>
          
          {/* Malayalam Heading Container */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            {/* Top Right Crown Decoration */}
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#FFD84D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', top: '-15%', right: '-15%', transform: 'rotate(15deg)' }}>
              <path d="M 20 50 L 30 20 L 50 40 L 70 20 L 80 50 Z" />
            </svg>
            
            {/* Top Motion Lines */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#064E3B" strokeWidth="6" strokeLinecap="round" style={{ position: 'absolute', top: '-10%', left: '20%' }}>
              <line x1="20" y1="80" x2="30" y2="50" />
              <line x1="70" y1="80" x2="60" y2="50" />
            </svg>
            
            {/* Line 1: വിരിക്കാം */}
            <div style={{ fontFamily: 'Malabar, sans-serif', fontSize: '6vw', color: '#022C22', lineHeight: '1.2', transform: 'rotate(-2deg)' }}>
              വിരിക്കാം
            </div>
            
            {/* Line 2: ഇരിക്കാം with highlight */}
            <div style={{ position: 'relative', display: 'inline-block', transform: 'rotate(1deg)' }}>
              <div style={{ position: 'absolute', bottom: '15%', left: '-5%', width: '110%', height: '30%', backgroundColor: '#FFD84D', zIndex: -1, borderRadius: '4px', opacity: 0.9 }}></div>
              <div style={{ fontFamily: 'Malabar, sans-serif', fontSize: '7vw', color: '#022C22', lineHeight: '1.1' }}>
                ഇരിക്കാം
              </div>
            </div>

            {/* Right Motion Lines */}
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#064E3B" strokeWidth="6" strokeLinecap="round" style={{ position: 'absolute', right: '-15%', top: '40%' }}>
              <line x1="20" y1="20" x2="45" y2="45" />
              <line x1="10" y1="70" x2="35" y2="55" />
            </svg>

            {/* Line 3: സാധിക്കാം with highlight */}
            <div style={{ position: 'relative', transform: 'rotate(-1deg)', marginTop: '-1vw' }}>
              <div style={{ position: 'absolute', bottom: '10%', left: '-2%', width: '104%', height: '25%', backgroundColor: '#FFD84D', zIndex: -1, borderRadius: '4px', opacity: 0.9 }}></div>
              <div style={{ fontFamily: 'Malabar, sans-serif', fontSize: '8vw', color: '#022C22', lineHeight: '1.1' }}>
                സാധിക്കാം
              </div>
            </div>

            {/* Left Motion Lines */}
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#064E3B" strokeWidth="6" strokeLinecap="round" style={{ position: 'absolute', left: '-20%', top: '50%' }}>
              <line x1="80" y1="20" x2="55" y2="45" />
              <line x1="90" y1="70" x2="65" y2="55" />
            </svg>
          </div>

          {/* Subheading & Smile */}
          <div style={{ position: 'relative', marginTop: '2.5rem', transform: 'rotate(-3deg)' }}>
            {/* Left Sparkle */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#FFD84D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '-15%', top: '-30%' }}>
              <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 25 25 L 75 75 M 25 75 L 75 25" />
            </svg>

            <div className={caveat.className} style={{ fontSize: '2.2vw', color: '#333', textAlign: 'center', lineHeight: '1.2' }}>
              Because some seats<br/>have seen things...
            </div>
            
            {/* Smiley Face */}
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: '-15%', bottom: '-15%', transform: 'rotate(10deg)' }}>
              <circle cx="50" cy="50" r="40" />
              <circle cx="35" cy="40" r="4" fill="#333" />
              <circle cx="65" cy="40" r="4" fill="#333" />
              <path d="M 35 65 Q 50 80 65 65" />
            </svg>
          </div>

          {/* Button Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '4rem', transform: 'rotate(-1deg)' }}>
            <button style={{ 
              backgroundColor: '#022C22', 
              color: '#FFFDF7', 
              padding: '1rem 2.5rem', 
              borderRadius: '9999px', 
              fontSize: '1.2vw',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              Shop Now <span style={{ fontSize: '1.5vw' }}>&rarr;</span>
            </button>

            <button style={{
              background: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '3.5vw',
                height: '3.5vw',
                borderRadius: '50%',
                border: '2px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Play Triangle */}
                <svg width="40%" height="40%" viewBox="0 0 100 100" fill="#333" style={{ marginLeft: '10%' }}>
                  <path d="M 20 10 L 90 50 L 20 90 Z" />
                </svg>
              </div>
              <span style={{ fontSize: '1vw', fontWeight: 'bold', color: '#333' }}>Watch the Drama</span>
            </button>
          </div>

        </div>
      </div>

      <div 
        style={{
          position: 'absolute',
          left: `calc(${pct1}% - 5%)`, // Tucked slightly behind the door
          top: '10%', // Moved to the top as requested
          zIndex: 2,
          width: '18%', // Scales responsively with the screen
          transform: `translateY(${offsetY * 0.65}px)`, // Parallax effect
          willChange: 'transform'
        }}
      >
        <div className="animate-peek" style={{ width: '100%' }}>
          <div className="man-hover-wrapper" style={{ position: 'relative' }}>
            <Image 
              src={useMan2 ? man2Image : manImage} 
              alt="Man peeking" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          
          {/* Handwritten Dialogue */}
          <div style={{
            position: 'absolute',
            left: '80%', // Moved closer to the man as requested
            top: '-10%',
            width: '240px',
            transform: 'rotate(-6deg)',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div className={`animate-text-pop ${caveat.className}`} style={{
              fontSize: '2.5rem',
              color: '#333',
              lineHeight: '1',
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}>
              Just checking...<br/>anyone there?
            </div>
            {/* Hand-drawn Arrow */}
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '-5px', marginLeft: '-60px' }}>
              <path d="M 70 10 Q 50 40 20 70" className="animate-draw" />
              <path d="M 20 70 L 20 50 M 20 70 L 40 70" className="animate-draw-head" />
            </svg>
          </div>
        </div>
      </div>
    </div>

      <div style={{ width: `${pct2}%`, position: 'relative', zIndex: 1 }}>
        <Image 
          src={row2Image} 
          alt="Hero Right" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
          priority 
        />
        
        {/* Toilet Thought Bubble */}
        <div className="animate-peek" style={{
          position: 'absolute',
          bottom: '55%',
          left: '30%',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          transform: 'rotate(-3deg)'
        }}>
          <div style={{
            backgroundColor: '#FFFDF7',
            border: '3px solid #333',
            borderRadius: '9999px',
            padding: '1vw 2vw',
            position: 'relative',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <div className={caveat.className} style={{
              fontSize: '2vw',
              color: '#333',
              textAlign: 'center',
              lineHeight: '1.1'
            }}>
              I've seen<br/>better days...
            </div>
          </div>
          {/* Thought bubbles leading down to the toilet */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'flex-start', marginLeft: '3vw', marginTop: '0.2vw', gap: '0.4vw' }}>
            <div style={{ width: '1.2vw', height: '1.2vw', borderRadius: '50%', border: '3px solid #333', backgroundColor: '#FFFDF7' }}></div>
            <div style={{ width: '0.6vw', height: '0.6vw', borderRadius: '50%', border: '2px solid #333', backgroundColor: '#FFFDF7', marginLeft: '-0.5vw' }}></div>
          </div>
        </div>

        {/* Lottie Animation */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '7%',
          width: '40%',
          zIndex: 4,
          pointerEvents: 'none', // Ensures it doesn't block interactions underneath
          filter: 'blur(1px)' // Reduced blur as requested
        }}>
          <DotLottieReact
            src="https://lottie.host/70b10a69-c2b3-49bd-bcb5-c564d603a32c/52kIdS0zVA.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
}
