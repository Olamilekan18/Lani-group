import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  TrendingUp,
  Heart,
  GraduationCap,
  Cpu,
  Building2,
  ShoppingBag,
  Utensils,
  Sprout,
  Palette,
  BookOpen,
  ArrowUpRight,
  Quote,
  Globe,
  Users,
  Briefcase,
  Award,
} from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

gsap.registerPlugin(ScrollTrigger);

/* ───── data ───── */
const thematicAreas = [
  {
    icon: TrendingUp,
    title: 'Economic Empowerment & Enterprise Development',
    description:
      'We drive job creation, entrepreneurship, and local economic development through capacity-building, business incubation, and access to markets and finance.',
    accent: '#2E2D70',
  },
  {
    icon: Heart,
    title: 'Social Impact & Community Development',
    description:
      'We champion equity, inclusion, and wellbeing. Our programs focus on vulnerable populations, promoting gender equality, health, education, and food security.',
    accent: '#C9A84C',
  },
  {
    icon: GraduationCap,
    title: 'Education, Skills & Human Capital',
    description:
      'From foundational learning to advanced professional development, we invest in people through tailored training, mentorship, and digital skills programs.',
    accent: '#2E2D70',
  },
  {
    icon: Cpu,
    title: 'Technology & Sustainability Innovation',
    description:
      'We leverage technology to accelerate progress. Through our innovation platforms, we support startups and green solutions that address local challenges.',
    accent: '#C9A84C',
  },
];

const subsidiaries = [
  {
    icon: Heart,
    name: 'LANI Foundation',
    sector: 'Philanthropy',
    description: 'Supporting vulnerable groups through impactful programs in education, health, livelihood, and social reintegration.',
    url: 'https://lanifoundation.org',
  },
  {
    icon: Building2,
    name: 'LANI Consulting',
    sector: 'Professional Services',
    description: 'Expert advisory and capacity-building solutions that drive growth and strengthen institutions across Africa.',
    url: 'https://laniconsulting.ng',
  },
  {
    icon: ShoppingBag,
    name: 'LANI Merchandising',
    sector: 'Trade & Commerce',
    description: 'End-to-end sourcing of top-tier food and beverage products with bespoke travel and tourism experiences.',
    url: 'https://lanimerchandising.com',
  },
  {
    icon: Utensils,
    name: 'Sehai Foods',
    sector: 'Food Processing',
    description: 'Premium, all-natural honey and bee products sourced from African cooperatives.',
    url: 'https://sehaifoods.com',
  },
  {
    icon: Sprout,
    name: 'Geyiba Agro-Development',
    sector: 'Agriculture',
    description: 'Transforming Nigeria\'s agricultural landscape through sustainable farming practices.',
    url: '#',
  },
  {
    icon: BookOpen,
    name: 'Axiom Learning Solutions',
    sector: 'Learning & Development',
    description: 'Comprehensive learning and development programs enhancing educational outcomes across Nigeria.',
    url: 'https://axiomlearn.com',
  },
  {
    icon: Palette,
    name: 'LANI Creatives',
    sector: 'Creatives',
    description: 'Promoting contemporary local art and showcasing the rich cultural diversity of African artists.',
    url: '#',
  },
];

const stats = [
  { icon: Building2, value: '7+', label: 'Companies' },
  { icon: Globe, value: '6', label: 'Sectors' },
  { icon: Award, value: '10+', label: 'Years of Impact' },
  { icon: Users, value: '1000+', label: 'Lives Touched' },
];

const partnerLogos = [
  { src: '/images/logos/boi.png', alt: 'Bank of Industry' },
  { src: '/images/logos/rbs.png', alt: 'Royal Bank of Scotland' },
  { src: '/images/logos/iita.png', alt: 'IITA' },
  { src: '/images/logos/mof.png', alt: 'Federal Ministry of Finance' },
  { src: '/images/logos/cmd.png', alt: 'Centre for Management Development' },
  { src: '/images/logos/tetfund.png', alt: 'Tertiary Education Trust Fund (TETFund)' },
  { src: '/images/logos/ncdc.png', alt: 'Nigeria Centre for Disease Control (NCDC)' },
  { src: '/images/logos/stanbic.png', alt: 'Stanbic IBTC' },
  { src: '/images/logos/agri_brand.png', alt: 'Agriculture Brand' },
  { src: '/images/logos/thrive_agric.png', alt: 'Thrive Agric' },
  { src: '/images/sos-children.webp', alt: 'SOS Children\'s Villages' },
];

/* ───── Component ───── */
const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
        .fromTo('.hero-title', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .fromTo('.hero-subtitle', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background: clean with subtle brand accents */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-50 opacity-60" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-brand-50/40" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/5" />
        </div>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#2E2D70 1px, transparent 1px), linear-gradient(90deg, #2E2D70 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8" style={{opacity:0}}>
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-semibold text-brand tracking-wider uppercase">
                Africa's Forward-Thinking Conglomerate
              </span>
            </div>

            <h1 className="hero-title font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] text-text-primary" style={{opacity:0}}>
              Building Solutions That{' '}
              <span className="gradient-text-brand">Shape Lives</span> &{' '}
              <span className="gradient-text-brand">Inspire Growth</span>
            </h1>

            <p className="hero-subtitle mt-7 text-lg md:text-xl text-text-muted max-w-xl leading-relaxed" style={{opacity:0}}>
              LANI Group is a dynamic African enterprise group committed to sustainable development
              through strategic investments and solutions across key sectors.
            </p>

            <div className="hero-buttons mt-10 flex flex-wrap items-center gap-4" style={{opacity:0}}>
              <Link to="/about" className="btn-primary gap-2">
                Discover Our Impact
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary gap-2">
                Partner With Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>


        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="relative bg-brand-gradient py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} animation="fade-up" delay={i * 0.08}>
                <div className="text-center">
                  <stat.icon size={24} className="mx-auto text-white/40 mb-3" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <p className="mt-1 text-sm text-white/50 font-medium">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHO WE ARE ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal animation="fade-right">
              <div>
                <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
                  Who We Are
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-text-primary leading-tight">
                  A Dynamic African{' '}
                  <span className="gradient-text-brand">Enterprise Group</span>
                </h2>
                <p className="mt-6 text-text-secondary leading-relaxed">
                  LANI Group operates through a diverse portfolio of subsidiaries focused on
                  management consulting, food systems, human capital development, travel and culture,
                  technology incubation, and creative enterprise. The Group exists to unlock potential,
                  empower communities, and foster resilient systems that drive inclusive growth across Africa.
                </p>
                <p className="mt-4 text-text-muted leading-relaxed text-sm">
                  Through its expanding footprint and strategic partnerships with governments, private
                  sector actors, and development agencies, LANI Group continues to advance
                  impact-driven initiatives in agriculture, education, migration, climate resilience,
                  social inclusion, and entrepreneurship.
                </p>
                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all group"
                >
                  Learn more about us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </SectionReveal>

            {/* Image placeholder area */}
            <SectionReveal animation="fade-left" delay={0.15}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-brand-50 aspect-[4/3] flex items-center justify-center border border-brand-100">
                  <img
                    src="/images/lani_team_group_clear.jpg"
                    alt="Lani Group team"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand/5 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gold/10 -z-10" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOUR THEMATIC AREAS ═══════════════ */}
      <section className="py-24 bg-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
                What We Do
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-text-primary">
                Our Four Thematic Areas
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto">
                Strategic pillars that guide our impact across the African continent
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {thematicAreas.map((area, index) => (
              <SectionReveal key={area.title} animation="fade-up" delay={index * 0.1}>
                <div className="card p-8 md:p-10 h-full group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${area.accent}10` }}
                  >
                    <area.icon size={24} style={{ color: area.accent }} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPRESSION & COMPANIES ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
                Our Portfolio
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-text-primary">
                Expression & Companies
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto">
                A diverse portfolio of subsidiaries driving impact across Africa
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {subsidiaries.map((company, index) => (
              <SectionReveal key={company.name} animation="fade-up" delay={index * 0.07}>
                <a href={company.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <div className="card p-6 h-full flex flex-col">
                    {/* Top accent line */}
                    <div className="w-8 h-1 rounded-full bg-brand mb-5 group-hover:w-12 transition-all duration-300" />

                    <p className="text-[11px] text-brand font-bold uppercase tracking-[0.15em] mb-2">
                      {company.sector}
                    </p>

                    <h3 className="font-semibold text-text-primary text-base mb-2 group-hover:text-brand transition-colors">
                      {company.name}
                    </h3>

                    <p className="text-xs text-text-muted leading-relaxed flex-1">
                      {company.description}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-xs text-brand font-semibold group-hover:gap-2.5 transition-all">
                      Learn More
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUSTED BY ═══════════════ */}
      <section className="py-20 bg-subtle border-y border-surface-200">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <SectionReveal>
            <div className="text-center">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
                Partnership & Trust
              </span>
              <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-text-primary">
                Those Who Trust Us
              </h2>
              <div className="w-12 h-[3px] bg-gold mx-auto mt-4" />
            </div>
          </SectionReveal>
        </div>

        <SectionReveal animation="fade-up" delay={0.1}>
          <div className="relative w-full overflow-hidden py-4">
            {/* Fade gradient masks on left and right edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fafbff] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fafbff] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-16 md:gap-24 items-center">
              {/* First set of logos */}
              {partnerLogos.map((logo, i) => (
                <div key={`logo-1-${i}`} className="h-20 md:h-24 flex items-center justify-center shrink-0">
                  <img src={logo.src} alt={logo.alt} className="max-h-14 md:max-h-18 max-w-[200px] object-contain" />
                </div>
              ))}
              {/* Second duplicated set of logos for seamless infinite loop */}
              {partnerLogos.map((logo, i) => (
                <div key={`logo-2-${i}`} className="h-20 md:h-24 flex items-center justify-center shrink-0">
                  <img src={logo.src} alt={logo.alt} className="max-h-14 md:max-h-18 max-w-[200px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ═══════════════ CEO QUOTE ═══════════════ */}
      <section className="py-24 bg-subtle relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionReveal animation="scale">
            <Quote size={40} className="mx-auto text-brand/15 mb-8" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-[34px] font-medium text-text-primary leading-relaxed italic">
              "At LANI Group, we don't just build businesses — we build solutions that shape lives,
              inspire growth, and move Africa forward."
            </blockquote>
            <div className="mt-10 flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-brand/10">
                <img
                  src="/images/ani-bassey.jfif"
                  alt="Ani Charles Bassey-Eyo"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-text-primary text-sm">Ani Charles Bassey-Eyo</p>
              <p className="text-xs text-gold-dark font-semibold tracking-wider uppercase">
                Managing Director / CEO, LANI Group
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ PARTNER CTA ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
              Get Started
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-text-primary">
              Ready to Make an Impact?
            </h2>
            <p className="mt-6 text-text-muted max-w-xl mx-auto leading-relaxed">
              Whether it's strategy, training, or tech support, LANI Group is your partner in driving
              meaningful change across Africa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary gap-2">
                Contact Us Today
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-secondary gap-2">
                Learn More
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Home;
