import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchModal from "./SearchModal";
import ContactModal from "./ContactModal";

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white flex flex-col font-['Tajawal',sans-serif] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[12%] -left-40 w-[650px] h-[650px] rounded-full ambient-glow-left blur-[100px]" />
        <div className="absolute top-[42%] -right-48 w-[700px] h-[700px] rounded-full ambient-glow-right blur-[110px]" />
        <div className="absolute top-[78%] -left-36 w-[600px] h-[600px] rounded-full ambient-glow-left blur-[110px]" />
        <div className="absolute inset-0 bg-grid-overlay opacity-100" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenSearch={() => setSearchOpen(true)} />
        
        <main className="flex-1">
          <Outlet context={{ onOpenContact: () => setContactOpen(true) }} />
        </main>

        <Footer />
      </div>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
