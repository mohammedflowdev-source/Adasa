import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { ArrowLeftIcon } from "./Icons";
import data from "../data.json";

export default function LatestSection() {
  const latestPosts = data.posts.slice(3, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/50 bg-orange-950/30 px-3.5 py-1 text-xs font-semibold text-orange-400 mb-4">
              <span className="flex gap-1 items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              </span>
              <span>الأحدث</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              أحدث المقالات
            </h2>
            <p className="mt-2 text-sm text-[#888]">
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors self-start sm:self-auto"
          >
            <span>عرض جميع المقالات</span>
            <ArrowLeftIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
