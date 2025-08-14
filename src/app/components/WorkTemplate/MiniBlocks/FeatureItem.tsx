import Image from 'next/image';

interface FeatureItemProps {
  image: string;
  imagePosition?: 'top' | 'left';
  imageHeight?: number;
  imageWidth?: number;
  title: string;
  description: string;
}

const FeatureItem = ({
  image,
  imagePosition = 'left',
  imageHeight = 36,
  imageWidth = 36,
  title,
  description
}: FeatureItemProps) => {
  const layoutStyles = imagePosition === 'top' 
    ? 'flex flex-col mb-12 md:mb-8'
    : 'flex flex-col md:flex-row mb-4 mt-8 md:mt-0 md:mb-8';

  return (
    <div className={layoutStyles}>
      <div
        className="min-h-fit min-w-fit mr-4"
        style={{
          height: imageHeight,
          width: imageWidth,
        }}
      >
        <Image
          src={image}
          alt=""
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col shrink mt-4 md:mt-0">
        <h2 className="content-strong text-2xl md:text-4xl normal-case tracking-normal max-w-[12ch] mb-4 leading-none">
          {title}
        </h2>
        <p className="content-default">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;