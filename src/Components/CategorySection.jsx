import { Link } from "react-router-dom";
import { SunIcon, UserCircleIcon, LandscapeIcon, SlidersIcon, CameraIcon } from "./Icons";
import data from "../data.json";

export default function CategorySection() {
  const getIcon = (name) => {
    switch (name) {
      case "إضاءة":
        return <SunIcon className="w-6 h-6" />;
      case "بورتريه":
        return <UserCircleIcon className="w-6 h-6" />;
      case "مناظر طبيعية":
        return <LandscapeIcon className="w-6 h-6" />;
      case "تقنيات":
        return <SlidersIcon className="w-6 h-6" />;
      case "معدات":
        return <CameraIcon className="w-6 h-6" />;
      default:
        return <CameraIcon className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/50 bg-orange-950/30 px-3.5 py-1 text-xs font-semibold text-orange-400 mb-4">
            <span className="flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            </span>
            <span>التصنيفات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            استكشف حسب الموضوع
          </h2>
          <p className="mt-2 text-sm text-[#888]">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/blog?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-[#222222] bg-[#121212] transition-all duration-300 hover:border-[#ea580c] hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-950/20 text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-900/30 bg-orange-950/20 text-orange-500 transition-transform duration-300 group-hover:scale-110">
                {getIcon(cat.name)}
              </div>
              <h3 className="text-base font-bold text-white transition-colors group-hover:text-orange-400">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-[#737373]">
                {cat.count} مقالة
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
