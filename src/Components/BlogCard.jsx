import { Link } from "react-router-dom";
import { ClockIcon, ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import { useLanguage } from "../context/useLanguage";

export default function BlogCard({ post: rawPost }) {
  const { localizePost, isRTL } = useLanguage();
  const post = localizePost(rawPost);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#222222] bg-[#121212] transition-all duration-300 hover:border-[#383838] hover:shadow-xl hover:shadow-black/50">
      <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        <span className="absolute top-3.5 right-3.5 rounded-full border border-white/10 bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-white shadow-sm">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-[#808080] mb-3">
          <ClockIcon className="w-3.5 h-3.5 text-[#666]" />
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-lg font-bold text-white leading-snug transition-colors duration-200 group-hover:text-[#ea580c] line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#959595] line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-[#1f1f1f]">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
            />
            <div>
              <p className="text-xs font-semibold text-white leading-none">
                {post.author.name}
              </p>
              <p className="text-[11px] text-[#737373] mt-1">
                {post.author.role}
              </p>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c1c1c] text-[#ea580c] transition-all duration-200 hover:bg-[#ea580c] hover:text-white"
            aria-label="Read article"
          >
            {isRTL ? <ArrowLeftIcon className="w-4 h-4" /> : <ArrowRightIcon className="w-4 h-4" />}
          </Link>
        </div>
      </div>
    </article>
  );
}
