import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

export default function Pagination({ pages, currentPage, setCurrentPage, onPageChange }) {
  if (pages <= 1) return null;

  const handlePage = (page) => {
    if (page < 1 || page > pages) return;
    setCurrentPage(page);
    if (onPageChange) onPageChange();
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(pages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < pages - 1) {
      range.push("...");
    }
    range.unshift(1);
    if (pages > 1) {
      range.push(pages);
    }
    return range;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mx-auto mt-14 flex flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#141414] text-[#808080] transition-colors hover:border-[#383838] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
          aria-label="الصفحة السابقة"
        >
          <ArrowRightIcon className="w-4 h-4" />
        </button>

        {visiblePages.map((page, idx) => {
          if (page === "...") {
            return (
              <span key={`dots-${idx}`} className="flex h-10 w-8 items-center justify-center text-xs text-[#555]">
                ...
              </span>
            );
          }
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePage(page)}
              className={`h-10 w-10 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#ea580c] text-white shadow-md shadow-orange-950/40"
                  : "border border-[#262626] bg-[#141414] text-[#808080] hover:border-[#383838] hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage === pages}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#141414] text-[#808080] transition-colors hover:border-[#383838] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
          aria-label="الصفحة التالية"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-[#737373]">
        صفحة {currentPage} من {pages}
      </p>
    </div>
  );
}
