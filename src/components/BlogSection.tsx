import React from 'react';
import { BlogPost } from '../types/logistics';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onReadPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, onReadPost }) => {
  return (
    <section id="blog" className="py-20 bg-orange-50 border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700 mb-2">
              <BookOpen className="w-4 h-4 text-orange-600" aria-hidden="true" />
              <span>Actualitat & Comerç Exterior</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-tight">
              Anàlisi operativa, normativa duanera i tendències logístiques
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Articles i guies pràctiques elaborades pels nostres representants duaners i directors de trànsit internacional per a professionals del sector.
            </p>
          </div>

          <div className="text-xs text-neutral-500 hidden sm:block shrink-0">
            Publicacions periòdiques d'Ibáñez Pascual Logístics
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-orange-100/40 border border-orange-200/80 rounded-xl p-6 hover:bg-orange-100/60 transition-colors"
            >
              {/* Unboxed Metadata Header */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                <span className="font-semibold text-orange-700">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug tracking-tight mb-3">
                {post.title}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 flex-1 line-clamp-4">
                {post.summary}
              </p>

              {/* Author & Action footer */}
              <div className="pt-4 border-t border-orange-200/60 flex items-center justify-between gap-2 mt-auto">
                <div className="text-xs">
                  <div className="font-semibold text-neutral-950">{post.author}</div>
                  <div className="text-[11px] text-neutral-500 truncate max-w-[170px]">{post.authorRole}</div>
                </div>

                <button
                  type="button"
                  onClick={() => onReadPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 hover:text-orange-700 active:text-neutral-950 p-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 rounded"
                  aria-label={`Llegir l'article: ${post.title}`}
                >
                  <span>Llegir</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
