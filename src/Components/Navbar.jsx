import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoIcon, SearchIcon, CloseIcon } from "./Icons";

export default function Navbar({ onOpenSearch }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="transition-transform group-hover:scale-105">
              <LogoIcon className="w-10 h-10" />
            </div>
            <div className="text-right">
              <div className="text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                عدسة
              </div>
              <div className="text-xs font-medium text-orange-500">
                عالم التصوير الفوتوغرافي
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center rounded-full border border-[#262626] bg-[#141414]/90 p-1.5 shadow-inner">
            <Link
              to="/"
              className={`rounded-full px-6 py-2 text-sm transition-all duration-200 ${
                isActive("/")
                  ? "bg-[#ea580c] font-semibold text-white shadow-md shadow-orange-950/40"
                  : "text-[#959595] hover:text-white"
              }`}
            >
              الرئيسية
            </Link>
            <Link
              to="/blog"
              className={`rounded-full px-6 py-2 text-sm transition-all duration-200 ${
                isActive("/blog")
                  ? "bg-[#ea580c] font-semibold text-white shadow-md shadow-orange-950/40"
                  : "text-[#959595] hover:text-white"
              }`}
            >
              المدونة
            </Link>
            <Link
              to="/about"
              className={`rounded-full px-6 py-2 text-sm transition-all duration-200 ${
                isActive("/about")
                  ? "bg-[#ea580c] font-semibold text-white shadow-md shadow-orange-950/40"
                  : "text-[#959595] hover:text-white"
              }`}
            >
              من نحن
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#959595] hover:bg-[#1f1f1f] hover:text-white transition-colors"
              aria-label="بحث"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#ea580c] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#c2410c] hover:shadow-lg hover:shadow-orange-900/30 active:scale-95"
            >
              ابدأ القراءة
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[#262626] bg-[#141414] text-[#959595] hover:text-white"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1f1f1f] py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block rounded-lg px-4 py-2 text-sm ${
                isActive("/") ? "bg-[#ea580c] text-white font-semibold" : "text-[#959595] hover:text-white"
              }`}
            >
              الرئيسية
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block rounded-lg px-4 py-2 text-sm ${
                isActive("/blog") ? "bg-[#ea580c] text-white font-semibold" : "text-[#959595] hover:text-white"
              }`}
            >
              المدونة
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block rounded-lg px-4 py-2 text-sm ${
                isActive("/about") ? "bg-[#ea580c] text-white font-semibold" : "text-[#959595] hover:text-white"
              }`}
            >
              من نحن
            </Link>
            <div className="pt-2">
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center rounded-full bg-[#ea580c] px-4 py-2.5 text-sm font-semibold text-white"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
