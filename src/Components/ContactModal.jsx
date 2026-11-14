import { useState, useEffect } from "react";
import { CloseIcon, MailIcon } from "./Icons";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#262626] bg-[#121212] p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 p-1.5 rounded-lg text-[#888] hover:bg-[#1f1f1f] hover:text-white transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600/20 text-orange-500">
            <MailIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">تواصل معنا</h3>
            <p className="text-xs text-[#888]">يسعدنا الاستماع لآرائكم واستفساراتكم</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white">تم إرسال رسالتك بنجاح!</h4>
            <p className="mt-1 text-xs text-[#888]">سنقوم بالرد عليك في أقرب وقت ممكن.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#aaa] mb-1.5">الاسم</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="اسمك الكريم"
                className="w-full rounded-xl border border-[#262626] bg-[#181818] px-4 py-2.5 text-sm text-white placeholder-[#555] focus:border-[#ea580c] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#aaa] mb-1.5">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-[#262626] bg-[#181818] px-4 py-2.5 text-sm text-white placeholder-[#555] focus:border-[#ea580c] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#aaa] mb-1.5">الموضوع</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="موضوع الرسالة"
                className="w-full rounded-xl border border-[#262626] bg-[#181818] px-4 py-2.5 text-sm text-white placeholder-[#555] focus:border-[#ea580c] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#aaa] mb-1.5">الرسالة</label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="اكتب رسالتك هنا..."
                className="w-full rounded-xl border border-[#262626] bg-[#181818] px-4 py-2.5 text-sm text-white placeholder-[#555] focus:border-[#ea580c] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#ea580c] py-3 text-sm font-semibold text-white hover:bg-[#c2410c] transition-all active:scale-[0.99] mt-2"
            >
              إرسال الرسالة
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
