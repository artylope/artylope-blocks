'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const IntroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    'design',
    'code', 
    'create',
    'build',
    'simplify', 
    'solve',
    'delight'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative">
      <div className="container py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl lg:text-4xl leading-tight mb-4 content-primary">
              Hello, I am Yi Xin.
            </h1>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-start content-primary">
                <span className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight font-heading mr-3">
                  I love to{' '}
                </span>
                <span className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight font-heading text-primary-600 min-w-[200px]">
                  {words[currentWordIndex]}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-base md:text-lg leading-relaxed content-default max-w-2xl">
              <p>
                I&apos;m a Product Designer & Design Technologist based in
                Singapore. I solve problems, simplify complex ideas and craft
                intuitive experiences. Currently lead product designer at Open
                Government Products, GovTech Singapore.
              </p>
              <p>
                Previously from <strong>Stripe</strong> and{' '}
                <strong>Amazon Web Services</strong>.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="w-full max-w-md">
              <Image
                src="/images/home/phone-intro.png"
                alt="A image of a mobile app design"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;