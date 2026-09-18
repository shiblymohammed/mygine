import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      position: 'relative',
      backgroundColor: 'transparent',
      marginTop: '-5vw',
      lineHeight: 0,
      zIndex: 10
    }}>
      <img 
        src="/footer_canvas.svg" 
        alt="Footer Background" 
        style={{ width: '100%', height: 'auto', display: 'block' }} 
      />
    </footer>
  );
}
