'use client';

import WorkTemplate from '@/app/components/WorkTemplate';
import {
  Default,
  FullContainer,
  ImageLeft,
  ImageRight
} from '@/app/components/WorkTemplate/ContentBlocks';
import { ImpactMetric } from '@/app/components/WorkTemplate/MiniBlocks';
import Image from 'next/image';

export default function ParkingsgWork() {
  return (
    <WorkTemplate slug="parkingsg">
      <Default heading="The Problem">
        <p>
          Motorists in Singapore have to tear pre-paid paper coupons to pay for
          parking in some public car parks. They will need to tear many pieces
          if they were to park for a long period of time. If they want to extend
          parking, they will have to run back to their vehicle to tear more
          coupons. It is an outdated and cumbersome solution.
        </p>
        <p>
          We wanted to develop a digital parking system that can replace the
          paper coupons, to give citizens the convenience of being able to pay
          for parking easily and extend parking remotely.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_problem.png"
            alt="Each coupon cover 30 mins of parking - how your car's dashboard will look like if you park for 10 hours"
            width={1200}
            height={750}
            className="max-h-[750px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="The Solution">
        <p>
          In October 2017, we released Parking.sg, a mobile app that allows
          motorists in Singapore pay for parking charges at all coupon-based
          public car parks. The app has these 3 main features.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_solution.png"
            alt=""
            width={1200}
            height={800}
            className="max-h-[800px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Reception">
        <p>
          As of November 2018, less than 1 year after its beta launch, we
          achieved
        </p>
      </Default>

      <div className="container max-w-4xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactMetric
            value="900"
            unit="k"
            label="App downloads"
          />
          <ImpactMetric
            value="8"
            unit="mil"
            label="Parking sessions"
          />
          <ImpactMetric
            value="60"
            unit="%"
            label="Car population usage"
          />
        </div>
      </div>

      <Default heading="Contributions">
        <p>
          8 people in total, 3-4 at any one time (i.e. 1 Product Manager, 2
          Developers and 1 Designer) We also worked with public servants in car
          park operations at the various government agencies. I did most of the
          ux and inital ui design work. Sarah Salim, a fellow designer, defined
          the overall visual design.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_app.gif"
            alt=""
            width={800}
            height={800}
            className="w-full max-w-2xl mx-auto h-auto rounded-lgborder-border-default"
          />
        </div>
      </FullContainer>

      <Default heading="Feature Prioritisation">
        <p>
          There were many features we want to consider, but some will take more
          effort and some will have better return of investment of effort in
          terms of benefits to the users. We plot them on a Ipact vs Effort
          matrix to help focus our attention on the most impoetant features.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_feature_priority.png"
            alt="Feature prioritisation using the impact vs effort matrix"
            width={1200}
            height={900}
            className="max-h-[900px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Key product decisions">
        <p>
          There are some key product decisions that are quite unique to this app
        </p>
        <p>
          <strong>No user accounts</strong>
          <br />
          User accounts has very little value add in the case of the parking
          app. Sure, we lose the ability to track parking history on different
          phones, or possibly the potential of digital wallets, but for this app
          to have high adoption, we need to reduce the barrier of entry. These
          also makes it easier for visitors to Singapore to download and use the
          app immediately. Unlike other types of consumer apps where we want to
          optimise screen time and loyalty, Parking.sg is designed to reduce as
          much interaction as possible to make it trivial for users to download
          and use.
        </p>
      </Default>

      <Default heading="">
        <p>
          <strong> Block-Refund Charging Mechanism</strong> <br />
          We wanted to implement a charging mechanism that is fair to the user.
          User should only pay for what they park, unlike the parking coupons
          that charge users in 30 minutes block. There are 2 ways that this can
          be done. As illustrated below, the block-refund design gives user the
          benefit of per-minute charging.
        </p>
        <p>
          Another incentive of this design is that we will not need to implement
          additional admin systems to perform refunds if users forget to turn
          off their phones.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_block_charging.png"
            alt="Comparison of different digital parking charging mechanism"
            width={1200}
            height={684}
            className="max-h-[684px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="">
        <p>
          <strong> Consolidating sessions into bills</strong> <br />
          Most parking session on average is around an hour which means it cost
          $2.40. Administrative cost to the payment gateways will be high per
          transaction. To reduct this cost, we implemented a batching system
          that batches sessions into bills. This is a more complex concept to
          educate the user. They must be able to associated sessions to bills.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center px-4">
          <Image
            src="/works/parkingsg/img/parking_sessions_to_bills.gif"
            alt="Explaining consolidation of sessions into bills"
            width={1200}
            height={800}
            className="max-h-[800px] w-auto object-contain rounded-lgborder-border-default"
          />
        </div>
      </FullContainer>

      <Default heading="Key design decisions">
        Here are some key design decisions that we keep in mind when designing
        the parking app.
      </Default>

      <ImageLeft
        image="/works/parkingsg/img/design_decisions_01.png"
        imgWidth={800}
        imgHeight={600}
      >
        <h1 className="text-xl font-bold mb-4">The triangular Duration-Time-Cost Structure</h1>
        This is an visual model about how the parking rates are charged that is
        repeated in many screens to create familarity and visual distinction
        that is unique to this app.
      </ImageLeft>

      <ImageRight
        image="/works/parkingsg/img/design_decisions_02.png"
        imgWidth={800}
        imgHeight={600}
      >
        <h1 className="text-xl font-bold mb-4">Main call-to-action button is always at the bottom. </h1>
        This creates consistency and users do not need to think too much what
        they are required of. If there is a secondary action, it will be
        displayed as a link so as not to distract the user.
      </ImageRight>

      <ImageLeft
        image="/works/parkingsg/img/design_decisions_03.png"
        imgWidth={800}
        imgHeight={600}
      >
        <h1 className="text-xl font-bold mb-4">All transient screens are presented as modals with overlay</h1>
        This subconsciously reminds the user that they have yet to complete
        their current action. This is especially important as our screens looks
        simple and similar due to the triangular Duration-Time-Cost Structure
        and a call-to-action button that repeats itself across screen which
        encourages change-blindness.
      </ImageLeft>

      <ImageLeft
        image="/works/parkingsg/img/design_decisions_04.png"
        imgWidth={800}
        imgHeight={600}
      >
        <h1 className="text-xl font-bold mb-4">Parking is the only main action.</h1>
        This makes side menu a good solution for navigation vs the bottom tabs
        menu. User is only presented with the screen to start parking.
        Everything else is hidden in the side menu.
      </ImageLeft>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center px-4">
          <Image
            src="/works/parkingsg/img/parking_flow.png"
            alt="UX flow of parking.sg"
            width={2200}
            height={1800}
            className="max-h-[1800px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Ethnography study with Enforcer">
        <p>
          To help us understand how we can design the system to integrate with
          the existing enforcement process, we walked the ground with the
          enforcement officer. She shows us the electronic handheld device (EHT)
          that she uses to check for season parking information. She also uses
          it to issue summon. Since she already has this device, we need to find
          a way to send the real-time digital parking data to her.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_ethnography_study.png"
            alt="The development team walked the grounds with the enforcement officer"
            width={1200}
            height={384}
            className="max-h-[384px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Mapping the user journey">
        <p>
          In late 2016, during the discovery phase, I prepared the following
          interview questions and interviewed 5 people who drive and uses the
          parking coupons.
        </p>
        <p>
          With that information, I plotted this customer journey map to
          visualise the highlights and pain points of a motorist&apos;s parking
          journey. Looking for parking and paying for parking create the most
          hassle for the user. And that is what we want to solve.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_customer_journey.png"
            alt="User journey"
            width={1200}
            height={400}
            className="max-h-[400px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Early prototype and guerilla testing">
        <p>
          With all the discovery and learnings from above, I made a prototype in
          Sketch and InVision and brought it out for some users testing based on
          designed tasks scenarios. The following mock up is a few iterations
          after these testings.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_mockup.gif"
            alt="Early prototype implemented for user trials"
            width={1200}
            height={600}
            className="max-h-[600px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Enforcer App">
        <p>
          Based on the design, we made a working prototype with a simple backend
          so that we can work with URA and HDB (the agencies that manages car
          parks) to do real parking sessions with actual users at a real
          carparks. We also made an enforcer app and trained enforcers to use it
          so that they can enforce the cars that are paid digitally before the
          digital parking system is integrated into the EHT.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/parkingsg/img/parking_enforcer_app.png"
            alt="Early enforcer app list down all the cars in a car park and is made searchable"
            width={1200}
            height={900}
            className="max-h-[900px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>
    </WorkTemplate>
  );
}