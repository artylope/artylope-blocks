import { ReactNode } from 'react';

interface FullContainerProps {
  heading?: string;
  children: ReactNode;
}

const FullContainer = ({ heading, children }: FullContainerProps) => {
  return (
    <div className="container mx-auto py-8">
      {heading && (
        <div className="mb-8">
          <h1 className="content-strong font-bold text-3xl">{heading}</h1>
        </div>
      )}
      <div className="grid grid-cols-12 gap-x-4 md:gap-x-10">
        <div className="col-span-12">
          <div className="leading-relaxed content-default">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FullContainer;