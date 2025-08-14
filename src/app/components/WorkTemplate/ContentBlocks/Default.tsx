import { ReactNode } from 'react';

interface DefaultProps {
  heading?: string;
  children: ReactNode;
}

const Default = ({ heading, children }: DefaultProps) => {
  return (
    <div className="container max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-12 gap-x-4 md:gap-x-10">
        <div className="col-span-12 md:col-span-3 lg:col-span-3">
          {heading && <h3 className="content-strong font-semibold text-lg mb-4">{heading}</h3>}
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 md:col-start-4 lg:col-start-5 leading-relaxed content-default">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Default;