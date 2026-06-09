import { useState } from 'react';
import { MapPin, CheckCircle, ArrowRight, BookOpen, Layers, Heart, TrendingUp, Cpu } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const stats = [
  { icon: BookOpen, number: '50,000+', label: 'Students & Teachers Reached', desc: 'Across Southern Nigeria through Axiom Learning Solutions' },
  { icon: Layers, number: '100+', label: 'Strategic Consulting Projects', desc: 'Corporate advisory and policy design by LANI Consulting' },
  { icon: Heart, number: '1,000+', label: 'Lives Transformed', desc: 'Through community empowerment and LANI Foundation initiatives' },
  { icon: TrendingUp, number: '7+', label: 'Subsidiaries & Brands', desc: 'Spanning key growth sectors of the African economy' },
];

const projects = [
  {
    title: 'National Teacher Training & Resource Distribution',
    company: 'Axiom Learning Solutions',
    sector: 'Education & L&D',
    location: 'Lagos, Edo & Delta States',
    description: 'Delivered comprehensive professional development programs for public school educators and distributed high-quality curriculum resources and teaching aids to improve rural classroom learning outcomes.',
    outcome: 'Trained 1,200+ educators across 250+ primary and secondary schools.',
  },
  {
    title: 'Agricultural Outgrower Honey Scheme',
    company: 'Sehai Foods',
    sector: 'Food & Agriculture',
    location: 'Kogi, Edo & Ondo States',
    description: 'Empowered smallholder bee keepers by providing modern hives, capacity building in sustainable apiculture, and guaranteed off-take market access, fostering local economic stability.',
    outcome: 'Supported 500+ local bee farmers and expanded raw honey supply chain.',
  },
  {
    title: 'Corporate Restructuring & Governance Advisory',
    company: 'LANI Consulting',
    sector: 'Consulting & Professional Services',
    location: 'Abuja FCT & Lagos State',
    description: 'Designed operational restructuring roadmaps, corporate governance frameworks, and change management strategies for leading regional enterprises and public institutions.',
    outcome: 'Successfully executed 15+ executive reorganization mandates.',
  },
  {
    title: 'Academic Scholarship & Community Grants',
    company: 'LANI Foundation',
    sector: 'Philanthropy & CSR',
    location: 'Edo & Delta States',
    description: 'Funded comprehensive tuition scholarships, health outreach programs, and provided school supplies for children from low-income families in rural communities.',
    outcome: 'Supported 350+ students through secondary and tertiary educational tracks.',
  },
  {
    title: 'Youth Digital Literacy & ICT Bootcamps',
    company: 'Axiom Learning Solutions',
    sector: 'Education & L&D',
    location: 'Lagos State',
    description: 'Organized intensive hands-on computer literacy, digital marketing, and programming bootcamps for public school graduates to prepare them for the modern digital economy.',
    outcome: 'Upskilled 450+ young adults with certifications and job readiness skills.',
  },
  {
    title: 'Industrial Material Sourcing & Logistics',
    company: 'LANI Merchandising',
    sector: 'Trade & Commerce',
    location: 'Lagos & Ogun States',
    description: 'Built cross-border supply networks and warehouse management hubs for sourcing and distributing raw industrial materials and machinery for manufacturing complexes.',
    outcome: 'Partnered with 20+ manufacturing companies to streamline raw material procurement.',
  },
];

const timelineMilestones = [
  { year: '2014', title: 'Foundation of LANI Group', desc: 'Established in Lagos, Nigeria with a core vision to build sustainable business ecosystems across key sectors.' },
  { year: '2016', title: 'Launch of Axiom Learning Solutions', desc: 'Began scaling educational impact by partnering with state governments to run teacher training programs.' },
  { year: '2018', title: 'Agriculture & Food Processing Expansion', desc: 'Introduced Sehai Foods, driving honey production and empowering outgrower farmers in Central Nigeria.' },
  { year: '2021', title: 'LANI Foundation Setup', desc: 'Formally launched the group\'s philanthropic arm to support academic excellence and youth-focused development.' },
  { year: '2024', title: 'Digital & Creative Media Leap', desc: 'Launched LANI Creatives to design cutting-edge brand concepts and drive digital integration across the continent.' },
];

const Footprint = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.sector === activeFilter);

  const sectors = ['All', 'Consulting & Professional Services', 'Food & Agriculture', 'Education & L&D', 'Philanthropy & CSR', 'Trade & Commerce'];

  // Shorten filter name display for mobile responsiveness
  const getFilterLabel = (filter) => {
    if (filter === 'Consulting & Professional Services') return 'Consulting';
    if (filter === 'Philanthropy & CSR') return 'Philanthropy';
    if (filter === 'Food & Agriculture') return 'Agriculture';
    return filter;
  };

  return (
    <>
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative min-h-[400px] md:min-h-[500px] py-36 md:py-48 flex items-center justify-center overflow-hidden bg-brand-gradient">
        {/* Background Accents */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-white rounded-full blur-[100px]" />
        </div>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <SectionReveal animation="fade-up">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Our Operational Footprint
            </h1>
            <div className="w-16 h-[3px] bg-gold mx-auto mt-6" />
            <p className="mt-6 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We operate at the intersection of business excellence and social impact. 
              Discover where we work, what we have built, and how our initiatives are transforming lives across Africa.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ WHAT WE HAVE DONE (STATS) ═══════════════ */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionReveal animation="fade-up">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">What We Have Done</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text-primary">
                Impact at Scale
              </h2>
              <div className="w-12 h-[3px] bg-gold mx-auto mt-4" />
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <SectionReveal key={stat.label} animation="fade-up" delay={idx * 0.1}>
                <div className="card p-8 h-full flex flex-col justify-between hover:scale-102 transition-transform duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand mb-6">
                      <stat.icon size={24} />
                    </div>
                    <p className="font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                      {stat.number}
                    </p>
                    <h3 className="mt-2 text-sm font-bold text-brand uppercase tracking-wider">
                      {stat.label}
                    </h3>
                  </div>
                  <p className="mt-4 text-xs text-text-muted leading-relaxed border-t border-surface-200 pt-4">
                    {stat.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WORK WE HAVE DONE & WHERE (PROJECTS) ═══════════════ */}
      <section className="py-20 bg-subtle border-t border-surface-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionReveal animation="fade-up">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">Projects Portfolio</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text-primary">
                Where We Work & What We Have Built
              </h2>
              <div className="w-12 h-[3px] bg-gold mx-auto mt-4" />
            </SectionReveal>
          </div>

          {/* Filtering Tabs */}
          <SectionReveal animation="fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setActiveFilter(sector)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    activeFilter === sector
                      ? 'bg-brand text-white shadow-premium'
                      : 'bg-white text-text-primary border border-surface-200 hover:bg-brand-50 hover:border-brand/20'
                  }`}
                >
                  {getFilterLabel(sector)}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <SectionReveal key={project.title} animation="fade-up" delay={idx * 0.05}>
                <div className="card p-8 h-full flex flex-col justify-between hover:scale-102 transition-transform duration-300">
                  <div>
                    {/* Header: Company & Location */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-brand-50 text-[10px] font-bold text-brand uppercase tracking-wider">
                        {project.company}
                      </span>
                      <div className="flex items-center gap-1.5 text-text-muted">
                        <MapPin size={12} className="text-gold-dark" />
                        <span className="text-[11px] font-semibold">{project.location}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-text-primary leading-snug mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Outcome Banner */}
                  <div className="bg-brand-50/50 rounded-xl p-4 border border-brand-100/30">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-brand mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="block text-[9px] font-bold text-brand uppercase tracking-wider">
                          Key Outcome & Impact
                        </span>
                        <p className="mt-1 text-xs text-text-primary font-medium leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-surface-200">
              <p className="text-text-muted text-sm">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ EXPANSION TIMELINE ═══════════════ */}
      <section className="py-24 bg-white border-t border-surface-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionReveal animation="fade-up">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">Our History</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-text-primary">
                A History of Growth
              </h2>
              <div className="w-12 h-[3px] bg-gold mx-auto mt-4" />
            </SectionReveal>
          </div>

          <div className="relative border-l border-brand/20 ml-4 md:ml-32 py-4 space-y-12">
            {timelineMilestones.map((milestone, idx) => (
              <SectionReveal key={milestone.year} animation="fade-up" delay={idx * 0.08}>
                <div className="relative pl-8 md:pl-12">
                  {/* Circle Pin */}
                  <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-premium z-10" />
                  
                  {/* Left Floating Year (Desktop only) */}
                  <div className="hidden md:block absolute right-full mr-12 top-1 font-display text-2xl font-bold text-brand">
                    {milestone.year}
                  </div>

                  {/* Year Tag (Mobile only) */}
                  <span className="inline-block md:hidden px-3 py-1 rounded bg-brand text-white font-display text-xs font-bold mb-3">
                    {milestone.year}
                  </span>

                  <h3 className="font-display text-lg font-bold text-text-primary">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed max-w-2xl">
                    {milestone.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PARTNER WITH US CTA ═══════════════ */}
      <section className="bg-brand-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">
              Partner With LANI
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white">
              Ready to Expand Our Footprint?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
              We are actively looking to scale our initiatives and establish sustainable partnerships with governments,
              NGOs, and private sector leaders across Africa.
            </p>
            <div className="mt-8">
              <a href="/contact" className="btn-gold inline-flex items-center gap-2">
                Get In Touch
                <ArrowRight size={16} />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Footprint;
