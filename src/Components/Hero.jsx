import { Link } from "react-router-dom";
import { ArrowLeftIcon, InfoIcon, ArticleIcon, UsersIcon, CategoryFolderIcon, PenIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36 bg-[#0a0a0a] border-b border-[#1a1a1a]">
      <div className="absolute top-[20%] -left-36 w-[550px] h-[550px] rounded-full ambient-glow-left blur-[100px] pointer-events-none" />
      <div className="absolute top-[48%] -right-40 w-[600px] h-[600px] rounded-full ambient-glow-right blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/50 bg-orange-950/30 px-4 py-1.5 text-xs font-semibold text-orange-400 mb-8 backdrop-blur-sm shadow-sm">
          <span className="flex gap-1 items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          </span>
          <span>مرحباً بك في عدسة</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          اكتشف{" "}
          <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            فن
          </span>
          <br />
          التصوير الفوتوغرافي
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#a1a1a1] max-w-2xl mx-auto leading-relaxed">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#ea580c] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-orange-950/50 transition-all hover:bg-[#c2410c] hover:scale-105 active:scale-95"
          >
            <span>استكشف المقالات</span>
            <ArrowLeftIcon className="w-4 h-4" />
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#141414]/90 px-8 py-3.5 text-sm sm:text-base font-semibold text-[#cfcfcf] transition-all hover:border-[#404040] hover:bg-[#1f1f1f] hover:text-white backdrop-blur-sm"
          >
            <InfoIcon className="w-4 h-4 text-[#888]" />
            <span>اعرف المزيد</span>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md transition-all hover:border-[#333]">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
              <ArticleIcon className="w-7 h-7" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
              +50
            </div>
            <div className="mt-1 text-xs text-[#808080]">
              مقالة
            </div>
          </div>

          <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md transition-all hover:border-[#333]">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
              <UsersIcon className="w-7 h-7" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
              +10آلاف
            </div>
            <div className="mt-1 text-xs text-[#808080]">
              قارئ
            </div>
          </div>

          <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md transition-all hover:border-[#333]">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
              <CategoryFolderIcon className="w-7 h-7" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
              4
            </div>
            <div className="mt-1 text-xs text-[#808080]">
              تصنيفات
            </div>
          </div>

          <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md transition-all hover:border-[#333]">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
              <PenIcon className="w-7 h-7" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
              6
            </div>
            <div className="mt-1 text-xs text-[#808080]">
              كاتب
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
