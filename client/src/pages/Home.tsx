import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Play,
  Quote,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";

type Track = "الكل" | "للمبتدئين" | "احترافي" | "تطبيقات عملية";

type Course = {
  title: string;
  category: Exclude<Track, "الكل">;
  level: string;
  duration: string;
  lessons: string;
  description: string;
  accent: string;
  icon: typeof Bot;
  badge?: string;
};

const navItems = [
  { label: "الرئيسية", id: "hero" },
  { label: "المسارات", id: "tracks" },
  { label: "لماذا نوفيا؟", id: "why" },
  { label: "قصص النجاح", id: "stories" },
];

const courses: Course[] = [
  {
    title: "هندسة البرومبتات",
    category: "للمبتدئين",
    level: "مبتدئ",
    duration: "4 أسابيع",
    lessons: "18 درساً",
    description: "حوّل أفكارك إلى نتائج دقيقة واحترافية مع نماذج الذكاء الاصطناعي.",
    accent: "lime",
    icon: Sparkles,
    badge: "الأكثر طلباً",
  },
  {
    title: "بناء المنتجات بالـ AI",
    category: "تطبيقات عملية",
    level: "متوسط",
    duration: "6 أسابيع",
    lessons: "24 درساً",
    description: "من الفكرة إلى منتج حيّ: ابنِ أدوات ذكية تحل مشاكل حقيقية.",
    accent: "violet",
    icon: Rocket,
  },
  {
    title: "البيانات والتعلم الآلي",
    category: "احترافي",
    level: "متقدم",
    duration: "8 أسابيع",
    lessons: "32 درساً",
    description: "أسّس نماذج تتعلم، تتوقع، وتكبر مع كل قرار جديد.",
    accent: "blue",
    icon: Network,
  },
  {
    title: "أتمتة الأعمال الذكية",
    category: "تطبيقات عملية",
    level: "متوسط",
    duration: "5 أسابيع",
    lessons: "20 درساً",
    description: "صمّم workflows تختصر الوقت وتضاعف أثر فريقك بدون تعقيد.",
    accent: "orange",
    icon: Zap,
  },
  {
    title: "أساسيات الذكاء الاصطناعي",
    category: "للمبتدئين",
    level: "مبتدئ",
    duration: "3 أسابيع",
    lessons: "12 درساً",
    description: "خريطة واضحة تفهم بها AI وتبدأ من المكان الصحيح بثقة.",
    accent: "cyan",
    icon: BrainCircuit,
  },
  {
    title: "استراتيجية AI للشركات",
    category: "احترافي",
    level: "متقدم",
    duration: "4 أسابيع",
    lessons: "16 درساً",
    description: "ابنِ roadmap ذكية لتحويل عملك من التجربة إلى النمو.",
    accent: "pink",
    icon: BarChart3,
  },
];

const faqs = [
  {
    q: "هل أحتاج إلى خلفية تقنية للبدء؟",
    a: "أبداً. صممنا مساراتنا لتأخذك من الصفر إلى التطبيق، مع أمثلة عربية عملية ومشاريع تبنيها خطوة بخطوة.",
  },
  {
    q: "كيف يتم التعلم داخل نوفيا؟",
    a: "دروس قصيرة، ورش مباشرة، مجتمع أسئلة، ومراجعات أسبوعية على مشاريعك. أنت لا تتعلم وحدك ولا تكتفي بالمشاهدة.",
  },
  {
    q: "هل أحصل على شهادة؟",
    a: "نعم. تحصل على شهادة إتمام رقمية موثقة بعد إنجاز المشروع النهائي لكل مسار.",
  },
  {
    q: "هل يمكنني التعلم بجانب عملي؟",
    a: "بكل تأكيد. صممنا التجربة لتحتاج من 3 إلى 5 ساعات أسبوعياً مع تسجيلات متاحة في أي وقت.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [track, setTrack] = useState<Track>("الكل");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visibleCourses = useMemo(
    () => (track === "الكل" ? courses : courses.filter((course) => course.category === track)),
    [track],
  );

  const handleJoin = () => {
    scrollToId("join");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setNotice("تم تسجيلك بنجاح — سنرسل لك التفاصيل قريباً.");
    setEmail("");
  };

  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden bg-[#070b12] text-white selection:bg-[#c9ff38] selection:text-[#0a0f15]">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container flex h-[76px] items-center justify-between gap-5">
          <button className="brand group" onClick={() => scrollToId("hero")} aria-label="نوفيا الرئيسية">
            <span className="brand-mark"><span>✦</span></span>
            <span className="brand-word">نوفيا<small>AI ACADEMY</small></span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="التنقل الرئيسي">
            {navItems.map((item, index) => (
              <button key={item.id} onClick={() => scrollToId(item.id)} className={`nav-link ${index === 0 ? "nav-link--active" : ""}`}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="nav-login" onClick={() => setNotice("سيتم تفعيل تسجيل الدخول قريباً.")}>تسجيل الدخول</button>
            <button className="button button--lime button--small" onClick={handleJoin}>ابدأ الآن <ArrowLeft size={16} /></button>
          </div>

          <button className="mobile-menu-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => { scrollToId(item.id); setMenuOpen(false); }}>{item.label}</button>
            ))}
            <button className="button button--lime button--small" onClick={() => { handleJoin(); setMenuOpen(false); }}>ابدأ الآن <ArrowLeft size={16} /></button>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="hero-section" style={{ "--hero-image": `url("${import.meta.env.BASE_URL}assets/nuvia-hero.jpg")` } as React.CSSProperties}>
          <div className="hero-art" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />
          <div className="container relative z-10 grid min-h-[710px] items-center gap-12 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-24">
            <div className="hero-copy animate-enter">
              <div className="eyebrow"><span className="eyebrow-dot" /> تعليم يصنع المستقبل</div>
              <h1>تعلم ما بعد<br /><span>المعتاد.</span></h1>
              <p className="hero-lead">أكاديمية عربية تعيد تعريف طريقة تعلّم الذكاء الاصطناعي — مسارات عملية، مجتمع ملهم، ومستقبل تبنيه بيديك.</p>
              <div className="hero-actions">
                <button className="button button--lime button--large" onClick={handleJoin}>اكتشف مسارك <ArrowLeft size={18} /></button>
                <button className="button button--ghost button--large" onClick={() => scrollToId("why")}><span className="play-icon"><Play size={13} fill="currentColor" /></span> شاهد كيف نعلّم</button>
              </div>
              <div className="hero-trust">
                <div className="avatar-stack" aria-hidden="true">
                  <span className="avatar avatar--a">س</span><span className="avatar avatar--b">م</span><span className="avatar avatar--c">ر</span><span className="avatar avatar--d">+4K</span>
                </div>
                <div><div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><span>انضم إلى 4,000+ متعلم طموح</span></div>
              </div>
            </div>

            <div className="hero-visual animate-float" aria-label="رحلة تعلم الذكاء الاصطناعي">
              <div className="visual-ring visual-ring--outer" />
              <div className="visual-ring visual-ring--inner" />
              <div className="visual-core"><BrainCircuit size={84} strokeWidth={1.2} /><span>AI</span></div>
              <div className="orbit-card orbit-card--top"><span className="orbit-icon orbit-icon--lime"><Sparkles size={17} /></span><span><b>إبداع</b><small>ابدأ من فكرة</small></span></div>
              <div className="orbit-card orbit-card--side"><span className="orbit-icon orbit-icon--violet"><Bot size={17} /></span><span><b>تطبيق</b><small>ابنِ شيئاً حقيقياً</small></span></div>
              <div className="orbit-card orbit-card--bottom"><span className="orbit-icon orbit-icon--blue"><BarChart3 size={17} /></span><span><b>أثر</b><small>كبر مع كل قرار</small></span></div>
              <span className="spark spark--one">✦</span><span className="spark spark--two">✦</span><span className="spark spark--three">✧</span>
            </div>
          </div>
          <div className="hero-bottom-line"><div className="container flex items-center justify-between gap-4"><span>01 / 04</span><div className="progress-line"><span /></div><button onClick={() => scrollToId("tracks")}>استكشف المسارات <ArrowUpLeft size={14} /></button></div></div>
        </section>

        <section className="metrics-section">
          <div className="container metrics-grid">
            <div className="metric"><strong>4,000<span>+</span></strong><span>متعلم حول العالم</span></div>
            <div className="metric"><strong>96<span>%</span></strong><span>نسبة إتمام المسارات</span></div>
            <div className="metric"><strong>32</strong><span>مشروعاً تطبيقياً</span></div>
            <div className="metric"><strong>4.9<span>/5</span></strong><span>تقييم مجتمعنا</span></div>
          </div>
        </section>

        <section id="tracks" className="section-light section-padding">
          <div className="container">
            <div className="section-heading flex-wrap">
              <div><span className="section-kicker">مسارات مصممة لك</span><h2>لا تتعلم الذكاء الاصطناعي.<br /><em>اصنع به.</em></h2></div>
              <p>اختر المسار الذي يناسبك وابدأ رحلة عملية تقودك من الفضول إلى القدرة.</p>
            </div>
            <div className="course-filters" role="tablist" aria-label="تصفية المسارات">
              {(["الكل", "للمبتدئين", "احترافي", "تطبيقات عملية"] as Track[]).map((item) => <button key={item} className={track === item ? "filter-pill filter-pill--active" : "filter-pill"} onClick={() => setTrack(item)}>{item}</button>)}
            </div>
            <div className="course-grid">
              {visibleCourses.map((course, index) => {
                const Icon = course.icon;
                return <article className={`course-card course-card--${course.accent}`} key={course.title} style={{ animationDelay: `${index * 60}ms` }}>
                  {course.badge && <span className="course-badge">{course.badge}</span>}
                  <div className="course-icon"><Icon size={21} /></div>
                  <div className="course-meta"><span>{course.category}</span><span>•</span><span>{course.level}</span></div>
                  <h3>{course.title}</h3><p>{course.description}</p>
                  <div className="course-footer"><span><Clock3 size={14} /> {course.duration}</span><span><BookOpen size={14} /> {course.lessons}</span><button onClick={() => setNotice(`تم اختيار مسار ${course.title} — سنرسل لك التفاصيل.`)} aria-label={`اكتشف مسار ${course.title}`}><ArrowUpLeft size={17} /></button></div>
                </article>;
              })}
            </div>
            <div className="center-action"><button className="button button--dark button--medium" onClick={() => setTrack("الكل")}>عرض كل المسارات <ArrowLeft size={17} /></button></div>
          </div>
        </section>

        <section id="why" className="section-dark section-padding why-section">
          <div className="section-noise" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="section-heading section-heading--dark flex-wrap"><div><span className="section-kicker section-kicker--lime">تجربة مختلفة تماماً</span><h2>التعلم الذي<br /><em>يشبهك.</em></h2></div><p>لأن مستقبلك لا يحتاج دورة أخرى. يحتاج مساحة تنمو فيها، وتطبيقاً يثبت ما تعرفه.</p></div>
            <div className="why-layout">
              <div className="why-feature"><span className="feature-number">01</span><div className="feature-icon"><Layers3 size={26} /></div><h3>من المعرفة إلى القدرة</h3><p>لا نغرقك في النظريات. كل مفهوم يتحول إلى تجربة، وكل تجربة إلى مشروع موجود في ملف أعمالك.</p><button onClick={() => setNotice("قصة نوفيا تبدأ من التطبيق، دائماً.")}>اكتشف منهجنا <ArrowLeft size={16} /></button></div>
              <div className="why-list">
                <div className="why-item"><div className="why-item-icon"><Users size={20} /></div><div><h3>مجتمع يشبه طموحك</h3><p>تعلّم مع أشخاص يسألون، يبنون، ويشاركونك الطريق.</p></div><span className="why-arrow">↗</span></div>
                <div className="why-item"><div className="why-item-icon"><ShieldCheck size={20} /></div><div><h3>خبراء من قلب الصناعة</h3><p>مدربون يعملون في المجال ويعرفون ما يحتاجه السوق اليوم.</p></div><span className="why-arrow">↗</span></div>
                <div className="why-item"><div className="why-item-icon"><GraduationCap size={20} /></div><div><h3>تقدم يبقى معك</h3><p>إيقاع مرن، وصول دائم، ومسار واضح من أول خطوة.</p></div><span className="why-arrow">↗</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className="section-light section-padding stories-section">
          <div className="container">
            <div className="section-heading flex-wrap"><div><span className="section-kicker">صوت المجتمع</span><h2>قصص بدأت<br /><em>بخطوة.</em></h2></div><div className="quote-mark">“</div></div>
            <div className="stories-grid">
              <article className="story-card story-card--featured"><div className="story-top"><span className="story-avatar story-avatar--salma">س</span><div><b>سلمى ع.</b><span>مؤسسة منتج رقمي</span></div><Linkedin size={16} /></div><p>“دخلت نوفيا وأنا أبحث عن طريقة أفهم بها AI. خرجت وأنا أبني به منتجي الأول — الفرق كان في التطبيق، وفي الناس حولي.”</p><div className="story-result"><strong>+180%</strong><span>نمو في الإنتاجية</span></div></article>
              <article className="story-card"><div className="story-top"><span className="story-avatar story-avatar--omar">ع</span><div><b>عمر ن.</b><span>مصمم تجربة</span></div><Linkedin size={16} /></div><p>“أخيراً مكان يشرح الذكاء الاصطناعي بلغة واضحة، بدون تعقيد وبأمثلة أقدر أستخدمها غداً.”</p><div className="story-tags"><span>Prompt Design</span><span>+ مشروعين</span></div></article>
              <article className="story-card"><div className="story-top"><span className="story-avatar story-avatar--rana">ر</span><div><b>رنا ك.</b><span>مديرة تسويق</span></div><Linkedin size={16} /></div><p>“المجتمع وحده يستحق التجربة. كل سؤال له إجابة، وكل إنجاز له شخص يحتفل به معك.”</p><div className="story-tags"><span>AI Strategy</span><span>4.9/5</span></div></article>
            </div>
          </div>
        </section>

        <section id="join" className="join-section section-padding">
          <div className="container join-card"><div className="join-glow" /><div className="join-copy"><span className="section-kicker section-kicker--lime">خطوتك الأولى تبدأ هنا</span><h2>جاهز تصنع<br /><em>المستقبل؟</em></h2><p>اترك بريدك لنرسل لك خارطة البداية وأقرب ورشة مباشرة.</p></div><form className="join-form" onSubmit={handleSubmit}><label htmlFor="email">البريد الإلكتروني</label><div className="join-input"><Mail size={18} /><input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required /><button type="submit" aria-label="إرسال البريد"><Send size={17} /></button></div><small>لا رسائل مزعجة. فقط أفكار مفيدة وإلهام أسبوعي.</small></form></div>
        </section>

        <section className="faq-section section-padding">
          <div className="container faq-layout"><div><span className="section-kicker">أسئلة شائعة</span><h2>كل ما يدور<br /><em>في بالك.</em></h2><p>لم تجد إجابتك؟ <button onClick={() => setNotice("تواصل معنا على hello@nuvia.ai")}>تحدث مع فريقنا <ArrowUpLeft size={15} /></button></p></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${activeFaq === index ? "faq-item--open" : ""}`} key={faq.q}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>{faq.q}</span><ChevronDown size={18} /></button>{activeFaq === index && <p>{faq.a}</p>}</div>)}</div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><button className="brand" onClick={() => scrollToId("hero")}><span className="brand-mark"><span>✦</span></span><span className="brand-word">نوفيا<small>AI ACADEMY</small></span></button><p>نعلّم اليوم ما سيبني غداً.</p></div><div className="footer-links"><div><b>استكشف</b><button onClick={() => scrollToId("tracks")}>المسارات</button><button onClick={() => scrollToId("why")}>منهجنا</button><button onClick={() => scrollToId("stories")}>قصص النجاح</button></div><div><b>تواصل</b><button onClick={() => setNotice("hello@nuvia.ai")}>hello@nuvia.ai</button><button onClick={() => setNotice("الرياض، المملكة العربية السعودية")}>الرياض، السعودية</button><div className="socials"><button onClick={() => setNotice("LinkedIn قريباً")}><Linkedin size={16} /></button><button onClick={() => setNotice("YouTube قريباً")}><Youtube size={16} /></button></div></div></div></div><div className="footer-bottom"><span>© 2025 Nuvia AI Academy. جميع الحقوق محفوظة.</span><span>صُنع بفضول <Sparkles size={13} /></span></div></div></footer>

      {notice && <div className="notice" role="status"><CheckCircle2 size={18} /><span>{notice}</span><button onClick={() => setNotice("")}><X size={15} /></button></div>}
    </div>
  );
}
