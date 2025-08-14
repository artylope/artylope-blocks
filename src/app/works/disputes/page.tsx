'use client';

import WorkTemplate from '@/app/components/WorkTemplate';
import {
  Default,
  FullContainer,
  Impact,
  SectionHeader
} from '@/app/components/WorkTemplate/ContentBlocks';
import { ImpactMetric } from '@/app/components/WorkTemplate/MiniBlocks';
import Image from 'next/image';

export default function DisputesWork() {
  return (
    <WorkTemplate slug="disputes">
      <Default heading="Project Overview">
        <p>
          Disputes occurs when a cardholder calls their bank to challenge a
          transaction. This can happen when customers are unhappy with the
          service, or the descriptor on the credit card was mis-represented. Or
          it could be a friendly fraud where a customer who wants to cheat the
          merchant of free products/ service. Most often, it can be due stolen
          card details used by fraudsters.
        </p>{' '}
        <p>
          And when this happens, Stripe receive an update about this disputed
          payment and it is the onus of the merchant to provide evidence to
          prove the validity of the payment. Failing so, the merchant will lose
          the disputed amount, dispute admin fees and credit standing with the
          card networks. This process is can take 3 to 6 months, and Stripe
          facilitate the communication between the merchant and the card
          networks via the dashboard.
        </p>
        <p>
          As this is a stressful process, many merchants need guidance and
          clarity during each stage of the process, especially merchants who
          face disputes for the very first time.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/what_is_a_dispute.png"
            alt=""
            width={1200}
            height={550}
            className="max-h-[550px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Disputes lifecycle">
        <p>
          Here is an infographic I made to explain the lifecycle of a disputes
          from the merchant&apos;s point of view.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/lifecycle_infographic.png"
            alt="Disputes lifecycle"
            width={1200}
            height={1000}
            className="max-h-[1000px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Findings from existing data">
        <ul>
          <li>
            67% of disputes related support tickets seek help on follow ups,
            timeline and statuses
          </li>
          <li>
            49% of disputes related support tickets are attributed to users
            facing first time disputes
          </li>{' '}
          <li>
            38% of disputes are automatically lost as users do not respond to
            them
          </li>{' '}
          <li>
            There is a 10% click through rate for a dispute&apos;s first email
            notification.
          </li>
        </ul>
      </Default>

      <Default heading="Understanding the problem space">
        <p>
          To design well, I need to deeply understanding how our system behaves
          for different payment methods, dispute types and states. I created the
          infographic above and the flowchart below to check my understanding
          with my team mates.
        </p>
        <p>There are 2 types of disputes</p>
        <p>
          <strong>Inquiry</strong> <br />
          This is considered a pre-dispute. A cardholder calls their bank to
          check on a transaction and the merchant needs to prove that it is
          legit. The bank <strong>DOES NOT take back </strong> the amount from
          the merchant during a inquiry.
        </p>
        <p>
          <strong>Chargeback (aka Dispute)</strong> <br /> This is more serious.
          A cardholder calls their bank to check on a transaction and the
          merchant needs to prove that it is legit. The bank{' '}
          <strong>takes back </strong> the amount from the merchant during a
          inquiry.
        </p>
      </Default>

      <div className="mt-12 mb-24">
        <FullContainer>
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="/works/disputes/disputes_flowchart.png"
              alt="Disputes flowchart"
              width={1200}
              height={450}
              className="max-h-[450px] w-auto object-contain rounded-lgmx-auto"
            />
          </div>
        </FullContainer>
      </div>

      <Default heading="Screens">
        <p>
          On Stripe, these are the main screens that a merchant interacts with
        </p>
        <ul>
          <li>Email notification of the disputes</li>
          <li>
            Data table that shows a list of disputed payments and their status
          </li>
          <li>Payment details with a disputes card details</li>
          <li>2 page form for submitting evidences</li>
        </ul>
        <p> And these will be the screens I will be improving</p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/disputes_screens.png"
            alt=""
            width={1200}
            height={640}
            className="max-h-[640px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Focus areas">
        <p>
          As you can see from the infographic and flow chart, work on disputes
          revolves around state management and communication of what happens
          during the different states. Here are the focus areas that I will
          cover in this case study
        </p>

        <div className="!mb-8">
          <p className="!mb-3">
            <strong>1. Standardising status badges</strong>
          </p>
          <ul>
            <li>
              Status badges for the same disputed transaction should be the same
              on different pages. They communicate the state the dispute is in
              to give the merchant a high level view so that users need not go
              into the details page to know which transaction needs more urgent
              attention and needs to be tackled first.
            </li>

            <li>
              They should have consistent visual treatment (e.g. icon + text)
              and hover behaviour (on hover, show tooltip) that is consistent
              with other platform statuses
            </li>

            <li>
              Provide important details in tooltip text that can help merchants
              understand the issue without clicking in
            </li>
            <li>
              Updated all screens where these status badges change will impact
              (e.g. home dashboard widget, filters on main data table)
            </li>
          </ul>
        </div>
        <div className="!mb-8">
          <p className="!mb-3">
            <strong>2. Improve data table filtering</strong>
          </p>
          <ul>
            <li>Filters are outdated and hard to find</li>

            <li>
              The platform design team has introduced a new &quot;chips&quot; UI
              pattern that I can align to.
            </li>
          </ul>
        </div>
        <div className="!mb-8">
          <p className="!mb-3">
            <strong>3. First time disputes experience</strong>
          </p>
          <ul>
            <li>
              Explain disputes in a more approachable and empathetic way to
              first time users{' '}
            </li>
            <li>
              Better email structure to make certain information clearer and
              easier to read.
            </li>
          </ul>
        </div>
      </Default>

      <SectionHeader
        title="Standardising status badges"
        subtitle="Focus area 1"
      />

      <Default heading="Problem statement">
        <p>Here are the issues with the current status badges</p>
        <ul>
          <li>
            Status badges for the same disputed transaction looks different on
            the different pages.{' '}
          </li>

          <li>
            Some of the statuses has a generic &quot;disputed!&quot; status
            which means nothing unless you click into the details to find out
            more.
          </li>
          <li>
            Badges have inconsistent visual treatment and hover behaviour - some
            has icons, some has tooltips when hovered while others don&apos;t
          </li>
        </ul>
        <p>
          The image below is a disputed case that needs merchant&apos;s response
          and the badges is different on various pages.
        </p>
      </Default>

      <div className="pt-8 pb-24">
        <FullContainer>
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="/works/disputes/problem_status_messaging.png"
              alt="Before - Status badge is different for same transaction on different pages"
              width={1690}
              height={916}
              className="max-h-[916px] w-auto object-contain rounded-lgmx-auto"
            />
          </div>
        </FullContainer>
      </div>

      <Default heading="Design process">
        <p>
          I set up this table in Figma for the team (PM, Eng, Content Designer,
          disputes Ops and Support) to collaborate on the content. Being a
          global distributed team working across time zones, this helps us
          coordinate our thoughts and inputs asynchronously.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/status_mapping_table.png"
            alt=""
            width={1560}
            height={1800}
            className="max-h-[1800px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Outcome">
        <p>
          Here is a prototype of the different states with their final statuses
          and the tooltip text.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/disputes_status_prototype.gif"
            alt="After - Prototype of new status badges and tooltip (Figma)"
            width={1200}
            height={800}
            className="max-h-[800px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <SectionHeader
        title="Improving filters for data table"
        subtitle="Focus area 2"
      />

      <Default heading="Opportunity">
        <p>
          The dashboard design team introduced a new &quot;chips&quot; UI
          pattern that I can align to. The current filter of nested dropdown
          menu is hidden in a <strong>filter</strong> button and requires more
          clicks and scrolling.
        </p>
      </Default>

      <div className="mb-24">
        <FullContainer>
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="/works/disputes/status_filter_before_after.png"
              alt=""
              width={1200}
              height={780}
              className="max-h-[780px] w-auto object-contain rounded-lgmx-auto"
            />
          </div>
        </FullContainer>
      </div>

      <Default heading="Design considerations">
        <p>
          To migrate to the filter chips UI pattern, some changes needs to be
          considered - for chips like <strong>reasons</strong>,{' '}
          <strong>status</strong> and <strong>payment methods</strong>, they
          have a long list of selection and may require a search input to help
          search through the options. This pattern does not exist and needs to
          be implemented to be successful.{' '}
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/filter_prototype.gif"
            alt="Filter chips prototype (Figma)"
            width={1200}
            height={700}
            className="max-h-[700px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="">
        <p>
          Other details that we should consider is the ordering of the chips and
          the selections within each dropdown. Should it be ordered by
          occurrence or alphabetical order? Is there further nesting we can do
          to help organise this data. More investigation on existing behaviour
          and user preference needs to be done.
        </p>
        <p>
          This proposal also requires changes on the backend to re-index the
          data and hence it was put on hold as we only had a frontend engineer
          available when this worked was scoped.
        </p>
      </Default>

      <SectionHeader
        title="First time disputes experience"
        subtitle="Focus area 3"
      />

      <Default heading="Problem">
        <p className="mb-16">
          The current dispute flow can be overwhelming to merchants who
          experience disputes for the very first time. From the team&apos;s
          analysis of support tickets, many are confused by the timelines,
          process and cost and some even thought that they were going to jail
          because of the dispute. They are stressed out as they lost money and
          are not sure what to do next.
        </p>

        <div className="w-full flex flex-col justify-center items-center mb-16">
          <Image
            src="/works/disputes/card_details.png"
            alt="What they see in the payment details when it is disputed"
            width={1200}
            height={600}
            className="max-h-[600px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>

        <p>
          How might we ease their anxiety and give them the support and
          information they need?
        </p>
      </Default>

      <Default heading="Constraints">
        <p> Some of the constraints we have for this project to consider - </p>
        <p>
          <strong>Preferably mostly frontend changes only</strong> <br />
          We only have one engineer specialising in frontend on the team.
          Additional resource needed might takes us months to get. This means we
          should try to reduce the work around complex user states/ data that
          needs to be stored in the database if we want to push something out
          quickly to tackle the problem first.
        </p>
        <p>
          <strong>Leverage on existing documentation and videos</strong> <br />
          Stripe has a robust collection of support documents about the
          platform. Linking these information just in time to the relevant
          section will be super helpful. We also have some videos on youtube
          (albeit slightly outdated), if we can edit them and show the most
          useful portions, it is already a step up.
        </p>
        <p>
          <strong>Lack of video content resource</strong> <br />
          We have a sense that we can create new videos to help us explain
          complex concepts, but this require longer term planning to get the
          resource in place. For now, we can repurpose the current videos and
          work on those new ones when we have more time.
        </p>
        <p>
          <strong>Platform level standardisation and consistency</strong> <br />
          One challenge when designing for Stripe is how my solution be aligned
          to the broader platform&apos;s patterns and behaviour. There are many
          designers working on very detailed complex areas and it is hard to be
          aware of the most used patterns and solutions. It will be confusing to
          the user if 2 pages doing similar things look very different. In this
          case, I need to investigate, how other products and features are
          onboarding their users as well.
        </p>
      </Default>

      <Default heading="Ideation and user testing">
        <p>
          The Product Manager and I tested 3 designs with 4 users (remotely over
          Zoom) who have varying understanding of disputes and found the good
          and bad of each of the designs.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/onboarding_early_prototype.png"
            alt="The first prototypes (Figma)"
            width={2400}
            height={450}
            className="max-h-[450px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/onboarding_user_quotes.png"
            alt="Quotes from user tests"
            width={1200}
            height={600}
            className="max-h-[600px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Final design">
        <p>
          From the user test, it is clear that no matter how much links we place
          in the &quot;onboarding&quot; widget, no one is really going to click
          on them. Users trust Stripe and expects to be very self explanatory
          and guided in the UI. The way to tackle this issue is to bring in
          information just in time and keep this really light weight. And invest
          in improving the actual disputes flow itself.
        </p>
        <p>
          One idea that came up from the team was if the disputes card look
          overwhelming, is there a way to hide it from view and introduce that
          after onboarding. The final design is an amalgamation of the previous
          designs. It is an overlay with videos and document links + just in
          time tooltips. An important detail is to have the overlay animated to
          and from the button so that users know where to find it in if they
          need it in future.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/onboarding_final.gif"
            alt="Proposed Onboarding"
            width={1200}
            height={750}
            className="max-h-[750px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Email structure audit">
        <p>
          The earliest touch point a user has about a dispute is via the email.
          From user interviews, some users commented that the current email
          looks daunting or phish-y and here is the proposed changes. These
          principles can also be applied in the other reminder/ update emails.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/disputes/first_email_template.png"
            alt=""
            width={1800}
            height={1000}
            className="max-h-[1000px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <SectionHeader
        title="Conclusion"
        subtitle=""
      />

      <Default heading="Impact">
        <p>
          At the point of writing this case study, these designs were just
          implemented and rolled out to a limited group of users. However, when
          the work was planned out, our success metric was to reduce support
          tickets around disputes.
        </p>
      </Default>

      <div className="pt-0 pb-12">
        <Impact heading="">
          <ImpactMetric
            value="50"
            unit="%"
            label="Increase in traffic into disputes dashboard"
          />
          <ImpactMetric
            value="30"
            unit="%"
            label="Estimated reduction in support cases related to disputes"
          />
        </Impact>
      </div>

      <Default heading="Disclaimer">
        <p>
          I was laid off as part of the 14% reduction in workforce at Stripe in
          Nov 2022 so it is hard to for me to get a good update of the impact of
          this design work but I really hope my work help ease the users&apos;
          anxiety around disputes. There was so much work planned but I was not
          given the opportunity to see it through.
        </p>
      </Default>

      <Default heading="Reflection">
        <p>
          I really enjoyed the Stripe role as it allowed me to experience what
          an organisation with high UX and design maturity felt like. And I can
          really focus on the detailed scenarios, designing for a good flow
          instead of justifying the value of design at a higher, strategic
          level, and worry about consistency and compromising UX due to lack of
          resource. (Don&apos;t get me wrong, there is still a lot of
          prioritisation and measuring trade offs) but a lot of emphasis was
          placed on precision and polish and everyone thinks from the
          perspective of users. It was really sad, but oh well, it was fun while
          the role lasted.
        </p>
      </Default>
    </WorkTemplate>
  );
}
