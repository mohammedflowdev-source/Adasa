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
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-['Tajawal',sans-serif]">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      
      <main className="flex-1">
        <Outlet context={{ onOpenContact: () => setContactOpen(true) }} />
      </main>

      <Footer />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
