import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Eye,
  Leaf,
  HandHeart,
  Handshake,
  GraduationCap,
  HeartPulse,
  Users,
  Landmark,
  ArrowRight,
  X,
  Download,
} from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

gsap.registerPlugin(ScrollTrigger);

/* ───── Data ───── */
const csrPillars = [
  { icon: GraduationCap, title: 'Education & Youth Development', description: 'Supporting learning, skills-building, and mentorship for the next generation.' },
  { icon: HeartPulse, title: 'Health & Wellbeing', description: 'Promoting access to healthcare, nutrition, and mental wellness initiatives.' },
  { icon: Users, title: 'Community Empowerment', description: 'Investing in grassroots programs that enable economic inclusion and resilience.' },
  { icon: Landmark, title: 'Cultural Preservation', description: 'Celebrating and preserving Africa\'s rich heritage through arts and cultural advocacy.' },
];

const focusAreas = [
  {
    title: 'Environmental Stewardship',
    image: '/images/bees.webp',
    description: 'Integrating eco-conscious practices across all operations and subsidiaries.'
  },
  {
    title: 'Economic Empowerment',
    image: '/images/economic empowerement.webp',
    description: 'Creating sustainable livelihoods and building economic resilience in communities.'
  },
  {
    title: 'Sustainable Partnerships',
    image: '/images/partnership.webp',
    description: 'Collaborating with public and private stakeholders for long-term impact.'
  },
];

const leadershipTeam = [
  {
    name: 'Ani Bassey-Eyo',
    title: 'Chief Executive Officer',
    initials: 'AB',
    image: '/images/ani-bassey.jfif',
    bio: 'Ani Charles Bassey-Eyo is the Chief Executive Officer (CEO) of LANI Group, where he provides strategic leadership across all subsidiaries, spanning consulting, merchandising, food processing, technology, travel, and philanthropy. With over 20 years of experience in finance, management consulting, and corporate strategy, Ani brings deep expertise in business transformation, sustainability advisory, and market systems development.\n\nPrior to founding LANI Group, he worked in finance, treasury, and advisory roles across leading multinational and regional institutions. He holds a BSc in Accounting and Finance from the University of Hull, and pursued postgraduate studies in International Tax Law at Queen Mary and Westfield College, University of London. Ani is a Chartered Accountant and Corporate Treasurer, and a fellow or associate of ACCA, ICAN, CITN, and ACT (UK).\n\nHe is passionate about building resilient African enterprises, advancing sustainable development, and promoting youth empowerment across the continent.',
  },
  {
    name: 'Osato Viola Oguntosin',
    title: 'Head, Corporate Services',
    initials: 'OV',
    image: '/images/osato.webp',
    bio: 'Osato Viola Oguntosin is the Head of Corporate Services at Lani Consulting Limited, a member of the LANI Group, where she oversees business operations, human resources, and administrative functions. With over 10 years of experience spanning operations management, HR management, procurement, and strategic planning, Osato brings proven expertise in process optimization, compliance, and workforce development.\n\nPrior to joining LANI Group, she held leadership roles at Southgate Technologies Limited, where she led corporate operations, supply chain management, and human resource initiatives. Osato holds a Bachelor of Laws (LLB) from the University of Benin and a Barrister-at-Law (BL) from the Nigerian Law School and is an Associate Member of the Chartered Institute of Personnel Management (ACIPM).\n\nShe is passionate about building efficient systems, empowering people, and driving organizational excellence.',
  },
  {
    name: 'Olaniyi Omole',
    title: 'Deputy Consulting Lead',
    initials: 'OO',
    image: '/images/niyi.webp',
    objectPosition: 'object-top',
    bio: 'Olaniyi Omole is the Head of Training Services at Lani Consulting Limited, where he leads and coordinates training design, delivery, and quality assurance across the Group. In this role, he oversees the development of entrepreneurship, employability, and capacity-building programmes; integrates technology to enhance training efficiency and data intelligence; and ensures governance, consistency, and impact across all training expressions within the organisation.\n\nWith over 15 years of professional experience, Olaniyi brings strong expertise in curriculum and instructional design, training operations management, stakeholder coordination, and programme scaling. He has a proven track record in developing and managing end-to-end training pipelines—from concept development and facilitation to assessment, reporting, and continuous improvement—while aligning programmes with organisational strategy and client objectives.\n\nHe holds a B.Sc. (Hons) in Political Science and a Diploma in Public Administration, supported by advanced certifications in MSME training of trainers, vocational and skills development, digital learning, and professional communication. Olaniyi is passionate about building robust, scalable, and impact-driven training systems that strengthen human capital, support enterprise growth, and deliver measurable outcomes across the Lani Consulting Group.',
  },
  {
    name: 'Luqman Musah Ozekhome',
    title: 'Programme Officer, LANI Foundation',
    initials: 'LM',
    image: '/images/Luqman Musah Professional Headshot.png',
    bio: 'Luqman Musah Ozekhome is the Programme Officer, LANI Foundation, the philantropic arm of LANI Group, where he supports the planning, coordination, implementation, and monitoring of community development, economic empowerment, and social impact initiatives.\n\nWith over five years of experience in livelihoods programming, entrepreneurship support, vocational skills development, and community-based interventions, Luqman brings expertise in programme management, stakeholder engagement, beneficiary support, and sustainable socio-economic development.\n\nPrior to joining LANI Foundation, he worked across livelihood and reintegration programmes supporting vulnerable populations, including returnees, migrants, women, youth, and underserved communities through skills development, business support, and income-generating initiatives.\n\nHe holds a Higher National Diploma (HND) in Business Administration and Management from Federal Polytechnic Auchi and has completed professional training in Financial Literacy, MSME Training of Trainers, Mental Health and Psychosocial Support (MHPSS), Psychological First Aid (PFA), and Sustainable Socio-Economic Reintegration, including programmes delivered by GIZ/GOPA and the International Organization for Migration (IOM).\n\nLuqman is passionate about strengthening community resilience, expanding economic opportunities, and driving sustainable development outcomes through innovative and people-centred programmes.',
  },
];

/* ───── Component ───── */
const About = () => {
  const heroRef = useRef(null);
  const [activeBio, setActiveBio] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeBio !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeBio]);

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Violet-blue semi-transparent overlay */}
        <div className="absolute inset-0 bg-brand/80 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="about-hero-card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-premium-xl text-white" style={{ opacity: 0 }}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              About LANI Group
            </h1>
            <div className="w-16 h-[3px] bg-gold mx-auto mt-6" />
            <p className="mt-8 text-base md:text-lg text-white/90 leading-relaxed font-normal">
              LANI Group is a forward-thinking African conglomerate driving impact across key sectors including management consulting, travel and tourism, merchandising, social development, training, technology and humanitarian. With a diverse portfolio of companies under its umbrella, LANI Group is united by a shared purpose: delivering innovative, sustainable, and locally relevant solutions that inspire transformation and growth.
            </p>
            <p className="mt-6 text-base md:text-lg text-white/90 leading-relaxed font-normal">
              We collaborate with public and private stakeholders to advance enterprise, uplift communities, and promote African excellence on the global stage. At the heart of our work lies a commitment to quality, integrity, and inclusive development.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ repeating logo marquee banner ═══════════════ */}
      <div className="bg-brand py-6 overflow-hidden border-y border-white/10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-white/85 select-none">
              {/* Lani hourglass trophy logo indicator */}
              <svg className="w-8 h-8 text-gold" viewBox="0 0 100 120" fill="currentColor">
                <path d="M50 15 C38 15, 30 25, 30 35 C30 50, 48 55, 48 60 C48 65, 30 70, 30 85 C30 95, 38 105, 50 105 C62 105, 70 95, 70 85 C70 70, 52 65, 52 60 C52 55, 70 50, 70 35 C70 25, 62 15, 50 15 Z" />
              </svg>
              <span className="text-xl font-bold tracking-[0.2em] font-display">LANI GROUP</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ MISSION & VISION ═══════════════ */}
      <section id="mission" className="py-24 relative overflow-hidden bg-brand-gradient">
        {/* Background logo pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none grid grid-cols-6 gap-8 p-12">
          {Array.from({ length: 24 }).map((_, i) => (
            <svg key={i} className="w-full h-auto text-white" viewBox="0 0 100 120" fill="currentColor">
              <path d="M50 15 C38 15, 30 25, 30 35 C30 50, 48 55, 48 60 C48 65, 30 70, 30 85 C30 95, 38 105, 50 105 C62 105, 70 95, 70 85 C70 70, 52 65, 52 60 C52 55, 70 50, 70 35 C70 25, 62 15, 50 15 Z" />
            </svg>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal animation="fade-right">
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-premium-lg h-full border border-surface-200">
                <div className="w-14 h-14 rounded-2xl bg-brand/8 flex items-center justify-center mb-6">
                  <Target size={28} className="text-brand" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-5">
                  Mission
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  To empower transformation through innovative solutions, strategic partnerships, and socially responsible initiatives that drive growth across Africa and beyond.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal animation="fade-left" delay={0.15}>
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-premium-lg h-full border border-surface-200 border-t-4 border-t-gold">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <Eye size={28} className="text-gold-dark" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-5">
                  Vision
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  To be a leading African conglomerate known for excellence, impact, and integrity—shaping industries, uplifting communities, and championing Africa's place in the global economy.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ VALUES & CULTURE ═══════════════ */}
      <section id="values" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-7">
              <SectionReveal animation="fade-right">
                <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
                  Our Identity
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                  Our Values & Culture
                </h2>
                <div className="w-12 h-[3px] bg-gold mt-6" />
                <p className="mt-8 text-text-secondary text-base md:text-lg leading-relaxed">
                  LANI Group thrives on a culture of excellence, integrity, and impact. We are driven by a deep commitment to innovation, collaboration, and service across all our subsidiaries. Our core values—Leadership, Accountability, Nurturing, and Innovation—guide every decision and interaction. We foster a people-first environment where creativity meets discipline, and where every team member is empowered to contribute to meaningful change. At LANI, we don't just build businesses—we build communities, legacy, and a future Africa can be proud of.
                </p>
              </SectionReveal>
            </div>

            {/* Right photo */}
            <div className="lg:col-span-5">
              <SectionReveal animation="fade-left" delay={0.15}>
                <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-surface-200 aspect-[4/3]">
                  <img
                    src="/images/lani_team_group.jpg"
                    alt="Lani Group team culture"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SUSTAINABILITY ═══════════════ */}
      <section
        id="sustainability"
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Semi-transparent violet-blue overlay */}
        <div className="absolute inset-0 bg-brand/90 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">
                Responsibility
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                Sustainability at LANI Group
              </h2>
              <div className="w-12 h-[3px] bg-gold mt-6" />
              <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed">
                At LANI, sustainability isn't a buzzword—it's embedded in how we build, operate, and grow. We are committed to creating long-term value by ensuring our business decisions positively impact people, the planet, and progress. Our approach blends environmental consciousness, economic resilience, and social responsibility across all subsidiaries.
              </p>
            </div>
          </SectionReveal>

          {/* Focus Areas cards */}
          <div className="mt-16">
            <SectionReveal>
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-8">
                Our Focus Areas
              </h3>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <SectionReveal key={area.title} animation="fade-up" delay={index * 0.1}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium group border border-white/15">
                    {/* Background photo */}
                    <img
                      src={area.image}
                      alt={area.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                      <h4 className="font-display text-lg font-bold text-white mb-2">
                        {area.title}
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CSR ═══════════════ */}
      <section id="csr" className="py-24 bg-brand-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal>
            <div className="bg-brand rounded-[32px] p-8 md:p-14 text-white shadow-premium-lg border border-brand-800">
              <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">
                Giving Back
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
                Corporate Social Responsibility (CSR)
              </h2>
              <div className="w-12 h-[3px] bg-gold mt-6" />

              <p className="mt-8 text-base text-white/80 leading-relaxed">
                LANI Group believes in business as a force for good. Beyond profit, we are deeply committed to impact. Through our CSR efforts, we support initiatives that align with our values of equity, empowerment, and excellence.
              </p>

              <div className="mt-10">
                <h4 className="font-display text-lg font-bold text-gold mb-6">
                  Key Pillars of Our CSR Strategy:
                </h4>
                <ul className="space-y-4">
                  {csrPillars.map((pillar) => (
                    <li key={pillar.title} className="flex items-start gap-3.5">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <div className="text-sm text-white/80 leading-relaxed">
                        <strong className="text-white font-semibold">{pillar.title}:</strong> {pillar.description}
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-3.5">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <div className="text-sm text-white/80 leading-relaxed">
                      Every project we support reflects our mission to give back, uplift, and move forward together.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <button className="btn-white text-brand text-xs font-semibold py-3 px-6 gap-2">
                  <Download size={14} />
                  Download CSR Report
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ LEADERSHIP TEAM ═══════════════ */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">
                The People Behind Our Vision
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-text-primary">
                Leadership Team
              </h2>
              <p className="mt-4 text-text-muted max-w-3xl mx-auto text-sm leading-relaxed">
                At the helm of LANI Group is a dynamic leadership team driven by purpose, excellence, and a bold vision for Africa. Led by our Group CEO, Mr. Ani, the team comprises seasoned professionals across diverse sectors—including finance, consulting, agriculture, hospitality, tech, and social impact. Together, they bring decades of experience, strategic foresight, and a shared passion for innovation and inclusive growth. Our leaders are not just decision-makers—they are changemakers committed to empowering people, transforming industries, and building a legacy of impact.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTeam.map((member, index) => (
              <SectionReveal key={member.name} animation="fade-up" delay={index * 0.08}>
                <div className="card overflow-hidden group">
                  {/* Photo or initials placeholder */}
                  <div className="relative h-72 bg-gradient-to-br from-brand-50 to-brand-100 overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${member.objectPosition || 'object-center'}`}
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                        {member.initials}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-text-primary">{member.name}</h3>
                    <p className="text-sm text-gold-dark font-semibold mt-1">{member.title}</p>
                    <button
                      onClick={() => setActiveBio(index)}
                      className="mt-4 text-sm text-brand hover:text-brand-600 font-semibold transition-colors flex items-center gap-1.5 group/btn"
                    >
                      Read Bio
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BIO MODAL ═══════════════ */}
      {activeBio !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setActiveBio(null)}>
          <div className="absolute inset-0 bg-text-primary/60 backdrop-blur-sm" />
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl p-8 md:p-10 shadow-premium-xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveBio(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-200 hover:bg-surface-300 flex items-center justify-center text-text-muted hover:text-text-primary transition-all"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              {leadershipTeam[activeBio].image ? (
                <img
                  src={leadershipTeam[activeBio].image}
                  alt={leadershipTeam[activeBio].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                  {leadershipTeam[activeBio].initials}
                </div>
              )}
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary">{leadershipTeam[activeBio].name}</h3>
                <p className="text-sm text-gold-dark font-medium">{leadershipTeam[activeBio].title}</p>
              </div>
            </div>

            <div className="h-px bg-surface-300 mb-6" />

            <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">{leadershipTeam[activeBio].bio}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
