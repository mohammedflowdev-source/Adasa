import { useOutletContext, Link } from "react-router-dom";
import {
  UsersIcon,
  ArticleIcon,
  PenIcon,
  CategoryFolderIcon,
  TargetIcon,
  LightningIcon,
  CommunityIcon,
  RefreshIcon,
  CheckCircleIcon,
  LinkedinIcon,
  GithubIcon,
  XTwitterIcon,
  MailIcon,
} from "../Components/Icons";
import data from "../data.json";

export default function About() {
  const { onOpenContact } = useOutletContext() || {};

  const authorsMap = {};
  data.posts.forEach((p) => {
    if (!authorsMap[p.author.name]) {
      authorsMap[p.author.name] = p.author;
    }
  });
  const authors = Object.values(authorsMap);

  const values = [
    {
      title: "الجودة أولاً",
      desc: "محتوى مدروس ومكتوب بخبرة",
      icon: <TargetIcon className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "تركيز عملي",
      desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
      icon: <LightningIcon className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "المجتمع",
      desc: "تعلم مع آلاف المصورين",
      icon: <CommunityIcon className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "دائماً محدث",
      desc: "أحدث الاتجاهات وأفضل الممارسات",
      icon: <RefreshIcon className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative overflow-hidden pt-20 pb-24 text-center border-b border-[#1a1a1a]">
        <div className="absolute top-[20%] -left-36 w-[550px] h-[550px] rounded-full ambient-glow-left blur-[100px] pointer-events-none" />
        <div className="absolute top-[48%] -right-40 w-[600px] h-[600px] rounded-full ambient-glow-right blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/50 bg-orange-950/30 px-3.5 py-1 text-xs font-semibold text-orange-400 mb-6 backdrop-blur-sm">
            <span className="flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            </span>
            <span>من نحن</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            مهمتنا هي{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              الإعلام والإلهام
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#a1a1a1] max-w-3xl mx-auto leading-relaxed">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
                <UsersIcon className="w-7 h-7" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
                +2 مليون
              </div>
              <div className="mt-1 text-xs text-[#808080]">
                قارئ شهرياً
              </div>
            </div>

            <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
                <ArticleIcon className="w-7 h-7" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
                +500
              </div>
              <div className="mt-1 text-xs text-[#808080]">
                مقالة منشورة
              </div>
            </div>

            <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
                <PenIcon className="w-7 h-7" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
                +50
              </div>
              <div className="mt-1 text-xs text-[#808080]">
                كاتب خبير
              </div>
            </div>

            <div className="rounded-2xl border border-[#222] bg-[#121212]/80 p-6 backdrop-blur-md">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-orange-500">
                <CategoryFolderIcon className="w-7 h-7" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
                +15
              </div>
              <div className="mt-1 text-xs text-[#808080]">
                تصنيف
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              <span>قيمنا</span>
              <span className="text-[#ea580c]">|</span>
            </h2>
            <p className="mt-2 text-sm text-[#888]">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-8 rounded-2xl border border-[#222] bg-[#121212] text-center transition-all hover:border-[#333]"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-950/20 border border-orange-900/30">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#888] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/50 bg-orange-950/30 px-3.5 py-1 text-xs font-semibold text-orange-400 mb-4">
              <span className="flex gap-1 items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              </span>
              <span>فريقنا</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              تعرف على كتابنا
            </h2>
            <p className="mt-2 text-sm text-[#888] max-w-xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {authors.map((author, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-8 rounded-2xl border border-[#222] bg-[#121212] text-center transition-all duration-300 hover:border-[#383838] hover:shadow-xl hover:shadow-black/50 group"
              >
                <div className="relative mb-5">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-[#222] group-hover:ring-[#ea580c] transition-all"
                  />
                  <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-md">
                    <CheckCircleIcon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                  {author.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-orange-500">
                  {author.role}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <a
                    href="#linkedin"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#262626] bg-[#161616] text-[#777] hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#github"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#262626] bg-[#161616] text-[#777] hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#x"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#262626] bg-[#161616] text-[#777] hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white transition-all"
                    aria-label="X (Twitter)"
                  >
                    <XTwitterIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#f59e0b] p-10 sm:p-16 text-center text-white shadow-2xl shadow-orange-950/40">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            نحب أن نسمع منك، سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-neutral-900 active:scale-95 shadow-lg"
            >
              <MailIcon className="w-4 h-4 text-white" />
              <span>تواصل معنا</span>
            </button>

            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20 active:scale-95"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
