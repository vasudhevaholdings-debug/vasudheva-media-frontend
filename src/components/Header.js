import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logos/mediaLogo_transparent.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* Left - Logo + Brand */}
      <div className="header-left">
        <Link to="/">
          <img
            src={Logo}
            alt="Vasudheva Logo"
            className="header-logo"
          />
        </Link>

        <div className="brand-block">
          <div className="brand-name">VASUDHEVA</div>
          <div className="brand-entity">MEDIA PVT. LTD.</div>
        </div>
      </div>

      {/* Center Navigation - Desktop only */}
      <nav className="header-center-nav desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/what-we-do">What We Do</Link>
        <Link to="/work">Work</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/who-we-serve">Who We Serve</Link>
        <Link to="/collaborate">Collaborate</Link>
      </nav>

      {/* Right Side - CTA Button */}
      <nav className="header-nav desktop-nav">
        <Link to="/contact" className="cta-button">
          Start a Project
        </Link>
      </nav>

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>What We Do</Link>
          <Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link to="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link to="/who-we-serve" onClick={() => setMenuOpen(false)}>Who We Serve</Link>
          <Link to="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</Link>
          
          <Link 
            to="/contact" 
            className="cta-button mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}