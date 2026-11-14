import { Link } from "react-router-dom";
import { ClockIcon, ArrowLeftIcon } from "./Icons";

export default function ListBlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#222222] bg-[#121212] transition-all duration-300 hover:border-[#383838] hover:shadow-xl hover:shadow-black/50">
      <div className="flex flex-col md:flex-row items-stretch">
        <Link
          to={`/blog/${post.slug}`}
          className="relative md:w-72 lg:w-80 shrink-0 aspect-[16/10] md:aspect-auto overflow-hidden bg-[#1a1a1a]"
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute top-3.5 right-3.5 rounded-full border border-white/10 bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-white shadow-sm md:hidden">
            {post.category}
          </span>
        </Link>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#808080] mb-2.5">
              <span className="hidden md:inline-block rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 font-medium text-orange-400">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-3.5 h-3.5 text-[#666]" />
                {post.readTime}
              </span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <Link to={`/blog/${post.slug}`}>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug transition-colors duration-200 group-hover:text-[#ea580c]">
                {post.title}
              </h3>
            </Link>

            <p className="mt-2 text-sm leading-relaxed text-[#959595] line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-5 pt-4 flex items-center justify-between border-t border-[#1f1f1f]">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10"
              />
              <div>
                <p className="text-xs font-semibold text-white">
                  {post.author.name}
                </p>
                <p className="text-[10px] text-[#737373]">
                  {post.author.role}
                </p>
              </div>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-orange-500 hover:text-orange-400"
            >
              <span>اقرأ المزيد</span>
              <ArrowLeftIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
