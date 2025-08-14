'use client';

import Image from 'next/image';

interface MetricCardProps {
  icon: string;
  number: string;
  append?: string;
  description: string;
}

const MetricCard = ({ icon, number, append = '', description }: MetricCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={`/images/home/metrics/${icon}`}
            alt=""
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold content-primary">
          {number}
        </span>
        <span className="text-2xl md:text-3xl font-bold content-primary">
          {append}
        </span>
      </div>
      
      <p className="text-sm md:text-base content-default leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
};

const MetricSection = () => {
  const metrics = [
    {
      icon: 'metric_star.svg',
      number: '14',
      append: '',
      description: 'Years of Experience in Design and Tech'
    },
    {
      icon: 'metric_rocket.svg', 
      number: '12',
      append: '',
      description: 'Products launched in the last 5 years'
    },
    {
      icon: 'metric_bulb.svg',
      number: '999',
      append: '+',
      description: 'Random ideas popping in the head'
    },
    {
      icon: 'metric_tea.svg',
      number: '2359', 
      append: '+',
      description: 'Cups of Green milk tea without pearls drank'
    }
  ];

  return (
    <section className="relative py-16 md:py-24">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-background to-surface-backdrop -skew-y-1 transform origin-top-left"></div>
      
      <div className="relative container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              number={metric.number}
              append={metric.append}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricSection;