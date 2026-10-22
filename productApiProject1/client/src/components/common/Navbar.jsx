
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-md shadow-blue-200">
            S
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Shop<span className="text-blue-600">Sphere</span>
            </h1>
            <p className="text-[10px] font-medium uppercase tracking-[2px] text-slate-400">
              Your daily essentials
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/product" className={navLinkClass}>
            Products
          </NavLink>

          <a
            href="#about"
            className="text-slate-600 transition-colors hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-slate-600 transition-colors hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/product"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-100 transition hover:bg-blue-700 active:scale-95"
          >
            Explore Products →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-5">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Products
            </NavLink>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-slate-600 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-slate-600 hover:text-blue-600"
            >
              Contact
            </a>

            <Link
              to="/product"
              onClick={closeMenu}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Products →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
