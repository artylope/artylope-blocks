import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, description, centered = false }: SectionHeaderProps) => {
  const alignmentClass = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`container max-w-5xl mx-auto py-12 ${alignmentClass}`}>
      {subtitle && (
        <div className="text-primary-600 font-medium text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </div>
      )}
      <h2 className="content-strong font-bold text-3xl md:text-4xl mb-4">
        {title}
      </h2>
      {description && (
        <div className="text-lg leading-relaxed content-default max-w-3xl mx-auto">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;