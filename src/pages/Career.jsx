import { useState, useEffect } from 'react';
import { MapPin, Calendar, Upload, Send, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const Career = () => {
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' or 'interns'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredProgram: 'Job Listing',
    positionOfInterest: '',
    message: '',
    location: '',
    qualification: '',
    startDate: '',
    source: '',
    resume: null,
  });

  // Sync Preferred Program dropdown with selected tab
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      preferredProgram: activeTab === 'jobs' ? 'Job Listing' : 'Internship, NYSC & SIWES',
    }));
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`LANI Group Application: ${formData.positionOfInterest}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Preferred Program: ${formData.preferredProgram}\n` +
      `Position/Program of Interest: ${formData.positionOfInterest}\n` +
      `Location: ${formData.location || 'N/A'}\n` +
      `Educational Qualification: ${formData.qualification || 'N/A'}\n` +
      `Availability/Preferred Start Date: ${formData.startDate || 'N/A'}\n` +
      `How did you hear about us?: ${formData.source || 'N/A'}\n\n` +
      `Message:\n${formData.message || 'No message provided'}`
    );
    window.location.href = `mailto:careers@lanigroup.com?subject=${subject}&body=${body}`;
    alert('Thank you for your interest! Your email client has been opened to submit your details to careers@lanigroup.com.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredProgram: activeTab === 'jobs' ? 'Job Listing' : 'Internship, NYSC & SIWES',
      positionOfInterest: '',
      message: '',
      location: '',
      qualification: '',
      startDate: '',
      source: '',
      resume: null,
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[450px] md:min-h-[550px] py-44 md:py-56 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/corper_with_acb.png')" }}>
        <div className="absolute inset-0 bg-brand-gradient opacity-80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">Build Your Career</h1>
          <div className="w-12 h-[3px] bg-gold mx-auto mt-6" />
          <p className="mt-6 text-white/90 max-w-xl mx-auto font-medium">Join a team of changemakers committed to empowering Africa's future</p>
        </div>
      </section>

      {/* Tabs Menu */}
      <section className="py-12 bg-white border-b border-surface-200">
        <div className="max-w-4xl mx-auto px-6 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'jobs'
                ? 'bg-brand text-white shadow-premium'
                : 'bg-white text-brand border border-brand/20 hover:bg-brand-50'
            }`}
          >
            Job Listings
          </button>
          <button
            onClick={() => setActiveTab('interns')}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'interns'
                ? 'bg-brand text-white shadow-premium'
                : 'bg-white text-brand border border-brand/20 hover:bg-brand-50'
            }`}
          >
            Internship, NYSC & SIWES
          </button>
        </div>
      </section>

      {/* Tab Contents */}
      <section className="py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === 'jobs' ? (
            /* JOB LISTINGS TAB (FLYERS CAROUSEL) */
            <SectionReveal>
              <div className="relative max-w-5xl mx-auto">
                {/* Carousel container */}
                <div className="relative overflow-hidden rounded-3xl bg-white/40 border border-surface-200/50 p-6 sm:p-12 shadow-premium">
                  {/* Slides Wrapper */}
                  <div className="transition-transform duration-500 ease-in-out flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    
                    {/* Slide 1: Advisory Board Member */}
                    <div className="w-full flex-shrink-0 px-2 sm:px-4">
                      <div className="bg-[#2e2d70] rounded-2xl overflow-hidden shadow-premium-lg border border-surface-200/20 text-white grid lg:grid-cols-12">
                        {/* Left brand banner */}
                        <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-[#232254] relative overflow-hidden min-h-[300px] lg:min-h-full">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                          <div>
                            <span className="text-xs font-bold text-gold tracking-widest uppercase">LANI GROUP</span>
                            <p className="text-xs text-white/50 mt-1">www.lanigroup.com</p>
                          </div>
                          <div className="my-8">
                            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white uppercase">
                              Call For Advisory Board Members
                            </h2>
                          </div>
                          {/* Decorative Chair Graphic */}
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                              <Briefcase size={20} className="text-gold" />
                            </div>
                            <span className="text-xs font-semibold tracking-wider text-white/70">EXECUTIVE POSITION</span>
                          </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:col-span-8 p-8 sm:p-10 bg-[#2e2d70] text-sm leading-relaxed space-y-6">
                          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">Advisory Board Member</h3>
                            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-gold">Lagos, Nigeria | Hybrid</span>
                          </div>

                          <p className="text-white/80 text-xs sm:text-sm">
                            LANI Group is a forward-looking African Holding Company with subsidiaries in Agriculture, Food Systems, Learning and Development, Trade & Commerce, Philanthropy, Professional Services, Technology. The Group focuses on innovation, sustainability, and inclusive growth across emerging markets. As it expands, LANI seeks to strengthen its Board of Directors with seasoned professionals committed to advancing enterprise and impact in Africa.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div>
                              <h4 className="font-semibold text-gold text-xs uppercase tracking-wider mb-3">Board Opportunities:</h4>
                              <ol className="space-y-2 text-white/70 text-xs">
                                <li><strong className="text-white">1. Business Development & Partnerships:</strong> Market expansion, innovation, & global collaborations.</li>
                                <li><strong className="text-white">2. Finance & Investment:</strong> Fundraising, restructuring, & investment strategy.</li>
                                <li><strong className="text-white">3. Communications & Advocacy:</strong> PR, stakeholder engagement, & governance representation.</li>
                                <li><strong className="text-white">4. People & Culture:</strong> Human capital strategy and performance.</li>
                              </ol>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gold text-xs uppercase tracking-wider mb-3">Preferred Sector Expertise:</h4>
                              <ul className="grid grid-cols-2 gap-2 text-white/70 text-xs list-disc pl-4">
                                <li>FMCG & Merchandising</li>
                                <li>Tech & Digital Innovation</li>
                                <li>Management Consulting</li>
                                <li>Education & Training</li>
                                <li>Creative Industries</li>
                                <li>Human Capital Dev.</li>
                              </ul>
                            </div>
                          </div>

                          <div className="border-t border-white/10 pt-4 space-y-4">
                            <div>
                              <h4 className="font-semibold text-gold text-xs uppercase tracking-wider mb-2">Eligibility:</h4>
                              <ul className="space-y-1 text-white/70 text-xs list-disc pl-4">
                                <li>Minimum 15 years professional experience (5+ in senior management/board).</li>
                                <li>Strong alignment with LANI Group's mission and impact vision.</li>
                                <li>Proven leadership, communication, and advisory skills.</li>
                                <li>Global outlook with African diaspora candidates highly welcome.</li>
                              </ul>
                            </div>

                            <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div>
                                <h4 className="font-semibold text-gold text-xs uppercase tracking-wider">Application Instruction:</h4>
                                <p className="text-xs text-white/70 mt-1">Please visit the application portal directly:</p>
                              </div>
                              <a
                                href="https://bit.ly/LGBoardMember"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 rounded-lg bg-gold hover:bg-gold-light text-[#2e2d70] font-bold text-xs uppercase tracking-wider transition-colors"
                              >
                                bit.ly/LGBoardMember
                              </a>
                            </div>
                          </div>

                          <p className="text-[15px] text-white/40 italic text-center pt-2">
                            Shortlisted candidates will be contacted during the 4th quarter of the year for interviews.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: Head Commercial */}
                    <div className="w-full flex-shrink-0 px-2 sm:px-4">
                      <div className="bg-[#10B981] rounded-2xl overflow-hidden shadow-premium-lg border border-surface-200/20 text-white grid lg:grid-cols-12">
                        {/* Left brand banner */}
                        <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-[#059669] relative overflow-hidden min-h-[300px] lg:min-h-full">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                          <div>
                            <span className="text-xs font-bold text-white tracking-widest uppercase">LANI CONSULTING</span>
                            <p className="text-xs text-white/50 mt-1">www.laniconsulting.ng</p>
                          </div>
                          <div className="my-8">
                            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white uppercase">
                              We're Hiring
                            </h2>
                          </div>
                          {/* Decorative Icon */}
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                              <Briefcase size={20} className="text-white" />
                            </div>
                            <span className="text-xs font-semibold tracking-wider text-white/70">COMMERCIAL LEAD</span>
                          </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:col-span-8 p-8 sm:p-10 bg-[#059669] text-sm leading-relaxed space-y-6">
                          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">Head Commercial</h3>
                            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white">Lagos, Nigeria | Hybrid</span>
                          </div>

                          <p className="text-white/80 text-xs sm:text-sm">
                            We're seeking a dynamic commercial lead to execute business growth and drive revenue growth across our 7 business lines - Agriculture, Food Systems, Learning and Development, Trade & Commerce, Philanthropy, Professional Services, Technology. The ideal candidate has a strong grasp of finance and strategy, with proven experience in product sales, expanding markets, and leading high-performing teams. Opening and closing deals is key to this role.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div>
                              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Key Responsibilities:</h4>
                              <ul className="space-y-1.5 text-white/70 text-xs list-disc pl-4">
                                <li>Identify & pursue new opportunities across multiple sectors.</li>
                                <li>Develop and execute sales and growth strategies.</li>
                                <li>Lead proposals, client pitches, and negotiations.</li>
                                <li>Analyse financial data to maximise profitability.</li>
                                <li>Drive commercial strategy across the Group.</li>
                                <li>Cultivate strategic partnerships and manage lifecycle.</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Requirements:</h4>
                              <ul className="space-y-1.5 text-white/70 text-xs list-disc pl-4">
                                <li>Bachelor's degree in Business, Finance, or related field (MBA/CFA/ACCA is a plus).</li>
                                <li>8-10 years experience in BD, sales, or strategy.</li>
                                <li>Strong financial and commercial acumen.</li>
                                <li>Good understanding of philanthropy sector is highly desired.</li>
                              </ul>
                            </div>
                          </div>

                          <div className="border-t border-white/10 pt-4 space-y-4">
                            <div>
                              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-2">Target Industries:</h4>
                              <p className="text-xs text-white/80 bg-white/10 rounded-lg p-2.5">
                                Agriculture | Food Systems | Learning and Development | Trade & Commerce | Philanthropy | Professional Services | Technology
                              </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div>
                                <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Application Instruction:</h4>
                                <p className="text-xs text-white/70 mt-1">Please visit the application portal directly:</p>
                              </div>
                              <a
                                href="https://bit.ly/HeadCommercials"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 rounded-lg bg-white hover:bg-white/95 text-[#059669] font-bold text-xs uppercase tracking-wider transition-colors"
                              >
                                bit.ly/HeadCommercials
                              </a>
                            </div>
                          </div>

                          <p className="text-[15px] text-white/40 italic text-center pt-2">
                            Please note: Only qualified persons will be contacted.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Left / Right arrows */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-surface-300 flex items-center justify-center text-text-primary shadow-premium hover:text-brand hover:scale-105 transition-all z-10"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-surface-300 flex items-center justify-center text-text-primary shadow-premium hover:text-brand hover:scale-105 transition-all z-10"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Dot Navigation Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {[0, 1].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'bg-brand w-6' : 'bg-surface-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ) : (
            /* INTERNSHIP, NYSC & SIWES TAB */
            <div className="space-y-12 max-w-5xl mx-auto">
              {/* Classroom Hero Banner (Screenshot 2) */}
              <SectionReveal>
                <div className="relative rounded-3xl overflow-hidden aspect-[21/9] min-h-[200px] border border-surface-200 shadow-premium">
                  <img
                    src="/images/career_screenshot_classroom.png"
                    alt="LANI Group Lecture Hall"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand/85 flex items-center justify-center p-6 sm:p-12">
                    <p className="text-white text-center text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed font-medium">
                      These opportunities provide you with the chance to apply your academic knowledge in real-world settings, collaborate with experts, and contribute to meaningful projects that make a difference. <strong className="text-gold">Whether you're looking to fulfill your NYSC or gain valuable work experience through SIWES or an internship, LANI Group is the place to be.</strong>
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Main Card (Screenshot 4) */}
              <SectionReveal>
                <div className="card overflow-hidden bg-white shadow-premium max-w-4xl mx-auto border border-surface-200">
                  <div className="relative aspect-[16/6] min-h-[160px] overflow-hidden">
                    <img
                      src="/images/corper_with_acb.png"
                      alt="Kickstart Your Career with LANI Group"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent flex items-end p-6 sm:p-10">
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                        Kickstart Your Career with LANI Group
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 sm:p-10 text-center max-w-3xl mx-auto">
                    <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed">
                      At LANI Group, we believe in nurturing the next generation of leaders and professionals. Through our Internships, NYSC (National Youth Service Corps), and SIWES (Student Industrial Work Experience Scheme) programs, we offer hands-on experience and mentorship in a range of industries including consulting, education, technology, social impact, and more.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          )}
        </div>
      </section>

      {/* Custom Application Form (Screenshot 3) */}
      <section className="py-24 bg-white border-t border-surface-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">Application Form</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">Send Us a Message</h2>
              <div className="w-12 h-[3px] bg-gold mx-auto mt-4" />
              <p className="mt-4 text-text-muted text-sm">Tell us about your background and interests, and we'll connect with you.</p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <form onSubmit={handleSubmit} className="bg-white border border-surface-300 rounded-3xl overflow-hidden shadow-premium-lg">
              {/* Form header banner */}
              <div className="bg-[#2e2d70] py-4 px-8 text-center border-b border-surface-200">
                <span className="font-display text-base font-bold text-white uppercase tracking-widest">Send Us a Message</span>
              </div>

              {/* Form body */}
              <div className="p-8 sm:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                  </div>

                  {/* Preferred Program */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      Preferred Program <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredProgram"
                      required
                      value={formData.preferredProgram}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none bg-white transition-all cursor-pointer"
                    >
                      <option value="Job Listing">Job Listing</option>
                      <option value="Internship, NYSC & SIWES">Internship, NYSC & SIWES</option>
                    </select>
                  </div>
                </div>

                {/* Position/Program of Interest */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                    Position/Program of Interest <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="positionOfInterest"
                    required
                    placeholder="Specify the role, department, or program you're applying for (e.g., Internship in Marketing, NYSC in Tech, etc.)"
                    value={formData.positionOfInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Give us a brief explanation why you choose to work with us and what impact you believe you can make with us"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                    Attach Resume/CV
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="px-4 py-2.5 rounded-lg border border-brand/20 bg-brand-50 hover:bg-brand-100 text-brand text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2">
                      <Upload size={14} /> Choose Files
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                    </label>
                    <span className="text-xs text-text-muted">
                      {formData.resume ? formData.resume.name : 'No file chosen'}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location (City, Country)"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                  </div>

                  {/* Educational Qualification */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      Educational Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      placeholder="Educational Qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Availability Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      Availability/Preferred start Date
                    </label>
                    <input
                      type="text"
                      name="startDate"
                      placeholder="Availability/Preferred start Date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                  </div>

                  {/* Source */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-brand uppercase tracking-wider">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      name="source"
                      placeholder="How Did You Hear About Us?"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-surface-300 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#2e2d70] hover:bg-brand-700 text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-premium"
                >
                  <Send size={14} /> Send
                </button>
              </div>
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Career;
