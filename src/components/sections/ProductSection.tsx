"use client";

import Image from "next/image";
import { Kalam } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const kalam = Kalam({ subsets: ['latin'], weight: '700' });

export default function ProductSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
       gsap.from(".product-image", {
         scrollTrigger: {
           trigger: ".product-image",
           start: "top 80%",
           toggleActions: "play none none reverse"
         },
         x: -50,
         opacity: 0,
         duration: 1,
         ease: "power3.out"
       });

       gsap.from(".product-content > *", {
         scrollTrigger: {
           trigger: ".product-content",
           start: "top 80%",
           toggleActions: "play none none reverse"
         },
         x: 50,
         opacity: 0,
         duration: 0.8,
         stagger: 0.1,
         ease: "power3.out"
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        backgroundColor: '#FFFDF7',
        position: 'relative',
        padding: '6rem 2rem',
        overflow: 'hidden'
      }}
    >
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4rem',
      }}>
        
        {/* Left Column: Image */}
        <div className="product-image" style={{ flex: '1 1 500px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          
          {/* Top Left Text and Arrow */}
          <div style={{
            position: 'absolute',
            top: '8%',
            left: '0%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            zIndex: 10
          }}>
            <div className={kalam.className} style={{
              fontSize: '1.5rem',
              color: '#022C22',
              lineHeight: '1.1',
              transform: 'rotate(-5deg)',
              marginBottom: '0.5rem'
            }}>
              A small<br/>layer for<br/>a bigger<br/>peace of<br/>mind.
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#022C22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            
            {/* Arrow */}
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#022C22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(10deg)', marginTop: '0.5rem', marginLeft: '1rem' }}>
              <path d="M 10,10 Q 15,60 70,80" />
              <polyline points="50,60 70,80 50,100" />
            </svg>
          </div>

          <Image 
            src="/theCloset.png" 
            alt="Mygine Flushable Toilet Seat Cover" 
            width={800} 
            height={800} 
            style={{ width: '100%', maxWidth: '600px', height: 'auto', zIndex: 1 }} 
          />

          {/* Bottom Left Badge */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            backgroundColor: '#022C22',
            color: 'white',
            borderRadius: '45% 55% 40% 60% / 55% 45% 60% 40%', // Organic wobbly circle
            width: '160px',
            height: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            transform: 'rotate(-8deg)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
            zIndex: 10
          }}>
            <div className={kalam.className} style={{
              fontSize: '1.4rem',
              lineHeight: '1.1'
            }}>
              Clean<br/>People<br/>Happier<br/>World ♡
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="product-content" style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
          
          {/* Handwriting annotation */}
          <div className={kalam.className} style={{
            position: 'absolute',
            top: '-2rem',
            right: '0',
            fontSize: '1.6rem',
            color: '#333',
            transform: 'rotate(-5deg)',
            zIndex: 5
          }}>
            Same seat.<br/>Different you :)
          </div>

          {/* Tag & Subheading */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <span style={{
              backgroundColor: '#FFD84D', // Yellow
              color: '#022C22',
              fontWeight: '700',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              Bestseller
            </span>
            <h2 style={{
              fontFamily: 'Malabar, sans-serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              color: '#022C22',
              margin: '0 0 0.5rem 0',
              lineHeight: '1.1'
            }}>
              Mygine Flushable<br/>Toilet Seat Cover
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#475569',
              margin: 0,
              fontWeight: '500'
            }}>
              A cleaner seat for a brighter day.
            </p>
          </div>

          {/* Features List */}
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {[
              'Hygienic & safe barrier',
              'Flushable & eco friendly',
              'Fits most public toilets',
              'Individually packed & travel friendly'
            ].map((text, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', color: '#022C22', fontWeight: '600' }}>
                <div style={{
                  backgroundColor: '#022C22',
                  color: 'white',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                {text}
              </li>
            ))}
          </ul>

          {/* Pricing Box */}
          <div style={{
            backgroundColor: '#FBF8F1', // Light cream
            border: '2px solid #EAE3D1',
            borderRadius: '20px',
            padding: '2rem',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#022C22', lineHeight: 1 }}>₹199</span>
                <span style={{ fontSize: '1.1rem', color: '#475569', fontWeight: '600' }}>/ Pack of 20</span>
              </div>

              {/* Quantity Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button style={{
                  width: '45px', height: '45px', borderRadius: '10px', border: '2px solid #CBD5E1', backgroundColor: 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#022C22'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <div style={{ width: '60px', height: '45px', borderRadius: '10px', border: '2px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', fontWeight: '700', color: '#022C22', backgroundColor: 'white' }}>
                  1
                </div>
                <button style={{
                  width: '45px', height: '45px', borderRadius: '10px', border: 'none', backgroundColor: '#022C22',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
            </div>

            <button style={{
              width: '100%',
              backgroundColor: '#022C22',
              color: 'white',
              border: 'none',
              borderRadius: '99px',
              padding: '1.2rem',
              fontSize: '1.3rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              transition: 'all 0.2s',
              boxShadow: '0 4px 14px 0 rgba(2, 44, 34, 0.39)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Order Now
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            {/* Secure Payments */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#022C22', fontSize: '1rem', fontWeight: '700' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Secure Payments
            </div>
            {/* Fast Delivery */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#022C22', fontSize: '1rem', fontWeight: '700' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              Fast Delivery
            </div>
            {/* Eco Friendly */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#022C22', fontSize: '1rem', fontWeight: '700' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
              Eco Friendly
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
