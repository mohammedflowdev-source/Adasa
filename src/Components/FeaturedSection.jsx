import { Link } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
import data from "../data.json";

export default function FeaturedSection() {
  const featuredPosts = data.posts.filter((p) => p.featured).slice(0, 3);

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
              <span>مميز</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              مقالات مختارة
            </h2>
            <p className="mt-2 text-sm text-[#888]">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-xl bg-[#ea580c] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#c2410c] hover:shadow-lg hover:shadow-orange-950/40 self-start sm:self-auto"
          >
            عرض الكل &gt;
          </Link>
        </div>

        <div className="space-y-6">
          {featuredPosts.map((post) => (
            <FeaturedCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
