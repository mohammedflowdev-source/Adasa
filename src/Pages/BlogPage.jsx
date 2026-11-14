import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import ListBlogCard from "../Components/ListBlogCard";
import Pagination from "../Components/Pagination";
import Newsletter from "../Components/Newsletter";
import { SearchIcon, GridIcon, ListIcon } from "../Components/Icons";
import { useLanguage } from "../context/useLanguage";
import data from "../data.json";

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const { t, localizeCategory, localizePost } = useLanguage();

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

  const localizedAllPosts = data.posts.map((p) => ({
    original: p,
    localized: localizePost(p),
  }));

  const filteredPosts = localizedAllPosts.filter(({ original, localized }) => {
    const matchesSearch =
      localized.title.toLowerCase().includes(search.toLowerCase()) ||
      localized.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      localized.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      localized.author.name.toLowerCase().includes(search.toLowerCase()) ||
      original.title.toLowerCase().includes(search.toLowerCase()) ||
      original.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      original.author.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      original.category === category ||
      localizeCategory(original.category) === category;

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
    { id: "all", label: t("allArticles") },
    { id: "إضاءة", label: localizeCategory("إضاءة") },
    { id: "بورتريه", label: localizeCategory("بورتريه") },
    { id: "مناظر طبيعية", label: localizeCategory("مناظر طبيعية") },
    { id: "تقنيات", label: localizeCategory("تقنيات") },
    { id: "معدات", label: localizeCategory("معدات") },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative overflow-hidden pt-20 pb-20 text-center border-b border-[#1a1a1a]">
        <div className="absolute top-[20%] -left-36 w-[550px] h-[550px] rounded-full ambient-glow-left blur-[100px] pointer-events-none" />
        <div className="absolute top-[48%] -right-40 w-[600px] h-[600px] rounded-full ambient-glow-right blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/50 bg-orange-950/30 px-3.5 py-1 text-xs font-semibold text-orange-400 mb-6 backdrop-blur-sm">
            <span className="flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            </span>
            <span>{t("blogBadge")}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {t("blogTitle")}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#a1a1a1] max-w-2xl mx-auto">
            {t("blogSubtitle")}
          </p>
        </div>
      </section>

      <section ref={listRef} className="py-10 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-[#0a0a0a]">
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
                        : "border border-[#262626] bg-[#121212] text-[#959595] hover:border-[#ea580c] hover:text-white"
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
                placeholder={t("searchArticlesPlaceholder")}
                className="w-full rounded-xl border border-[#262626] bg-[#121212] py-2.5 px-10 text-xs sm:text-sm text-white placeholder-[#666] focus:border-[#ea580c] focus:outline-none transition-colors"
              />
              <SearchIcon className="absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#666]" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-6 mb-8">
            <p className="text-xs sm:text-sm text-[#808080]">
              {t("showingCount")} {filteredPosts.length} {t("articlesWord")}
            </p>

            <div className="flex items-center gap-1 rounded-xl border border-[#262626] bg-[#121212] p-1">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-lg p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-[#ea580c] text-white"
                    : "text-[#808080] hover:text-white"
                }`}
                aria-label="List view"
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
                aria-label="Grid view"
              >
                <GridIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {currentPosts.length === 0 ? (
            <div className="py-24 text-center rounded-2xl border border-dashed border-[#262626] bg-[#121212]/40 p-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#141414] text-[#666]">
                <SearchIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white">{t("noResultsTitle")}</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#777]">
                {t("noResultsDesc")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  handleCategoryChange("all");
                }}
                className="mt-6 rounded-xl bg-[#ea580c] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#c2410c]"
              >
                {t("resetFilters")}
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map(({ original }) => (
                <BlogCard key={original.id} post={original} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {currentPosts.map(({ original }) => (
                <ListBlogCard key={original.id} post={original} />
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
