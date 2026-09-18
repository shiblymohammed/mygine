import Image from "next/image";
import introCanvas from "../../../public/intro_canvas.svg";

export default function IntroSection() {
  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF', // White
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
        pointerEvents: 'none'
      }}>
        <img 
          src="/intro_canvas.svg?v=3" 
          alt="Intro Transition" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>

      <div style={{
        padding: '6rem 2rem',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h2 style={{ color: '#064E3B', fontSize: '2rem' }}>[Intro Section Placeholder]</h2>
      </div>
    </section>
  );
}
