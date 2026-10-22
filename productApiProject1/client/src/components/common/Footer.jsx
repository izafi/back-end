
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white">
                S
              </div>

              <span className="text-xl font-extrabold text-white">
                Shop<span className="text-blue-500">Sphere</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Discover quality products at great prices.
              We make your everyday shopping simple and convenient.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 font-bold text-white transition hover:bg-blue-600"
              >
                f
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 font-bold text-white transition hover:bg-pink-600"
              >
                ig
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 font-bold text-white transition hover:bg-blue-700"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <Link to="/" className="transition hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/product" className="transition hover:text-blue-400">
                  All Products
                </Link>
              </li>

              <li>
                <a href="#about" className="transition hover:text-blue-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-bold text-white">
              Customer Service
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href="#faq" className="transition hover:text-blue-400">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#shipping" className="transition hover:text-blue-400">
                  Shipping Information
                </a>
              </li>

              <li>
                <a href="#returns" className="transition hover:text-blue-400">
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a href="#privacy" className="transition hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-white">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Have a question about a product? We'd love to hear from you.
            </p>

            <a
              href="mailto:support@example.com"
              className="mt-4 inline-block break-all text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              support@example.com
            </a>

            <p className="mt-3 text-sm text-slate-400">
              Monday – Saturday
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ShopSphere. All rights reserved.
          </p>

          <a
            href="#top"
            className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
