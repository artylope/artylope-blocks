'use client';
import React from 'react';
import { BriefcaseBusiness, MapPin } from 'lucide-react';
import {
  SectionBlockTitle,
  SectionBlockContainer,
  EducationBlock,
  ExperienceBlock,
  LikeAndDislikeBlock,
  CommunityBlock,
  MediaMentionBlock,
  SkillsBlock,
  StoryBlock,
} from './components/AboutBlocks';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const Intro = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="flex flex-col gap-8 justify-center items-center lg:flex-row">
          <div className="-ml-2 w-fit">
            <div className="w-[12rem] h-[12rem] rounded-full bg-zinc-100 border-4 border-white shadow-lg"></div>
          </div>

          <div className="flex flex-col gap-1 justify-center items-center w-full lg:justify-center lg:items-start">
            <h2 className="text-2xl font-semibold content-strong">
              Ang Yi Xin
            </h2>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex gap-2">
                <div className="flex justify-center items-center h-6">
                  <BriefcaseBusiness className="w-4 h-4 content-default" />
                </div>
                <p className="content-default">
                  Design Engineer, Lead Product Designer
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex justify-center items-center h-6">
                  <MapPin className="w-4 h-4 content-default" />
                </div>
                <p className="content-default">Singapore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full lg:col-span-4 lg:col-start-9 lg:justify-start">
        <button className="px-4 py-2 font-semibold text-white rounded bg-primary-500">
          Download Resume
        </button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Header />
      <section className="grow">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 mx-auto my-8 max-w-6xl text-zinc-600">
            <Intro />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 mx-auto my-8 max-w-6xl text-zinc-600">
            {/* 2 col details */}
            <div className="grid gap-8 my-4 lg:grid-cols-12">
              {/* left col details - main + story */}
              <div className="flex flex-col gap-y-12 lg:col-span-7">
                <div>
                  <SectionBlockTitle title="Background" />
                  <div className="space-y-8 leading-relaxed content-strong">
                    <p>
                      Hi, I’m Yi Xin, a full-stack Product Designer passionate
                      about crafting seamless, end-to-end user experiences. With
                      15 years of experience across industries like government,
                      healthcare, transport, enterprise, finance and gaming, I
                      get fulfillment from solving complex problems and
                      translating them impactful simple solutions.
                    </p>
                    <p>
                      Currently, I am a lead product designer at Open Government
                      Products. Previously, I worked at Stripe and Amazon Web
                      Services. Most recently, I led design for gov.sg SMS
                      Sender ID. I have also worked on Parking.sg, Covid-19
                      Vaccination Appointment System and RedeemSG CDC Vouchers
                      system in the Singapore government.{' '}
                    </p>
                    <p>
                      Along the way, I picked up engineering skills to better
                      follow through with my ideas and ensure they’re executed
                      to their full potential. I love building prototypes,
                      bringing concepts to life, and creating intuitive designs
                      that empower users to achieve their goals effortlessly. My
                      greatest joy is knowing that users can navigate the
                      products I design without even thinking about it — they
                      simply work.
                    </p>{' '}
                    <p>
                      This website is built using Figma, React, NextJS, Tailwind
                      CSS and SCSS. My lifetime goal is grow my skills from
                      design to code and be able to build my own products. To
                      solve my own workflow inefficencies, I also built a color
                      tool called Colormeleon and the Figma Plugin Singapore
                      Data.
                    </p>{' '}
                    <p>
                      My dream role is one that lets me explore in both design
                      and code to solve problem and not be defined by the title
                      of the role or hybrid role like UX engineer, design
                      technologist, design engineer, design system engineer etc,
                      but I haven&apos;t seen much of such roles in Singapore.
                    </p>
                    <p>
                      Outside of design and code, I enjoy running, swimming and
                      eating mala hotpot. I also like to spend time with my
                      husband and son.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionBlockTitle title="Experience" />
                  <SectionBlockContainer>
                    <ExperienceBlock
                      company="Government Technology Agency of Singapore"
                      roles={[
                        {
                          title:
                            'Lead Product Designer, Open Government Products',
                          period: '2023 - present',
                        },
                      ]}
                    />
                    <ExperienceBlock
                      company="Stripe"
                      roles={[
                        {
                          title: 'Senior Product Designer',
                          period: '2022',
                        },
                      ]}
                    />
                    <ExperienceBlock
                      company="Amazon Web Services"
                      roles={[
                        { title: 'Design Architect', period: '2021-2022' },
                      ]}
                    />
                    <ExperienceBlock
                      company="Government Technology Agency of Singapore"
                      roles={[
                        {
                          title:
                            'Senior Product Designer, Open Government Products',
                          period: '2019-2021',
                        },
                        {
                          title: 'UX Designer, Data Science and AI Division',
                          period: '2014-2019',
                        },
                      ]}
                    />
                    <ExperienceBlock
                      company="Singapore University of Technology and Design"
                      roles={[
                        {
                          title: 'Digital Content Strategist',
                          period: '2013-2014',
                        },
                        {
                          title: 'Game Artist/ Designer',
                          period: '2012-2013',
                        },
                      ]}
                    />
                    <ExperienceBlock
                      company="Singapore-MIT Gambit Game Lab"
                      roles={[
                        {
                          title: 'Game Artist/ Designer',
                          period: '2009-2012',
                        },
                      ]}
                    />
                  </SectionBlockContainer>
                </div>
                <div>
                  <SectionBlockTitle title="The Long-Winded Version of my Origin Story" />
                  <SectionBlockContainer>
                    <div className="flex flex-col">
                      <StoryBlock
                        year="Before 1998"
                        title="Discovering the joy of creating"
                        story="As a kid, I enjoyed watching Disney animation, doodling and using lego blocks to build my own dream house. I also enjoyed exploring digital publishing software like Print Shop Delux and Print Artist. Going to library to use the internet to click through Yahoo's directory was the highlight of the week."
                        position="start"
                      />
                      <StoryBlock
                        year="1999-2004"
                        title="Diving into the world of internet and new media"
                        story=" I spent a lot time building cities and dream houses in Sim City and the Sims. I spent hours in Powerpoint and Photoshop to make my own designs and clipart animation. I made websites using FrontPage, Geocities and Homestead. I also used Macromedia Director and Flash to make interactive sites like those kiosks we saw at museums. I joined the Photography and Audio Visual club in school to make my own horror movies. Art and design became my favourite subject in school. Iframes, inline styles and HTML tables were the coolest."
                      />
                      <StoryBlock
                        year="2008"
                        title="First Game Dev Internship"
                        story="While pursing a Bachelor of Fine Arts in Digital Animation at NTU School of Art, Design and Media, I did a 2 month game development internship at MIT with the GAMBIT Game Lab. That's where I first worked as a game artist with PMs and programmers and made my first game - a Facebook social game. I got hooked and participated in Game Dev Hackathons."
                      />
                      {/* to add links to SE and ND*/}
                      <StoryBlock
                        year="2009-2012"
                        title="First Game and Web Dev Job"
                        story="I continued working for the game lab that I interned at to make more iOS and Facebook Flash social games. I also designed and built the websites to publicise the games."
                      />
                      {/* to add links to OUL*/}
                      <StoryBlock
                        year="2013-2014"
                        title="Major pivot to Design Thinking and UX"
                        story="I realised that I enjoyed making user interfaces (UIs), heads up display (HUDs), feedback animation and websites more than the storytelling & character art of game development itself. While making games was fun, I wanted to go beyond making nice looking things, I wanted to solve real world problems and make products that can make people's lives better. I started exploring 'UX', 'data-driven apps' and 'design thinking' and applied to join the Singapore government as a designer."
                      />
                      {/* to add links to Beeline and Parking and jarvis and vault */}
                      <StoryBlock
                        year="2015-2019"
                        title="Tech for Public Good"
                        story="In the government, I realised that what I learnt at game development was transferable to app and product development - prototyping, user testing and making sure your users enjoy using your products was key. It was an awesome feeling being able to solve everyday problems with small but impactful solutions."
                      />
                      <StoryBlock
                        year="2019"
                        title="Software Engineering Immersive"
                        story="Even though, I knew some HTML and CSS and had rough concepts of how everything came together. There was always the gap between what I design and what gets implemented. I feel helpless and dissatisfied with the poor translation of vision. What is feasible, what are the trade offs, which features can give us the best ROI, how can I realise the vision are questions I ask a lot. This curiosity led me to picking up Javascript and enrolled in General Assembly's Software Engineering Bootcamp full time for 3 months. I learnt about Javascript, NodeJS, Ruby on Rails, React. There was no turning back, I knew I wanted to both design and code to realise the ideas I have."
                      />
                      {/* to add links to Isomer, Vault, Redeem, Distribute, ART, Vaccine Ops and Pay */}
                      <StoryBlock
                        year="2019-2021"
                        title="More tech for public good + scaling design"
                        story="As a senior designer on the team, I work on products and help scale the design team through improving processes and running design ops. I help move the team to from Sketch + Invision + Zeplin + Abstract to a full Figma pipeline. I also begin to work more on frontend, to bridge the gap between design and development. Tech for public good was fulfilling and Covid-19 sped up digitisation but all the rush left me very burnt out after 7 years in government. I needed time to explore other ways of doing tech and design so I left the government."
                      />
                      {/* to add links to Hyperautomation and AudioScopeio, Supercharge*/}
                      <StoryBlock
                        year="2021-2022"
                        title="Working Backwards @ Amazon Web Services"
                        story="I joined AWS. I learnt and practised Working Backwards, Amazon flavoured design thinking and innovation process. As a design architect, I innovate and design on behalf of enterprise customers such as BHP, Origin, Woodside and HSBC. I created a multi-brand design system to supercharge prototyping and development for our customers."
                      />
                      <StoryBlock
                        year="Aug - Nov 2022"
                        title="Product Design @ Stripe"
                        story="I have always been a fan of Stripe, having used their products when designing payment products in the government. At Stripe, I get the opportunity to design the disputes, refunds and the APAC onboarding experience and was amazed by the organisation's care for product quality! Unfortunately, my journey at Stripe ended in Nov 2022 abruptly due to the company-wide mass layoff. "
                      />
                      <StoryBlock
                        year="Nov 2022 - Mar 2023"
                        title="On sabbatical"
                        story="I need a break and I love making and building and so I am just designing for fun. Back to basics. Figma, design tokens, React, NextJS, D3 Yay! And of course spend time with my precious family."
                      />
                      <StoryBlock
                        year="Present Day"
                        title="Back to tech for public good"
                        story="I missed my team and the meaningful project we do so I went back to the government."
                        position="end"
                      />
                    </div>
                  </SectionBlockContainer>
                </div>
              </div>
              {/* right col details - education, skills, media mentions, likes and dislikes */}
              <div className="flex flex-col gap-y-12 lg:col-span-4 lg:col-start-9">
                <div>
                  <SectionBlockTitle title="Education" />
                  <SectionBlockContainer>
                    <EducationBlock
                      title="Design Sprint Masterclass"
                      year="2021"
                      source="AJ & Smart"
                    />
                    <EducationBlock
                      title="Certified Cloud Practioner"
                      year="2021"
                      source="Amazon Web Services"
                    />
                    <EducationBlock
                      title="Designing for Accessibility"
                      year="2021"
                      source="Udemy"
                    />
                    <EducationBlock
                      title="Software Engineering Immersive"
                      year="2019"
                      source="General Assembly Singapore"
                    />
                    <EducationBlock
                      title="UX Certificate"
                      year="2017"
                      source="Nielsen Norman Group (NN/g)"
                    />
                    <EducationBlock
                      title="User Experience Design Immersive"
                      year="2015"
                      source="General Assembly Singapore"
                    />
                    <EducationBlock
                      title="Visual Communication Specialist"
                      year="2010"
                      source="General Assembly Singapore"
                    />
                    <EducationBlock
                      title="Bachelor of Fine Arts (Digital Animation)"
                      year="2009"
                      source="Nanyang Technological University (NTU)"
                    />
                  </SectionBlockContainer>
                </div>
                <div>
                  <SectionBlockTitle title="Skills" />
                  <SectionBlockContainer>
                    <SkillsBlock
                      title="Design"
                      tags={[
                        'User flows',
                        'Wireframing',
                        'UI design',
                        'Visual design',
                        'Interaction design',
                        'Design systems',
                        'Rapid prototyping',
                        'Motion design',
                      ]}
                    />
                    <SkillsBlock
                      title="Development"
                      tags={[
                        'HTML/CSS/JS',
                        'React',
                        'NextJS',
                        'Tailwind CSS',
                        'TypeScript',
                        'SCSS',
                        'Lottie',
                        'Framer Motion',
                        'Radix',
                        'Shadcn UI',
                        'Git',
                      ]}
                    />
                    <SkillsBlock
                      title="Research/UX"
                      tags={[
                        'Journey maps',
                        'Design thinking',
                        'Design sprints',
                        'User research',
                        'User testing',
                        'User interviews',
                        'Personas',
                        'Workshop facilitation',
                      ]}
                    />
                    <SkillsBlock
                      title="Tools"
                      tags={[
                        'Illustrator',
                        'After Effects',
                        'Figma',
                        'Jitter',
                        'Photoshop',
                        'Premiere Pro',
                        'Figjam',
                        'Cursor',
                        'Claude Code',
                        'VSCode',
                      ]}
                    />
                  </SectionBlockContainer>
                </div>
                <div>
                  <SectionBlockTitle title="Community" />
                  <SectionBlockContainer>
                    <CommunityBlock
                      title="Rare Delegate"
                      year="2022"
                      source="Google Leadership Academy"
                    />
                    <CommunityBlock
                      title="Enhanced Art Programme Speaker"
                      year="2022"
                      source="Ministry of Education, Singapore"
                    />
                    <CommunityBlock
                      title="Mentoring"
                      year="2022"
                      source="Personal volunteering"
                    />
                  </SectionBlockContainer>
                </div>
                <div>
                  <SectionBlockTitle title="Yay" />
                  <SectionBlockContainer>
                    <LikeAndDislikeBlock
                      isLike={true}
                      tags={[
                        'Mala',
                        'Green Milk Tea',
                        'Nature hikes',
                        'Interior design',
                        'Beautiful, intuitive UIs',
                        'Photography',
                        'Focus on craft',
                        'Run',
                        'Small, empowered teams',
                        'Building things',
                      ]}
                    />
                  </SectionBlockContainer>
                </div>
                <div>
                  <SectionBlockTitle title="Nay" />
                  <SectionBlockContainer>
                    <LikeAndDislikeBlock
                      isLike={false}
                      tags={['Office politics', 'Corporate theatre']}
                    />
                  </SectionBlockContainer>
                </div>
                <div>
                  <SectionBlockTitle title="Media Mentions" />
                  <SectionBlockContainer>
                    <MediaMentionBlock
                      title="[冠状病毒19] 政府科技局开发两款应用程序 简易抗疫物资分发过程"
                      translation="[COVID-19] GovTech develops 2 apps to simplify the distribution process"
                      link="https://www.youtube.com/watch?v=MgnlZ7_Qk7s"
                      year="2020"
                      source="Channel 8 News Singapore"
                    />
                    <MediaMentionBlock
                      title="Women in GovTech 2020"
                      link="https://govinsider.asia/digital-gov/ang-yi-xin-product-designer-open-government-products-singapore-women-in-govtech-2020/"
                      year="2020"
                      source="GovInsider"
                    />
                    <MediaMentionBlock
                      title="Meet the GovTech team that built the Singapore Police Force’s JARVIS"
                      link="https://www.tech.gov.sg/media/technews/meet-the-govtech-team-that-built-the-singapore-police-force-jarvis"
                      year="2019"
                      source="GovTech News"
                    />
                    <MediaMentionBlock
                      title="This GovTech team is the reason you no longer have to use paper parking coupons"
                      link="https://www.tech.gov.sg/media/technews/this-govtech-team-is-the-reason-you-no-longer-have-to-use-paper-parking-coupons"
                      year="2018"
                      source="GovTech News"
                    />
                    <MediaMentionBlock
                      title="科技系民 - 停车不怕没固本！Parking.sg 应用程序使用小贴士"
                      translation="No more worries about coupons, tips for using Parking.sg app"
                      link="https://www.facebook.com/watch/?v=1862649630420011"
                      year="2017"
                      source="Channel 8 News Singapore"
                    />
                    <MediaMentionBlock
                      title="Women in GovTech Special Report 2015"
                      link="https://govinsider.asia/inclusive-gov/ang-yi-xin-ux-designer-at-ida-singapore/"
                      year="2015"
                      source="GovInsider"
                    />
                  </SectionBlockContainer>
                </div>
              </div>
            </div>
            {/* 2 col details */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
