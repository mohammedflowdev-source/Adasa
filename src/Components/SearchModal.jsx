import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon, CloseIcon, ClockIcon } from "./Icons";
import data from "../data.json";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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

  const results = query.trim()
    ? data.posts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.author.name.toLowerCase().includes(query.toLowerCase())
      )
    : data.posts.slice(0, 5);

  const handleSelect = (slug) => {
    onClose();
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 sm:pt-28">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#262626] bg-[#121212] shadow-2xl">
        <div className="flex items-center border-b border-[#262626] px-4 py-3">
          <SearchIcon className="w-5 h-5 text-orange-500 ml-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث في جميع المقالات، التصنيفات، الكتاب..."
            className="flex-1 bg-transparent text-sm text-white placeholder-[#666] outline-none"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs text-[#666] hover:text-white px-2"
            >
              مسح
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-[#888] hover:bg-[#1f1f1f] hover:text-white transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-3 divide-y divide-[#1f1f1f]">
          <div className="px-3 py-2 text-xs font-semibold text-[#666]">
            {query.trim() ? `نتائج البحث (${results.length})` : "مقالات مقترحة"}
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#777]">
              لا توجد مقالات مطابقة لـ "{query}"
            </div>
          ) : (
            results.map((post) => (
              <div
                key={post.id}
                onClick={() => handleSelect(post.slug)}
                className="flex items-center justify-between gap-4 p-3 rounded-xl hover:bg-[#1a1a1a] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors truncate">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-[#888]">
                      <span className="text-orange-500 font-medium">{post.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-[#666] group-hover:text-orange-400">
                  اقرأ ←
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
