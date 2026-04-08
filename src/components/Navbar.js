import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm">
      {/* Logo with a subtle gradient and tighter tracking */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
        >
          My Thoughts<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm font-semibold transition-colors ${
                isActive
                  ? "text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-blue-600"
                  : "text-slate-500 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) =>
              `inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900 text-white hover:bg-blue-600 hover:shadow-blue-600/20"
              }`
            }
          >
            Create Post
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-2xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-blue-600"
          >
            Create Post
          </NavLink>
        </div>
      )}
    </nav>
  );
}