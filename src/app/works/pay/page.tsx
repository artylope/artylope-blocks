'use client';

import WorkTemplate from '@/app/components/WorkTemplate';
import {
  Default,
  FullContainer,
  ImageLeft,
  Quote
} from '@/app/components/WorkTemplate/ContentBlocks';
import { ImpactMetric } from '@/app/components/WorkTemplate/MiniBlocks';
import Image from 'next/image';

export default function PayWork() {
  return (
    <WorkTemplate slug="pay">
      <Default heading="Problem Statement">
        <p>
          When a government agency wants to collect payments, they will look for
          vendors to help them propse a solution, build a website, set up the
          payment form and related infrastructure. This might take months or
          even years. How might we empower government agencies to set up payment
          links? How might we make the payment experience a positive and quick
          experience for citizens?
        </p>
      </Default>

      <Default heading="Research Insights">
        <p>We interviewed a few agencies and this is what we found -</p>
        <p>
          <strong>Most government payment system takes months to build</strong>
          <ul>
            <li>
              Agencies engage 3rd party vendors to integrate with NETS or AXS
              kiosk for collecting payments. Some are less familar with the
              payment provider space and rely on vendors to propose solutions.
            </li>
            <li>
              This might take months to years and there is no ready system to
              collect payments for smaller, one-off adhoc payments.
            </li>
          </ul>
        </p>
        <p>
          <strong>
            Agencies fall back to cash/cheque/PayNow QR for small one-off
            payments
          </strong>
          <ul>
            <li>
              They leverage on form builders with static PayNow QR to collect
              payments digitally. Wrong form inputs causes a lot of work at the
              reconcilation and verification process.
            </li>
            <li>
              The cash/cheque method also require manual data entry and filing
              with longer turn around time with manual audit processes.
            </li>
          </ul>
        </p>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/pay/img/01_Research.png"
            alt="Artifacts from our research"
            width={2200}
            height={870}
            className="max-h-[870px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="My Contributions">
        <p>
          I was the lead and sole designer. I helped out with user research and
          testing. I did all the design work (mocks, prototypes, branding,
          visual design, ui design) and also wroked on the frontend styling of
          the landing page, email templates for payment links and receipts.
        </p>
      </Default>

      <Default heading="My Team">
        <p>
          1 Product Manager, 1 Product Designer (myself), 3 Software Engineers,
          1 Product Support Specialist We also worked with public servants at
          the various government agencies for the operational details.
        </p>
      </Default>

      <Default heading="The Challenge">
        <p>
          In June 2020, Singapore wanted open her borders to travellers and
          returning residents. The government needed a way to collect payments
          for COVID Swab Tests and compulsory quarantine accomodation. Multiple
          government agencies were involved as there were students, employees
          and other travellers seeking to enter Singapore.
        </p>
      </Default>

      <Quote author="COVID Task Force">
        Singapore want to open our borders and we intend to charge inbound
        travellers for their swab tests and hotel stay if they quarantine heres.
        Is your team are able to develop a system to help us collect the
        payments? We need it running in 2 weeks.
      </Quote>

      <Default heading="More Context">
        <p>
          The team that I worked with is most familar with Stripe (amongst all
          the different payment gateways). We haved worked with it (and a few
          more providers) on previous projects. Hence, we are confident that if
          can leverage on Stripe&apos;s robust APIs and admin capabilities , we
          can put together something quickly.
        </p>
      </Default>

      <Default heading="Proposed MVP">
        <p>
          We only have 2 weeks and this is the idea we came up with. The journey
          starts with a government officer will collate an excel file consisting
          of the user information and payment details that and send to the
          developers each day. And our system will create payment links and send
          them to the user emails so that they can make payment via the payment
          links. The user information can come from internal systems/ online
          forms etc.
        </p>
      </Default>

      <Default heading="Stakeholders Requirements">
        <p>
          We worked with multiple government agencies including the Ministry of
          Manpower, Ministry of Education, Immigration and Checkpoints
          Authority. And all of them have very different requirements. To be
          able to deliver something in two weeks, requires focus and we narrowed
          down to this core requirements in green checkmarks and deprioritise
          those labelled as red crosses.
        </p>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/pay/img/11_priority.png"
            alt=""
            width={1480}
            height={1300}
            className="max-h-[1300px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/pay/img/02_ProposedFlow.png"
            alt="Proposed Flow"
            width={1500}
            height={600}
            className="max-h-[600px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Minimal Viable Product Focus">
        <p>
          Each payment, in this case, is in the ball park of thousands (due to
          the 14 day quarantine requirements). The team decided to focus on the
          payer experience and prioritise these screens.
        </p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>
            The email that the payer receives to make payment after applying to
            enter Singapore
          </li>
          <li>The unique payment link to make the payment</li>
          <li>
            The receipt specifying the items and amount paid for which person
            entering Singapore
          </li>
        </ol>
        <p>
          This also means that we deprioritise things like a customised admin
          view, ability for officers to self-service, ability to make refunds,
          accept other payment types, payments in bulk, integrations with
          internal systems etc. As most of the refunds/finance tracking and
          audit can be handled in Stripe admin out of the box and others are
          less critical at this juncture (e.g. integration) compared to the base
          experience.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/pay/img/03_PayerExperienceScreens.png"
            alt="The flow focuses on the end to end payer's experience from email, payment link to receipt"
            width={1800}
            height={800}
            className="max-h-[800px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Establishing Credibility">
        <p>
          Collecting payments online require building trust. How does the payer
          know this link is from the government? How do we make sure that
          travellers, citizens and companies who sees the payment links, trust
          it to make payments of thousands of dollars?
        </p>
        <p>We achieved this by making sure that</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>
            The payment link is triggered by the agency/department that the user
            interacted with prior to this email.
          </li>
          <li>
            The email contains data that is provided by the user in earlier
            application. (e.g. application no./ identity no. / reference number)
          </li>
          <li>
            The email contains contact details of the department that supports
            this application
          </li>
          <li>The email cannot end up in junk mail.</li>
          <li>
            The branding and tone is formal and trustworthy. (No spelling
            mistakes. Clear instructions)
          </li>
          <li>The payment links is hosted on a .gov.sg domain.</li>
        </ol>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/pay/img/10_focusareas.png"
            alt="How we achieve a credible payment service"
            width={1280}
            height={1020}
            className="max-h-[1020px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </Default>

      <Default heading="Reflections">
        <p>This project is only possible because - </p>
        <p>
          <strong>Existing team rapport is great</strong>
          <br />A great team to work with is not to be taken for granted. We had
          been through thick and thin together and we understand each
          others&apos; strength and weakness.
        </p>
        <p>
          <strong>Rely a lot of past experiences</strong>
          <br />
          Agencies we worked with trust our recommendation because of the good
          will and great work delivered in the past. Hence, stakeholders push
          back was manageable. We also made a lot of product decision based on
          our past developing other 2 payment products, bus booking and parking.
        </p>
        <p>
          <strong>Little to no time for research and testing</strong>
          <br />
          One week of development and one week of testing it repeatedly with
          people around us. Not enough testing with main personas.
        </p>
        <p>
          <strong>Making a lot of assumptions</strong>
          <br />
          We assume the baseline flow and just implemented that. I missed some
          edge cases and had to do product iterations, fixes and ops recovery
          support on those. (e.g. Employer bulk pay for staff, company fire
          walls and email clients link shortening)
        </p>
      </Default>

      <Quote>
        <p>
          Now that we have launched a payment service... Can we automate the
          manual portions?
        </p>
        <p>
          {' '}
          <strong>Think bigger!</strong>
        </p>
        <p>
          How might we use this as a foundation for a government payment system
          in the long run to solve the problem mentioned in the research
          previously?
        </p>
      </Quote>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center px-4">
          <Image
            src="/works/pay/img/04_VisionWorkshop.png"
            alt="I ran a design thinking workshop for the team to plan the long term vision"
            width={2200}
            height={550}
            className="max-h-[550px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Long Term Vision">
        <p>
          I facilitated a 2 day design thinking workshop with the team to unpack
          our learnings and our long term vision. And this is what we wanted to
          achieve in the long run -{' '}
        </p>
        <div className="mt-16">
          <Image
            src="/works/pay/img/05_LongTermVision.png"
            alt=""
            width={560}
            height={460}
            className="max-h-[460px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </Default>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/pay/img/06_AdminView.png"
            alt="Mock up of admin view for the public servants"
            width={1800}
            height={1400}
            className="max-h-[1400px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/pay/img/07_ImprovingPaymentFlow.png"
            alt="I also improved the original payment flow to align with the vision and style"
            width={1800}
            height={650}
            className="max-h-[650px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <ImageLeft
        image="/works/pay/img/08_Illustrations.png"
        alt="Illustrations"
        imgWidth={1200}
        imgHeight={800}
        heading="Illustrations"
      >
        <p>
          I came up with some illustrations for the product by modifying royalty
          free illustrations from Freepik and standardising them with brand
          colors and styles
        </p>
      </ImageLeft>

      <Default heading="Logo">
        <div className="max-w-md">
          <Image
            src="/works/pay/img/09_Paylogo.png"
            alt=""
            width={1700}
            height={400}
            className="max-h-[400px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
        <p>
          I designed the Pay Logo with a letter &quot;P&quot; and a checkmark
          inside to create the sense of assurance. The P also looks like a paper
          note fold-over.
        </p>
      </Default>

      <Default heading="Impact">
        <p>As of Oct 2020, 4 months of operations</p>
      </Default>

      <div className="container max-w-4xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactMetric
            value="85"
            unit="mil"
            label="Total value of transactions"
          />
          <ImpactMetric
            value="80"
            unit="k"
            label="Payment links generated"
          />
          <ImpactMetric
            value="8"
            label="Government agencies supported"
          />
        </div>
      </div>

      <Default heading="Conclusion">
        <p>
          It is one of the most time compressed project I have done and I learnt
          that we can do so much if we focus. I left the the organisation before
          I could finish this project, so I shall leave this in good hands of
          the team to continue.
        </p>
      </Default>
    </WorkTemplate>
  );
}