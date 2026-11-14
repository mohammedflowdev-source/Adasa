import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ClockIcon, ArrowRightIcon, ArrowLeftIcon, XTwitterIcon, LinkedinIcon, CheckCircleIcon } from "../Components/Icons";
import BlogCard from "../Components/BlogCard";
import Newsletter from "../Components/Newsletter";
import { useLanguage } from "../context/useLanguage";
import data from "../data.json";

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const { t, localizePost, isRTL } = useLanguage();

  const rawPost = data.posts.find((p) => p.slug === slug) || data.posts.find((p) => String(p.id) === slug);

  if (!rawPost) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white">{t("postNotFoundTitle")}</h2>
        <p className="mt-2 text-sm text-[#888]">{t("postNotFoundDesc")}</p>
        <Link
          to="/blog"
          className="mt-6 rounded-xl bg-[#ea580c] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c2410c]"
        >
          {t("backToArticles")}
        </Link>
      </div>
    );
  }

  const post = localizePost(rawPost);

  const relatedPosts = data.posts
    .filter((p) => p.id !== rawPost.id && p.category === rawPost.category)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const renderContent = (content) => {
    const sections = content.split("\n\n");
    return sections.map((sec, idx) => {
      if (sec.startsWith("## ")) {
        return (
          <h2
            key={idx}
            className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 pb-2 border-b border-[#222]"
          >
            {sec.replace("## ", "")}
          </h2>
        );
      }
      return (
        <p key={idx} className="text-base sm:text-lg leading-relaxed text-[#c2c2c2] mb-6">
          {sec}
        </p>
      );
    });
  };

  return (
    <article className="bg-[#0a0a0a] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors mb-8"
        >
          {isRTL ? <ArrowRightIcon className="w-4 h-4" /> : <ArrowLeftIcon className="w-4 h-4" />}
          <span>{t("backToArticles")}</span>
        </button>

        <div className="flex flex-wrap items-center gap-3 text-xs text-[#888] mb-6">
          <Link
            to={`/blog?category=${encodeURIComponent(rawPost.category)}`}
            className="rounded-full border border-orange-900/50 bg-orange-950/30 px-3.5 py-1 font-semibold text-orange-400 hover:bg-orange-950/60 transition-colors"
          >
            {post.category}
          </Link>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="w-3.5 h-3.5 text-[#666]" />
            {post.readTime}
          </span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className={`text-lg sm:text-xl text-[#9e9e9e] leading-relaxed mb-8 ${isRTL ? "border-r-4 pr-4" : "border-l-4 pl-4"} border-[#ea580c]`}>
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border border-[#222] bg-[#121212] mb-10">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-500/30"
            />
            <div>
              <div className="text-sm font-bold text-white">{post.author.name}</div>
              <div className="text-xs text-orange-500 font-medium">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-[#888] hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all"
              aria-label="Share on X"
            >
              <XTwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-[#888] hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all"
              aria-label="Share on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 rounded-xl border border-[#262626] bg-[#161616] px-3 py-2 text-xs font-semibold text-[#aaa] hover:bg-[#222] hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{t("copied")}</span>
                </>
              ) : (
                <span>{t("copyLink")}</span>
              )}
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#262626] bg-[#141414] mb-12 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-[#1f1f1f]">
            <h4 className="text-xs font-semibold text-[#888] mb-3">{t("tagsLabel")}</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?category=${encodeURIComponent(rawPost.category)}`}
                  className="rounded-lg border border-[#262626] bg-[#141414] px-3 py-1.5 text-xs text-[#aaa] hover:border-[#ea580c] hover:text-white transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {relatedPosts.length > 0 && (
        <section className="border-t border-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{t("relatedArticlesTitle")}</h3>
              <p className="mt-1 text-xs sm:text-sm text-[#888]">{t("relatedArticlesDesc", post.category)}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <BlogCard key={rel.id} post={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </article>
  );
}
