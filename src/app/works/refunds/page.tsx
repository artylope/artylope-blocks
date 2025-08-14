'use client';

import WorkTemplate from '@/app/components/WorkTemplate';
import {
  Default,
  FullContainer,
  Impact
} from '@/app/components/WorkTemplate/ContentBlocks';
import { ImpactMetric } from '@/app/components/WorkTemplate/MiniBlocks';
import Image from 'next/image';

export default function RefundsWork() {
  return (
    <WorkTemplate slug="refunds">
      <Default heading="Project Overview">
        <p>
          Stripe is a online payment processing solution for businesses to
          manage payments. And performing refunds is a recurring task that a
          merchant need to do.
        </p>
        <p>
          The current refunds workflow is outdated and has reached its limits in
          supporting businesses. It cannot accomodate for the many scenarios
          that a complex payment platform needs to convey. Stripe also receives
          support tickets about merchants needing more information as well as
          requests to reverse the refunding of wrong amount.
        </p>
        <p>
          How might we improve the refunds dialog modal to reduce errors and
          friction, explain fees and scenarios in a much better way such that it
          reduces support overhead, minimise user frustration and save cost?
        </p>
      </Default>

      <Default heading="Audit of current flow">
        <p>
          After reviewing the exisiting refunds modal and looking through the
          analysis of all support tickets related to refunds. Here are a list of
          problems that merchants faced -
        </p>
        <div className="mb-8">
          <strong>Overall base flow</strong>
          <ul className="mt-2">
            <li>Merchants refund full amount unintentionally </li>
            <li>Merchants are confused by different fees</li>
            <li>Merchants refund for the wrong transaction</li>
            <li>Merchants refund wrong amount </li>
            <li>Merchants are confused by refunds statuses and timeline</li>
            <li>Merchants do not understand why they can&apos;t refund</li>
          </ul>
        </div>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/refundproblem.png"
            alt="Some issues with current refund dialog modal"
            width={1200}
            height={625}
            className="max-h-[625px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Design considerations">
        <p>Here is a list of conditions I need to design for</p>
        <div className="mb-8">
          <strong>Overall base flow</strong>
          <ul className="mt-2">
            <li>
              Stepped flow to prevent users from refunding the wrong amount
            </li>
            <li>
              Show payment details so that merchant can refer to it easily
            </li>
            <li>
              Able to send email to notify the customer that the refund is
              initiated.
            </li>

            <li>Add a confirmation step to prevent error</li>
            <li>
              Power users should be able to skip some steps if we have too many
              steps
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <strong>Communication of fees, statuses and timeline</strong>
          <ul className="mt-2">
            <li>
              Show how long it takes for the refunds to show up in the
              customer&apos;s account
            </li>
            <li>
              Communicate that the initial Stripe admin fees will not be
              returned for certain merchants
            </li>
            <li>Explanation of additional fees for certain payment methods</li>
          </ul>
        </div>
        <div className="mb-8">
          <strong>Additional conditions</strong>
          <ul className="mt-2">
            <li>Refund amount is over the original amount</li>
            <li>First refunds vs subsequent refunds</li>
            <li>
              Connect cases - what if this is a sub merchant account linked to
              the main platform account
            </li>
            <li>
              Connect cases - consider customisations of platform application
              fee
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <strong>Special scenarios</strong>
          <ul className="mt-2">
            <li>
              Account has insufficent funds - provide a way to top up funds
            </li>
            <li>
              Within reversal window - Initial payment has not been settled so a
              refund is actually a reversal of that authorised payment and
              Stripe fees will be returned and that this transaction and
              reversal will not show up in the statement
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <strong>Long term improvement</strong>
          <ul className="mt-2">
            <li>
              Refund by items instead of refund by amount to prevent the
              refunding of wrong amount
            </li>
          </ul>
        </div>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/beforeafter.png"
            alt=""
            width={1200}
            height={822}
            className="max-h-[822px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Proposed Structure">
        <p></p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/refundstructure.png"
            alt=""
            width={1200}
            height={758}
            className="max-h-[758px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Prototype new flow">
        <p></p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/RefundFlowBase.gif"
            alt=""
            width={1200}
            height={822}
            className="max-h-[822px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Insufficent Fund">
        <p>
          Some accounts will be in negative balance or have insufficent amount
          to perform a refund. Refunds will be pending if they try to initiate
          one. Instead of just showing a warning, it is better to provide the
          path for them to quickly top it up within the refund flow.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/insufficientfund.png"
            alt=""
            width={1200}
            height={819}
            className="max-h-[819px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Reversal window">
        <p>
          Initial payment has not been settled so a refund is actually a
          reversal of that authorised payment and Stripe fees will be returned
          and that this transaction and reversal will not show up in the
          statement.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/reversalwindow.png"
            alt=""
            width={1200}
            height={817}
            className="max-h-[817px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Collapsible Detail">
        <p>
          The payment details takes up some space that users might not need.
          Making it collapsible helps these users to stay focus.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/CollapsibleDetails.gif"
            alt=""
            width={1200}
            height={760}
            className="max-h-[760px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Implement refunds by items">
        <p>
          Merchants often refund the wrong amount because they have to do a
          manual calculation of the item they need to refund for. If Stripe has
          the data for each item, it is possible to expose that as row items and
          allow user to select and refund by item to reduce errors.
          Understandably, this requires more investigation and good data
          integration on merchant&apos;s end.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/works/refunds/refundamountitems.gif"
            alt=""
            width={1200}
            height={760}
            className="max-h-[760px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Expected Impact">
        <p>
          Based on the data analysis, the proposed designs, if successful, will
          be able to address 85% of the support cases that are related to
          refunds. At the time of writing this case study, the proposed
          improvements have not been implemented (and some require more long
          term, effort-ful backend changes) and so I was not able to validate
          this metric.
        </p>
      </Default>

      <div className="pt-0 pb-12">
        <Impact heading="">
          <ImpactMetric
            value="85"
            unit="%"
            label="Reduction in support cases related to refunds"
          />
        </Impact>
      </div>

      <Default heading="Disclaimer">
        <p>
          What I showed in this case study just a slice of refunds and there
          were many other surfaces I was working on that relates to refunds such
          as statuses, timeline, payment details, email and alerts around
          refunds.
        </p>
        <p>
          I was laid off as part of the 14% reduction in workforce at Stripe in
          Nov 2022 when this project was still in its discovery and design
          stage. I was not able to properly handover or test these designs with
          users. Other team members on this project were also affected by this
          layoff. The information on this project was based off my memory as I
          have no access to the data and docs after the layoff was announced.
          Therefore, it is unlikely that this proposed designs will be
          implemented in this form.
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
