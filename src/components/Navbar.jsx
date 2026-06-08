import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import LaniLogo from './LaniLogo';

const companies = [
  { name: 'Philanthropy', desc: 'LANI Foundation', external: 'https://lanifoundation.org' },
  { name: 'Professional Services', desc: 'LANI Consulting', external: 'https://laniconsulting.ng' },
  { name: 'Trade & Commerce', desc: 'LANI Merchandising', external: 'https://lanimerchandising.com' },
  { name: 'Food Processing', desc: 'Sehai Foods', external: 'https://sehaifoods.com' },
  { name: 'Agriculture', desc: 'Geyiba Agro-Development', external: '#' },
  { name: 'Learning & Development', desc: 'Axiom Learning Solutions', external: 'https://axiomlearn.com' },
  { name: 'Creatives', desc: 'LANI Creatives', external: 'https://lani-creatives-v4.vercel.app/' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Expression & Companies', path: null, hasDropdown: true },
  { name: 'News & Media', path: '/news' },
  { name: 'Career', path: '/career' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-premium py-3'
            : 'bg-white py-4'
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand" />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex-shrink-0">
            <LaniLogo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} ref={dropdownRef} className="relative">
                  <button
                    id="companies-dropdown-trigger"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                      dropdownOpen
                        ? 'text-brand bg-brand-50'
                        : 'text-text-secondary hover:text-brand hover:bg-brand-50'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[380px] transition-all duration-300 origin-top ${
                      dropdownOpen
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-2 border border-surface-300 shadow-premium-xl">
                      <div className="px-4 pt-3 pb-2">
                        <p className="text-[11px] font-bold text-brand uppercase tracking-[0.15em]">
                          Our Companies
                        </p>
                      </div>
                      {companies.map((company) => (
                        <a
                          key={company.name}
                          href={company.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand-50 transition-all duration-200"
                        >
                          <div>
                            <p className="text-sm font-medium text-text-primary group-hover:text-brand transition-colors">
                              {company.name}
                            </p>
                            <p className="text-[11px] text-text-muted mt-0.5">{company.desc}</p>
                          </div>
                          <ExternalLink
                            size={13}
                            className="text-text-light group-hover:text-brand transition-colors"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-brand bg-brand-50'
                      : 'text-text-secondary hover:text-brand hover:bg-brand-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 p-2 text-brand"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative h-full flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-text-primary hover:text-brand transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`text-text-muted transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      mobileDropdownOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {companies.map((company) => (
                        <a
                          key={company.name}
                          href={company.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-text-secondary hover:text-brand hover:bg-brand-50 transition-all"
                        >
                          <div>
                            <p className="text-sm font-medium">{company.name}</p>
                            <p className="text-[11px] text-text-muted">{company.desc}</p>
                          </div>
                          <ExternalLink size={12} className="text-text-light" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-4 text-base font-medium transition-colors ${
                    isActive(link.path) ? 'text-brand' : 'text-text-primary hover:text-brand'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-surface-300">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
