import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand-container">
        <div className="nav-brand-logo">mygine&reg;</div>
        <div className="nav-brand-sub">A CLEANER TOMORROW</div>
      </Link>
      
      <div className="nav-links">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/why-mygine" className="nav-link">Why Mygine</Link>
        <Link href="/features" className="nav-link">Features</Link>
        <Link href="/real-stories" className="nav-link">Real Stories</Link>
        <Link href="/shop" className="nav-link">Shop</Link>
      </div>

      <div className="nav-actions">
        <Link href="/shop" className="nav-cta">
          Get Yours <span style={{marginLeft: '4px'}}>→</span>
        </Link>
        <div className="nav-cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-badge">0</span>
        </div>
      </div>
    </nav>
  );
}
