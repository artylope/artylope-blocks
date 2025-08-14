import { ReactNode } from 'react';

interface QuoteProps {
  children: ReactNode;
  author?: string;
  role?: string;
  company?: string;
}

const Quote = ({ children, author, role, company }: QuoteProps) => {
  return (
    <div className="bg-surface-backdrop py-16">
      <div className="container max-w-4xl mx-auto text-center">
        <blockquote className="text-xl md:text-2xl leading-relaxed content-default italic mb-6">
          &quot;{children}&quot;
        </blockquote>
        {(author || role || company) && (
          <div className="content-strong">
            {author && <div className="font-semibold">{author}</div>}
            {(role || company) && (
              <div className="text-sm content-default">
                {role}{role && company && ', '}{company}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quote;