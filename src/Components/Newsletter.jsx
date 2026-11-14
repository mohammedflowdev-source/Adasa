import { useState } from "react";
import { MailIcon } from "./Icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl relative overflow-hidden rounded-3xl border border-[#262626] bg-gradient-to-b from-[#161616] to-[#0f0f0f] p-8 sm:p-14 text-center shadow-2xl">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ea580c] text-white shadow-lg shadow-orange-600/30">
            <MailIcon className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            اشترك في نشرتنا الإخبارية
          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#9e9e9e] leading-relaxed">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-lg flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ادخل بريدك الإلكتروني"
              className="flex-1 rounded-xl border border-[#2e2e2e] bg-[#1a1a1a] px-5 py-3.5 text-sm text-white placeholder-[#666] focus:border-[#ea580c] focus:outline-none focus:ring-1 focus:ring-[#ea580c] transition-all text-right"
              required
            />
            <button
              type="submit"
              className="rounded-xl bg-[#ea580c] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#c2410c] hover:shadow-lg hover:shadow-orange-950/50 active:scale-95 whitespace-nowrap"
            >
              اشترك الآن
            </button>
          </form>

          {status === "success" && (
            <p className="mt-3 text-xs font-medium text-emerald-400">
              شكراً لاشتراكك! ستصلك أولى رسائلنا قريباً.
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-[#808080]">
            <div className="flex -space-x-2 space-x-reverse overflow-hidden">
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#161616] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Member"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#161616] object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                alt="Member"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#161616] object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Member"
              />
            </div>
            <span>انضم لـ <strong className="text-white font-semibold">+10,000</strong> مصور</span>
            <span>•</span>
            <span>بدون إزعاج</span>
            <span>•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}
