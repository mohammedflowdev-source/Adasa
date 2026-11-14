import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import ListBlogCard from "../Components/ListBlogCard";
import Pagination from "../Components/Pagination";
import Newsletter from "../Components/Newsletter";
import { SearchIcon, GridIcon, ListIcon } from "../Components/Icons";
import data from "../data.json";

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const listRef = useRef(null);

  const handleCategoryChange = (cat) => {
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams);
    if (cat === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (val) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const filteredPosts = data.posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      post.author.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "all" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const categories = [
    { id: "all", label: "جميع المقالات" },
    { id: "إضاءة", label: "إضاءة" },
    { id: "بورتريه", label: "بورتريه" },
    { id: "مناظر طبيعية", label: "مناظر طبيعية" },
    { id: "تقنيات", label: "تقنيات" },
    { id: "معدات", label: "معدات" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-20 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/50 bg-orange-950/30 px-3.5 py-1 text-xs font-semibold text-orange-400 mb-6 backdrop-blur-sm">
            <span className="flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            </span>
            <span>مدونتنا</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            استكشف مقالاتنا
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#a1a1a1] max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      <section ref={listRef} className="py-10 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2 order-2 lg:order-1">
              {categories.map((cat) => {
                const isActive = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#ea580c] font-semibold text-white shadow-md shadow-orange-950/40"
                        : "border border-[#262626] bg-[#121212]/90 text-[#959595] hover:border-[#ea580c] hover:text-white backdrop-blur-sm"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80 order-1 lg:order-2">
              <input
                type="search"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="ابحث في المقالات..."
                className="w-full rounded-xl border border-[#262626] bg-[#121212]/90 py-2.5 pr-10 pl-4 text-xs sm:text-sm text-white placeholder-[#666] focus:border-[#ea580c] focus:outline-none transition-colors backdrop-blur-sm"
              />
              <SearchIcon className="absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#666]" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-6 mb-8">
            <p className="text-xs sm:text-sm text-[#808080]">
              عرض {filteredPosts.length} مقالات
            </p>

            <div className="flex items-center gap-1 rounded-xl border border-[#262626] bg-[#121212]/90 p-1 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-lg p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-[#ea580c] text-white"
                    : "text-[#808080] hover:text-white"
                }`}
                aria-label="عرض قائمة"
              >
                <ListIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`rounded-lg p-2 transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#ea580c] text-white"
                    : "text-[#808080] hover:text-white"
                }`}
                aria-label="عرض شبكة"
              >
                <GridIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {currentPosts.length === 0 ? (
            <div className="py-24 text-center rounded-2xl border border-dashed border-[#262626] bg-[#121212]/40 backdrop-blur-sm p-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#141414] text-[#666]">
                <SearchIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white">لا توجد مقالات مطابقة</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#777]">
                جرّب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  handleCategoryChange("all");
                }}
                className="mt-6 rounded-xl bg-[#ea580c] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#c2410c]"
              >
                إعادة ضبط التصفية
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {currentPosts.map((post) => (
                <ListBlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <Pagination
            pages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
