'use client';

import Image from 'next/image';

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const SkillCard = ({ icon, title, description, className = '' }: SkillCardProps) => {
  return (
    <div className={`p-6 rounded-lg border surface-base ${className}`}>
      <div className="mb-4">
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <Image
            src={`/images/home/skills/${icon}`}
            alt=""
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
        <h3 className="text-xl font-semibold content-strong mb-3 leading-tight">
          {title}
        </h3>
      </div>
      <p className="content-default leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      icon: 'skill_research.svg',
      title: 'User Research and Product Strategy',
      description: 'Diving deep into user needs and aligning it to product is key. I have designed and build products and services from zero to one. Technology is great but useless if people you build for can\'t use it.',
      className: 'col-span-2 row-span-3 md:col-span-1 md:row-start-1 md:col-start-1'
    },
    {
      icon: 'skill_prototype.svg',
      title: 'Prototyping and Experimentation',
      description: 'I strongly believe the need to test the biggest assumptions with prototypes. Start small, fail fast and learn from it. The lessons we learn will bring us closer to the next big idea.',
      className: 'col-span-2 row-span-3 md:col-span-1 md:row-start-2 md:col-start-2'
    },
    {
      icon: 'skill_design.svg',
      title: 'User Experience and Design',
      description: 'A great user experience with intuitive interface design can guide your users and build trust with your customers. Help users achieve their goals through your product and the users will come back for more.',
      className: 'col-span-2 row-span-3 md:col-span-1 md:row-start-4 md:col-start-1'
    },
    {
      icon: 'skill_system.svg',
      title: 'Design Systems and UX Engineering',
      description: 'Supercharge your product team with an effective design system. My experience in frontend engineering helps me work seamlessly with the development team to translate vision into functional and delightful experiences.',
      className: 'col-span-2 row-span-3 md:col-span-1 md:row-start-5 md:col-start-2'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-1">
            <div className="mb-8 lg:mt-8">
              <h2 className="text-3xl md:text-5xl max-w-md leading-tight mb-8 tracking-tight content-primary font-heading">
                Skills and Expertise
              </h2>
              <div className="space-y-6 max-w-xl lg:pr-8 leading-relaxed content-default">
                <p>
                  Full stack designer who can code, with experience in end to
                  end design process. Specialises in prototyping, designing
                  interactions and design systems.
                </p>
                <p>
                  I love anything design and tech! And my dream is to become a
                  UX Unicorn. Also, I ❤️ CSS!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:grid-rows-8">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  className={skill.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;