'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="lg:p-8 p-4 rounded-lg border surface-base">
      <div className="mb-6">
        <p className="content-default leading-[1.75em]">
          &quot;{testimonial.content}&quot;
        </p>
      </div>

      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-lg font-semibold text-primary-600">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold content-strong">
            {testimonial.name}
          </div>
          <div className="text-sm content-default">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Nicholas Swanson",
      role: "Product Design Manager",
      company: "Stripe",
      content: "Yi Xin ramped up on a complex product space where she was the sole owner and delivered multiple key projects. She built design and cross-functional relationships quickly with a distributed team, led user research to evaluate hypotheses, explored and iterated on multiple potential solutions, and ultimately delivered high quality work. Yi Xin was a model designer, who worked at both a strategic and tactical level. While Yi Xin was affected by the company-wide layoffs, I would gladly hire Yi Xin again, and Stripe will miss her presence and impact."
    },
    {
      name: "Ishan Virk",
      role: "Product Manager",
      company: "Stripe",
      content: "Yi Xin is an exemplary design partner for any PM. During our time working together at Stripe, she ramped up on a complicated product landscape through her own curiosity and brought in an empathetic user view to curate high-impact insights for product improvements. She had a strong bias towards action and consistently took initiative to ensure her designs were backed by prioritized user feedback, technical feasibility and business impact. Her unique talents include her high energy, positivity and knowing when to strike the balance between being scrappy and very thorough. I'd be more than happy to work with her again given the opportunity!"
    },
    {
      name: "Zdenka Benic",
      role: "Engagement Manager",
      company: "Amazon Web Services",
      content: "It was an absolute pleasure working with Yi. She has an inquisitive and creative mind and does not shy away from a challenge. Yi inherited previous teams' work, which is never easy. She very quickly engaged the end customer, started digging deeper and reset the direction and expectations, to meet customer design objectives. Yi's creativity and approach to customer obsession helped us get this engagement across the line. I feel incredibly proud I had an opportunity to work alongside Yi."
    },
    {
      name: "Liu Feng Yuan",
      role: "CEO",
      company: "Basis AI",
      content: "Yi Xin was an excellent designer and proactive team player. Her obsession with the success of the product and the customer experience was a key factor in the success of what were both flagship projects for the team. These two products demonstrated that GovTech could design well-designed, usable digital solutions that managed to gain traction and popularity amongst a significant portion of the user base."
    },
    {
      name: "Leighton Lilford",
      role: "Software Engineer",
      company: "Amazon Web Services",
      content: "Yi's user designs and mockups have been invaluable in our project. From very little context she was able to deliver insight into changes we could make to our product to better the customer's experience."
    },
    {
      name: "Li Hongyi",
      role: "Director",
      company: "Open Government Products, Govtech Singapore",
      content: "Yi Xin is a fully proficient product designer who has a deep understanding of operational needs. Her coding skills allow her to work extremely smoothly with the engineering team, and she rapidly adapts her design approach to different ground situations. She goes beyond producing good designs and steers the team towards building a good product."
    },
    {
      name: "Sarah Salim",
      role: "Lead Designer",
      company: "Grab",
      content: "Yi Xin is one of the most dedicated designers I've worked with, always willing to put in that extra effort whenever you need it. Her tenacity and drive to build tech for public good is contagious. She inspires me to become a product designer when I was transitioning from graphic design. Together over the years, we expanded the design team, set up practices, cultivate culture and advocate design in the team. Her zeal in learning code, her curiosity and hunger to keep learning is one of the many qualities she possesses that I admire."
    }
  ];

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    loop: true,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { align: 'center' }
    }
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl tracking-tight content-primary font-heading">
            Testimonials
          </h2>
        </div>

        <div className="relative w-full mx-auto md:px-8 lg:px-12">
          {/* Mobile Navigation buttons (left aligned) */}
          <div className="flex md:hidden justify-start items-center mb-6 px-4">
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`p-2 rounded-full border surface-base transition-all ${canScrollPrev ? 'hover:surface-backdrop' : 'opacity-50 cursor-not-allowed'
                  }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`p-2 rounded-full border surface-base transition-all ${canScrollNext ? 'hover:surface-backdrop' : 'opacity-50 cursor-not-allowed'
                  }`}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop Navigation buttons (centered) */}
          <div className="hidden md:flex justify-center items-center mb-8">
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`p-2 rounded-full border surface-base transition-all ${canScrollPrev ? 'hover:surface-backdrop' : 'opacity-50 cursor-not-allowed'
                  }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`p-2 rounded-full border surface-base transition-all ${canScrollNext ? 'hover:surface-backdrop' : 'opacity-50 cursor-not-allowed'
                  }`}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex md:items-center">
              {testimonials.map((testimonial, index) => {
                const isActive = selectedIndex === index;
                const isPrev = selectedIndex === index + 1 || (selectedIndex === 0 && index === testimonials.length - 1);
                const isNext = selectedIndex === index - 1 || (selectedIndex === testimonials.length - 1 && index === 0);
                const isVisible = isActive || isPrev || isNext;

                return (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_40%] px-2 md:px-4 flex items-center"
                  >
                    <div className={`transition-all duration-500 ease-out w-full ${isActive
                      ? 'md:scale-105 md:opacity-100 md:z-20 relative'
                      : isVisible
                        ? 'md:scale-90 md:opacity-60 md:z-10'
                        : 'md:scale-80 md:opacity-30'
                      }`}>
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress indicators (horizontal bars) */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex
                  ? 'bg-primary w-10'
                  : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-primary-600 dark:hover:bg-primary-300 w-6'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;