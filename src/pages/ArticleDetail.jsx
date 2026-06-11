import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { articles } from '../data/articles';
import SectionReveal from '../components/SectionReveal';
import { useEffect } from 'react';

// Custom inline SVGs for share buttons
const TwitterIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const FacebookIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((art) => art.id === id);

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-6">
        <h2 className="font-display text-3xl font-bold text-text-primary">Article Not Found</h2>
        <p className="mt-4 text-text-muted">The article you are looking for does not exist or has been moved.</p>
        <Link to="/news" className="btn-primary mt-8 gap-2">
          <ArrowLeft size={16} /> Back to News
        </Link>
      </div>
    );
  }

  // Get related articles (exclude current one)
  const relatedArticles = articles.filter((art) => art.id !== id).slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section className="relative pt-36 pb-20 bg-subtle overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gold rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Back button */}
          <Link to="/news" className="inline-flex items-center gap-2 text-sm text-brand font-semibold hover:text-brand-600 transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to News & Media
          </Link>

          {/* Meta Tags */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-light mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand/8 text-brand">
              <Tag size={12} /> {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {article.date}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-6 text-lg md:text-xl text-text-secondary font-medium leading-relaxed border-l-4 border-gold pl-4">
              {article.subtitle}
            </p>
          )}

          {/* Share Actions */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-surface-300">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
              <Share2 size={13} /> Share Article:
            </span>
            <div className="flex items-center gap-2">
              {[
                { icon: TwitterIcon, url: '#' },
                { icon: LinkedinIcon, url: '#https://www.linkedin.com/company/lani-group/posts/?feedView=all' },
                { icon: FacebookIcon, url: '#' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="w-8 h-8 rounded-full bg-white border border-surface-300 flex items-center justify-center text-text-muted hover:text-brand hover:border-brand transition-all shadow-sm"
                >
                  <item.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Main Cover Image */}
          {article.coverImage && (
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-surface-200 aspect-[16/9] mb-12">
              <img
                src={article.coverImage}
                alt={article.title}
                className={`w-full h-full object-cover ${article.coverImagePosition || 'object-center'}`}
              />
            </div>
          )}

          {/* Content Body */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              {article.content?.map((item, idx) => {
                if (item.type === 'paragraph') {
                  return (
                    <p key={idx} className="text-text-secondary">
                      {item.text}
                    </p>
                  );
                }
                if (item.type === 'heading') {
                  return (
                    <h3 key={idx} className="font-display text-2xl sm:text-3xl font-bold text-text-primary pt-6">
                      {item.text}
                    </h3>
                  );
                }
                if (item.type === 'image') {
                  return (
                    <div key={idx} className="my-10 space-y-3">
                      <div className="rounded-2xl overflow-hidden border border-surface-200 shadow-premium">
                        <img src={item.url} alt={item.caption || article.title} className="w-full h-auto object-cover" />
                      </div>
                      {item.caption && (
                        <p className="text-xs sm:text-sm text-center text-text-muted italic">{item.caption}</p>
                      )}
                    </div>
                  );
                }
                if (item.type === 'list') {
                  return (
                    <ul key={idx} className="space-y-3 pl-6 list-disc text-text-secondary">
                      {item.items.map((listItem, listIdx) => (
                        <li key={listIdx} className="pl-1">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-subtle border-t border-surface-300">
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-12 text-center">
                Related Articles
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((art, index) => (
                <SectionReveal key={art.id} animation="fade-up" delay={index * 0.1}>
                  <Link to={`/news/${art.id}`} className="card overflow-hidden h-full flex flex-col group block">
                    <div className="h-48 bg-gradient-to-br from-brand-50 to-brand-100 relative overflow-hidden">
                      {art.coverImage ? (
                        <img
                          src={art.coverImage}
                          alt={art.title}
                          className={`w-full h-full object-cover ${art.coverImagePosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-3xl font-display font-bold text-brand/10">LG</span>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[14px] font-semibold text-brand">
                          <Tag size={10} /> {art.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-text-light mb-3">
                        <Calendar size={12} /> {art.date}
                      </div>
                      <h3 className="font-display text-base font-bold text-text-primary mb-2 group-hover:text-brand transition-colors leading-snug">
                        {art.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed flex-1 line-clamp-3">
                        {art.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs text-brand font-semibold group-hover:gap-2 transition-all">
                        Read Article <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ArticleDetail;
