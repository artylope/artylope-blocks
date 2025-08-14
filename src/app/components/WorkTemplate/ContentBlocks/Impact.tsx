import { ReactNode } from 'react';

interface ImpactProps {
  heading?: string;
  children: ReactNode;
  bgColor?: string;
}

const Impact = ({ heading, children, bgColor = 'bg-primary-50' }: ImpactProps) => {
  return (
    <div className={`${bgColor} py-16`}>
      <div className="container max-w-4xl mx-auto text-center">
        {heading && (
          <div className="mb-8">
            <h2 className="content-strong font-bold text-3xl md:text-4xl">{heading}</h2>
          </div>
        )}
        <div className="text-lg md:text-xl leading-relaxed content-default">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Impact;