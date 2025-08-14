import { ReactNode } from 'react';
import Image from 'next/image';

interface ImageLeftProps {
  image: string;
  alt?: string;
  imgWidth?: number;
  imgHeight?: number;
  heading?: string;
  children: ReactNode;
}

const ImageLeft = ({
  image,
  alt = '',
  imgWidth = 1200,
  imgHeight = 1200,
  heading,
  children
}: ImageLeftProps) => {
  return (
    <div className="container max-w-screen-xl mx-auto py-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center items-center mb-8 lg:mb-0">
          <div className="w-full cursor-pointer">
            <Image
              src={image}
              alt={alt}
              width={imgWidth}
              height={imgHeight}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-start mb-8 lg:mb-0">
          {heading && <h3 className="content-strong font-semibold text-xl mb-4">{heading}</h3>}
          <div className="leading-relaxed content-default">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;