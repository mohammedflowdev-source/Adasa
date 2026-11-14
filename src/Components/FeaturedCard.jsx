import { Link } from "react-router-dom";
import { ClockIcon, ArrowLeftIcon } from "./Icons";

export default function FeaturedCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[#262626] bg-[#121212] transition-all duration-300 hover:border-[#383838] hover:shadow-2xl hover:shadow-orange-950/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#888] mb-4">
              <span className="rounded-full border border-orange-900/40 bg-orange-950/30 px-3 py-1 font-medium text-orange-400">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="w-3.5 h-3.5 text-[#666]" />
                {post.readTime}
              </span>
            </div>

            <Link to={`/blog/${post.slug}`}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#f97316] transition-colors group-hover:text-orange-400 leading-snug">
                {post.title}
              </h3>
            </Link>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#9e9e9e] line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1f1f1f] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-orange-500/30"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-[#737373]">
                  {post.date}
                </p>
              </div>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-orange-400"
            >
              <span>اقرأ المقال</span>
              <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-[#181818] order-1 lg:order-2"
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#121212]/30 lg:to-transparent" />
          <div className="absolute top-4 right-4 rounded-full bg-orange-600/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
            <span>★</span>
            <span>مميز</span>
          </div>
        </Link>
      </div>
    </article>
  );
}
