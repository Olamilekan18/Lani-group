import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import SectionReveal from '../components/SectionReveal';

const categories = ['All', 'About LANI Group', 'Community', 'International Relations', 'Trade & Commerce'];

const NewsMedia = () => {
  return (
    <>
      <section className="relative py-32 md:py-40 overflow-hidden bg-brand-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-white rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">News & Media</h1>
          <div className="w-12 h-[3px] bg-gold mx-auto mt-6" />
          <p className="mt-6 text-white/60 max-w-xl mx-auto">Insights, updates, and stories from across the LANI Group portfolio</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-wrap items-center gap-3 mb-14 justify-center">
              {categories.map((cat, i) => (
                <button key={cat} className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  i === 0 ? 'bg-brand text-white' : 'bg-surface-100 text-text-muted hover:bg-brand-50 hover:text-brand border border-surface-300'
                }`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <SectionReveal key={article.id} animation="fade-up" delay={index * 0.1}>
                <Link to={`/news/${article.id}`} className="card overflow-hidden h-full flex flex-col group block">
                  <div className="h-48 bg-gradient-to-br from-brand-50 to-brand-100 relative overflow-hidden">
                    {article.coverImage ? (
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className={`w-full h-full object-cover ${article.coverImagePosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl font-display font-bold text-brand/10">LG</span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[14px] font-semibold text-brand">
                        <Tag size={10} /> {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-text-light mb-3">
                      <Calendar size={12} /> {article.date}
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary mb-3 group-hover:text-brand transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed flex-1 line-clamp-3">{article.excerpt}</p>
                    <div className="mt-5 flex items-center gap-1 text-sm text-brand font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsMedia;
