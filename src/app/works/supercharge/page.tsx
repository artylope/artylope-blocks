'use client';

import WorkTemplate from '@/app/components/WorkTemplate';
import {
  Default,
  FullContainer,
  Quote,
  Impact,
  SectionHeader
} from '@/app/components/WorkTemplate/ContentBlocks';
import {
  ImpactMetric,
  TimelineItem,
  FeatureItem
} from '@/app/components/WorkTemplate/MiniBlocks';
import Image from 'next/image';

export default function SuperchargeWork() {
  return (
    <WorkTemplate slug="supercharge">
      <Default heading="Problem Statement">
        <p>
          Having worked on multiple products (without centralised design
          support), one of my biggest challenge is to quickly dive in into user
          flows and prototyping without worrying too much about low level
          design. Often, what might happen is wasting time designing from
          scratch or spending time looking and cobbling together some random
          components. I want to spend more time on the flow instead where the
          return of investment is the highest in terms of user experience.
        </p>
        <p>
          In order to work more effectively, a good flexible base design system
          must be in place. Like how the creators of Tailwind CSS puts it in
          their book &quot;Refactoring UI&quot;...
        </p>
        <Quote author="Tailwind CSS Creators">
          <p className="!my-0">
            The more systems you have in place, the faster you&apos;ll be able to
            work and the less you&apos;ll second guess your own decisions. You&apos;ll
            want systems for things like font-sizes, colors, borders etc. and
            anything else you run into where it feels like you&apos;re laboring over
            a low level design decision... try to avoid having to make the same
            minor decision twice.
          </p>
        </Quote>
        <p className="mt-8">
          At AWS Professional Services, the consulting arm where I am based,
          designers lack a non-opinionated minimalist design system that I can
          quickly leverage and work from. The internal Polaris Design System is
          designed for AWS console and was hard to customise towards the clients
          branding. Many of the consulting projects are only few weeks long, and
          we often rush into development. Design must always ideate, prototype,
          test and be ahead of development, and this means that if I can go
          through my cycles at a faster rate and at a higher fidelity with less
          effort, I will be able to uncover more insights and communicate with
          dev teams and clients earlier and more effectively. Hence, I
          repurposed a design system project, initially intended as a personal
          exploratory project, into a multi-brand starter design system.
        </p>
      </Default>

      <Default heading="The Solution">
        <p>
          I created a flexible base design system to serve as a starter system
          to give designers a headstart and supercharge designers working in
          multi-projects, fast-paced environment that suits my work flow with
          semantic global styles and commonly used components.{' '}
        </p>
      </Default>

      <Default heading="Process">
        <p>
          I studied and referenced other design systems such as{' '}
          <a
            href="https://carbondesignsystem.com/"
            target="_blank"
            rel="noreferrer"
          >
            Carbon (IBM)
          </a>
          ,
          <a href="https://atlassian.design/" target="_blank" rel="noreferrer">
            ADS (Atlassian)
          </a>
          ,{' '}
          <a
            href="https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/"
            target="_blank"
            rel="noreferrer"
          >
            Apple Human Interface Guidelines
          </a>
          ,{' '}
          <a
            href="https://material.io/design/introduction"
            target="_blank"
            rel="noreferrer"
          >
            Material UI (Google)
          </a>
          ,{' '}
          <a href="https://ant.design/" target="_blank" rel="noreferrer">
            Ant Design
          </a>{' '}
          and many other brand agnostic systems such as{' '}
          <a href="https://tailwindui.com/" target="_blank" rel="noreferrer">
            Tailwind UI
          </a>{' '}
          <a
            href="https://www.untitledui.com/"
            target="_blank"
            rel="noreferrer"
          >
            Untitled UI
          </a>
          ,{' '}
          <a
            href="https://www.thedesignership.com/products/figma-design-system"
            target="_blank"
            rel="noreferrer"
          >
            Shipfaster UI
          </a>
          , <a href="https://www.uiprep.com/">UI Prep</a>.
        </p>
      </Default>

      <div className="container mx-auto pt-20 pb-32">
        <div className="flex flex-col lg:flex-row w-full">
          <TimelineItem
            phase="Phase 1"
            title="Research and Discovery"
            description="As part of self-learning, I studied multiple design systems and collected styles and components in a GitBook for reference. I also researched about how people create typographic systems and color systems."
            duration="Jan - Jun 2021 • 6 months"
          />
          <TimelineItem
            phase="Phase 2"
            title="Design and Ideation"
            description="I design and create the components in Figma and test if they made sense in different states and scenarios.  I practised my typograhy skills and took Shift Nudge, a UI course by Matt D Smith. In July, I joined AWS as a design architect."
            duration="Jun - Nov 2021 • 6 months"
          />
          <TimelineItem
            phase="Phase 3"
            title="Prototyping and Testing"
            description="While working on my consulting projects at AWS, I saw the opportunity to test the design system and the components. Some of the projects was dashboard, data tables heavy, while others had forms layout to test my input types."
            duration="Nov 2021 - Mar 2022 • 5 months"
          />
          <TimelineItem
            phase="Phase 4"
            title="Design and Test"
            description="As I explored with more projects, I get better understanding of how best to structure components. I continue to test and improve the components over time across multiple projects and update the system with latest Figma features as good practice."
            duration="Mar - June 2022 • 4 months"
            isLast={true}
          />
        </div>
      </div>

      <Default heading="My Role">
        <p>
          I worked on this project alone while working on my other projects at
          AWS and use the other projects as test bed for hardening this design
          system.
        </p>
        <p>
          This concept of a brand agnostic design system is not new and there
          are a ton of great design systems out there where I can leverage and
          just use. I tried them but I like some parts of each, and didn&apos;t
          like some parts of each. For example, like how many color stops and
          what is their Saturation and Brightness, how some variants are not the
          way I want it, how components are structured, or how certain elements
          look etc. In the end, I decided to give making one a shot and the more
          I try, the more I learn and the more opinions I have about how things
          should be set up.
        </p>
      </Default>

      <Impact
        heading="Fun Stats"
      >
        <ImpactMetric
          value="6"
          unit=""
          label={`No. of Projects tested with`}
        />
        <ImpactMetric
          value="8"
          unit=""
          label={`Months taken to develop the system`}
        />

        <ImpactMetric
          value="10"
          unit="x"
          label={`Speed improvement for future projects`}
        />
      </Impact>

      <div className="py-32">
        <SectionHeader
          title="Guiding Principles"
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/principles_consistentdesign.svg"
              imageWidth={48}
              imageHeight={48}
              title="Consistent and minimalist Design Language"
              description="Constructed based on design principles such as contrast, balance, proportion, hierachy, repetition, alignment, white space and Gestalt principles like law of similarity, proximity,  etc... to create visually appealing and functional design."
            />
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/principles_testedpatterns.svg"
              imageWidth={48}
              imageHeight={48}
              title="Tried and Tested UI and UX Patterns"
              description="Many design patterns that are present in today's apps are heavily tested by users to arrive at its current state. I consolidated user-friendly patterns across these widely used system and incorporated them."
            />

            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/principles_dogfood.svg"
              imageWidth={48}
              imageHeight={48}
              title="Dogfooding my own Design System"
              description="I must able to use this design system for my own practice and workflow. To date, I have tested this system to design and redesign 4 products and multiple presentations."
            />
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/principles_iterations.svg"
              imageWidth={48}
              imageHeight={48}
              title="Continuous Iterating and Improvements"
              description="I have rebuilt this system twice after learning from my mistakes around component structures such having base master component with many hidden layers. "
            />
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/principles_learningbest.svg"
              imageWidth={48}
              imageHeight={48}
              title="Learning from the best"
              description="Building this design system gave me the opportunity to study industry's best design systems in depth and practise my design skills deeply, systematically and rigourously."
            />
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/principles_figmalatest.svg"
              imageWidth={48}
              imageHeight={48}
              title="Taking advantage of latest Figma's feature"
              description="Levarage on Figma's updated feature such as Autolayout 4.0, Variants and Community Plugins so that I can continue to learn the fantastic tool and stand on the shoulders of the talented community"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-32">
        <SectionHeader
          title="Main Features"
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 xl:gap-28 pt-8">
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/features_buildingblocks.png"
              imageWidth={360}
              imageHeight={340}
              title="Solid base building blocks"
              description="Carefully crafted commonly used base atomic components such as buttons, inputs, badges, data cells, dropdowns in different variants, sizes and states to be easily swapped in complex web application designs."
            />
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/features_globalstyles.png"
              imageWidth={360}
              imageHeight={340}
              title="Customisable Global Styles"
              description="Built with soft 4px grid system, extensive scalable typographic system, semantic 11-steps color system and effect styles. These can be be customised to any look and feel and the components will be updated with the new look."
            />
            <FeatureItem
              imagePosition="top"
              image="/works/supercharge/img/points/features_resources.png"
              imageWidth={360}
              imageHeight={340}
              title="Ready to use resources"
              description="Preloaded with popular icon libraries (Feather Icons, Box Icons, Hero Icons and more), royalty-free avatar stock photos that represent people from diverse cultures and logos of familar brands to allow for immediate use."
            />
          </div>
          <div className="text-xs text-neutral-300">
            Illustrations modified from freepik.com
          </div>
        </div>
      </div>

      <div className="py-32">
        <Default heading="Challenges">
          <div className="space-y-8">
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/challenges_limitedtesting.svg"
              imageWidth={48}
              imageHeight={48}
              title="Limited feedback and testing"
              description="As I am doing this alone and testing this within the boundaries of my own knowledge and users of a couple of projects, I am aware that many of these are not fully tested and will need more testing continuous improvement."
            />
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/challenges_dsadoption.svg"
              imageWidth={48}
              imageHeight={48}
              title="Propagating Adoption of Design System"
              description="The team was globally distributed and do not work on same projects. It was difficult to convince the other designers and teams to try it out when I am still developing the design system and have yet to work on the documentation and test with other designers about the usability of the design system."
            />
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/challenges_complib.svg"
              imageWidth={48}
              imageHeight={48}
              title="Lack of Component Library in Code"
              description="I couldn't convince the developers to try building this library but I experimentated with utility base CSS system, Tailwinds on my own. It is highly configurable. By setting up the color, text and  spacing, shadows, borders styles etc, it is definitely possible to create this design system or leverage on a React component library such as Chakra UI which is based off Tailwinds. "
            />
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/challenges_justify.svg"
              imageWidth={48}
              imageHeight={48}
              title="Justifying existence of design system"
              description="Figma was not widely adopted within the Professional Services organisation I am in and many the designers are still working on their own. In a larger context, I needed to advocate importance of design and research in the product development process to non-practioners before I can even sell the value of the system. "
            />
          </div>
        </Default>
      </div>

      <div className="py-16">
        <Default heading="Next Steps">
          <div className="space-y-8">
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/nextsteps_dynamiccolors.svg"
              imageWidth={48}
              imageHeight={48}
              title="Dynamic Color Styles Generator"
              description="I am prototyping a color styles generator in React that is based on the HSB color model to help dynamically generate in exportable Hex codes, CSS variables and design tokens configurable file."
            />
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/nextsteps_darkmode.svg"
              imageWidth={48}
              imageHeight={48}
              title="Dark Mode Support"
              description="I designed mostly in light mode and increasingly UIs needs to have dark mode support to cater to users who prefers dark mode. I am still learning how to design for dark mode and hope to configure the design system such that it is possible to switch to dark mode."
            />
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/nextsteps_accessibility.svg"
              imageWidth={48}
              imageHeight={48}
              title="Designing for accessibility and WCAG compliant"
              description="I tried to design my component states suitable for color blind scenarios with additional distiguishing visual elements but I have yet to test my color choices against a contrast checker in depth to make sure that the darker colors against the light backgrounds are definitely rated AAA compliant. A lot of designing for accessibility requires testing on the frontend with people of different access needs and on devices and scenarios. "
            />
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/nextsteps_designtokens.svg"
              imageWidth={48}
              imageHeight={48}
              title="Setting Up Design Tokens"
              description="The current design system is not built on a centralised design token configuration file concept. This means that I can't change a single &quot;base-border-radius&quot; or &quot;base-spacing&quot; to change the look and feel of the entire design system, I have to change them 1 component at a time."
            />
            <FeatureItem
              imagePosition="left"
              image="/works/supercharge/img/points/nextsteps_libdoc.svg"
              imageWidth={48}
              imageHeight={48}
              title="Component Library and Documentation"
              description="It is difficult to use the design system in full form when it lacks a ready react component library  and documentations that other designers and developers can refer refer and use. It will be great if I can build this or contribute to a react component library one day to inch closer to my vision. "
            />
            <p className="pt-4">
              That said, I am not naive, this will require an incredible amount of
              work and maintenance. Talk is cheap. It is more of a vision I guess. I
              can sit here and wait for things to happen but I am a firm believer of
              starting today and even if I don&apos;t get there as planned, I would
              have learnt so much more to inch closer to it.
            </p>
          </div>
        </Default>
      </div>

      <Default heading="Example - Data tables">
        Data tables are a important component of most dashboard project. I
        designed the components to allow for customisation and even inline
        editing!
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/supercharge/img/data_tables.png"
            alt=""
            width={1200}
            height={200}
            className="max-h-[200px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Example - Inputs and buttons ">
        Inputs and buttons are basic atomic components of any UI. Here I used
        the components to quickly create a simple login and signup form.
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/supercharge/img/inputs_and_buttons.png"
            alt=""
            width={1200}
            height={636}
            className="max-h-[636px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Outcome">
        <p>
          I decided to tender my resignation at AWS and didn&apos;t managed to
          advocate the use of the design system further.
        </p>
        <p>
          When I announced my resignation to my co-workers at AWS, I found out
          that there was other effort to develop a brand-agnostic component
          library by a team of engineers who were prototyping solutions on
          behalf of customers and they had needed a front-end React library from
          an engineering point and this would have been a great collaboration
          opportunity. Oh well, life is such.
        </p>
        <p>
          But this design system has been critical in my workflow for the past
          year, I use it as a starter for all my design projects.
        </p>
      </Default>

      <Default heading="Learnings">
        <p>
          I learnt and drilled so much of my design skills through this design
          system. And I will continue to work on it on my own time. I also
          realised the success of a design system hinges on the people-team
          dynamics, support from managers / developers etc.
        </p>
      </Default>

      <Default heading="Personal Opinion">
        {' '}
        <p>
          And this is a just in case... a personal opinon if the endless
          Linkedin-esque arguments about UX ≠ UI comes up yet again.
        </p>
        <Quote author="Yi Xin (myself)">
          <p className="!my-0">
            I completely get the idea that UX is not UI and my intention is not
            to replace important discovery and research phase about user needs
            and problem we are trying to solve by fudging with a nice looking
            user interface. In fact, this design system serves the purpose of
            opening up more discussion about solution fit with users through
            prototyping and testing, and give time back as I get the repetitive,
            time-wasting part of low-level design out of the way.
          </p>
        </Quote>
        <p>
          I don&apos;t enjoy having those discussions about the role definition
          of the different design titles, or whether it is too early to
          introduce high fidelity mocks during ideation phase. I have tried and
          these discussion is pointless as we are still having it in 2022 after
          all these years. I decided that don&apos;t want to find reasons to not
          improve my UI visual skills. I just want to be the best I can be all,
          I want to be good in UX, UI and even front-end if I have the time. I
          am just happy and grateful that I have some time and tools these days
          have improved so much to afford me of such opportunity. I have come
          across too many process/research heavy projects at organisation with
          low UX maturity that cannot afford time for development for design
          systems and having something like this to fallback on repeatedly
          provides great foundation.
        </p>
      </Default>
    </WorkTemplate>
  );
}
