import { useState } from "react";
import { Link } from "react-router-dom";
import { XTwitterIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from "./Icons";

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    if (onSubscribe) onSubscribe(email);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="border-t border-[#1f1f1f] bg-[#080808] text-[#a3a3a3]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ea580c] text-white font-bold text-lg">
                ع
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">عدسة</span>
            </Link>

            <p className="text-sm leading-relaxed text-[#8a8a8a] max-w-sm">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://twitter.com/adasah"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#141414] border border-[#262626] text-[#8a8a8a] hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all"
                aria-label="X (Twitter)"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/adasah"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#141414] border border-[#262626] text-[#8a8a8a] hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/adasah"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#141414] border border-[#262626] text-[#8a8a8a] hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@adasah"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#141414] border border-[#262626] text-[#8a8a8a] hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#ea580c]"></span>
              <h4 className="text-sm font-semibold text-white">استكشف</h4>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#8a8a8a] hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#8a8a8a] hover:text-white transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#8a8a8a] hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#ea580c]"></span>
              <h4 className="text-sm font-semibold text-white">التصنيفات</h4>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/blog?category=إضاءة" className="text-[#8a8a8a] hover:text-white transition-colors">
                  إضاءة
                </Link>
              </li>
              <li>
                <Link to="/blog?category=بورتريه" className="text-[#8a8a8a] hover:text-white transition-colors">
                  بورتريه
                </Link>
              </li>
              <li>
                <Link to="/blog?category=مناظر طبيعية" className="text-[#8a8a8a] hover:text-white transition-colors">
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link to="/blog?category=تقنيات" className="text-[#8a8a8a] hover:text-white transition-colors">
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#ea580c]"></span>
              <h4 className="text-sm font-semibold text-white">ابق على اطلاع</h4>
            </div>
            <p className="text-xs text-[#8a8a8a] leading-relaxed">
              اشتراك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ادخل بريدك الإلكتروني"
                className="w-full rounded-xl border border-[#262626] bg-[#121212] px-4 py-3 text-sm text-white placeholder-[#555] focus:border-[#ea580c] focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#ea580c] py-3 text-sm font-semibold text-white hover:bg-[#c2410c] transition-all active:scale-[0.99]"
              >
                {subscribed ? "تم الاشتراك بنجاح!" : "اشترك"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1f1f1f] pt-8 text-xs text-[#666] sm:flex-row">
          <p>© 2026 عدسة، صنع بكل ❤️ جميع الحقوق محفوظة</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
