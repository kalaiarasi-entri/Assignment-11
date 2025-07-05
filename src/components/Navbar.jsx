import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
      isActive
        ? 'bg-emerald-500 text-gray-900 shadow'
        : 'text-gray-300 hover:bg-emerald-600 hover:text-white'
    }`;

  return (
    <nav className="bg-gray-800 shadow-md px-4 py-3">
      {/* Top bar with logo and toggle */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/users" className={navLinkClass}>Users</NavLink>
          <FaUserCircle className="text-2xl text-gray-300 hover:text-yellow-400 cursor-pointer" />
        </div>

        {/* Mobile Toggle Button */}
        <button className="text-white text-2xl md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 animate__animated animate__fadeInDown">
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/users" className={navLinkClass} onClick={closeMenu}>Users</NavLink>
        </div>
      )}
    </nav>
  );
}
