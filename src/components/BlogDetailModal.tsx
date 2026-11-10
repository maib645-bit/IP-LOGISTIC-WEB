import React, { useEffect } from 'react';
import { X, Calendar, User, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types/logistics';

interface BlogDetailModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ post, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-article-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-orange-50 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-orange-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-4 sm:p-5 border-b border-orange-200 flex items-center justify-between gap-4 bg-orange-100/60">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-950 uppercase tracking-wider">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-orange-200/60 transition-colors"
            aria-label="Tancar article"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="text-xs text-neutral-500 flex items-center gap-2 mb-2">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Publicat el {post.date}</span>
            </div>
            <h2 id="blog-article-title" className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
              {post.title}
            </h2>
          </div>

          {/* Author Byline */}
          <div className="p-3.5 bg-orange-100/50 border border-orange-200/80 rounded-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-950 text-orange-200 border border-neutral-800 flex items-center justify-center text-sm font-bold shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-950">{post.author}</div>
              <div className="text-[11px] text-neutral-500">{post.authorRole} · Ibáñez Pascual Logístics</div>
            </div>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="p-4 bg-orange-100/70 border border-orange-200/80 rounded-lg text-xs text-neutral-950">
            <strong>Vols assessorament especialitzat per a la teva empresa?</strong> El nostre equip de comerç exterior i representació duanera OEA està a la teva disposició a la ZAL Port de Barcelona.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-orange-200 bg-orange-100/60 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-orange-200 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Tornar al blog</span>
          </button>
        </div>
      </div>
    </div>
  );
};
