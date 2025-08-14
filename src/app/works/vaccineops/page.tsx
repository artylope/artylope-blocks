'use client';

import WorkTemplate from '@/app/components/WorkTemplate';
import {
  Default,
  FullContainer,
  Quote,
  Impact
} from '@/app/components/WorkTemplate/ContentBlocks';
import { ImpactMetric } from '@/app/components/WorkTemplate/MiniBlocks';
import Image from 'next/image';

export default function VaccineOpsWork() {
  return (
    <WorkTemplate slug="vaccineops">
      <Default heading="Project Overview">
        <p>
          In order for Singapore to recover gradually from the Covid-19
          pandemic, it is important that 80% of the population needs to be
          vaccinated to achieve herd immunity against Covid-19.
        </p>
        <p>
          Our team was tasked to digitise the vaccination operation. People are
          skeptical of the newly developed vaccines, we should design a good
          vaccination experience so that the public is confident of the overall
          vaccination programme.
        </p>
      </Default>

      <Quote>
        <p>
          How might we get as many people as possible to come forward to
          vaccinate without overwhelming the healthcare system?
        </p>
      </Quote>

      <Default heading="The Team">
        <p>
          I was 1 of the 2 designers. There were 2 Product Managers, 5 engineers
          and 2 designers at the early development stage. We only had a month of
          development to make sure everything was ready for the first wave of
          registration by the healthcare workers and the opening up of
          vaccination centres a month after. There was a lot of coordination
          between the PMs and the policy/ ground operation teams.
        </p>
      </Default>

      <Default heading="User Flows">
        <p>
          The intent of the user flows is to encourage as many people to
          indicate interest as possible so that the government have a good sense
          of demand amidst the uncertainty & limit of vaccine supply as well as
          people&apos;s willingness to be vaccinated.
        </p>
        <p>
          The first target audience are the seniors (and the healthcare workers)
          as they are the most vulnerable to Covid-19. In any digital roll-out,
          we will usually target the more tech-savvy users but not in this case.
          This also means that we must have, right from the start, an inclusive,
          non-digital altenative onboarding experience so that we can get as
          many seniors vaccinated as possible.
        </p>
        <p>The designed solution must also take into account -</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            Full vaccination requires 2 doses that are X number of days apart
            and different vaccine brands need different number of days between
            1st and 2nd dose.
          </li>
          <li>
            The changing policies, health advisory that must be made aware to
            the users and how conditions affect the flows (e.g. Pregnant women
            were advised not to be vaccinated initially.)
          </li>
          <li>
            Roll-out is also incremental depending on vaccine availbility and
            its challenges around storage/ distribution etc.
          </li>
        </ul>
      </Default>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/vaccineops/img/01_MainUserFlow.png"
            alt=""
            width={1800}
            height={320}
            className="max-h-[320px] w-auto object-contain rounded-lgmx-auto"
          />
          <h3 className="text-center mt-4 font-semibold">Generic base user flow</h3>
        </div>
      </FullContainer>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/vaccineops/img/02_ElderlyUserFlow.png"
            alt=""
            width={1800}
            height={320}
            className="max-h-[320px] w-auto object-contain rounded-lgmx-auto"
          />
          <h3 className="text-center mt-4 font-semibold">Digitally Non savvy/ Elderly Flow</h3>
        </div>
      </FullContainer>

      <FullContainer>
        <div className="w-full">
          <Image
            src="/works/vaccineops/img/03_VaccinationDay.png"
            alt=""
            width={1800}
            height={320}
            className="max-h-[320px] w-auto object-contain rounded-lgmx-auto"
          />
          <h3 className="text-center mt-4 font-semibold">Vaccination Day Flow</h3>
        </div>
      </FullContainer>

      <Default heading="My Contribution">
        <p>
          I worked on various parts of the journey shown above, overseeing the
          overall user experience and user interface design. For the early part
          of the journey, I worked on the Vaccine.gov.sg landing page and the
          registration flow. I worked with my co-designer, Christabel Png, on
          the health checklist questionaire and appointment booking portions. I
          also focused on booking experience of the elderly and
          &quot;proxy&quot; (volunteers and staff who help elderly/non-digital
          savvy to book). I also prototyped the vaccination certificate even
          though it was not used eventually. I omitted the flow at the clinics
          administering the vaccines as that was not part of my contribution.
        </p>
      </Default>

      <Default heading="Appointment Booking and edge cases">
        <p>
          I was working with my co-designer on the appointment booking flow.
          There was some core concepts that needs to be achieved with this flow.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            A login page for user to enter a unique booking code and personal
            identifier for verification purpose
          </li>
          <li>
            A health questionaire that will be updated periodically depending on
            the ground&apos;s observation on people&apos;s reaction to the
            vaccines (e.g. certain health issues are not suitable for certain
            vaccines). It screens the individual suitability for the vaccine
            based on health conditions.
          </li>
          <li>
            Able to select a clinic near to you, we also want to direct people
            to choose vaccination centres over polyclinics due to higher
            capacity at vaccination centres
          </li>
          <li>
            Select 2 dates that are 21 days to 28 days apart (depending on
            vaccine brand). Appointment booking is not complete if either slots
            is not booked.
          </li>
          <li>
            Users expect a way to cancel or reschedule appointments, but we want
            discourage against these actions via the UI as slots are really
            limited/ not available.
          </li>
          <li>
            There are also edge cases where they might walk in to the clinic for
            their first dose and needs to book the 2nd dose via the appointment
            system.
          </li>
        </ul>
      </Default>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/vaccineops/img/04_AppointmentBooking.png"
            alt="Appointment booking screens"
            width={2500}
            height={1750}
            className="max-h-[1750px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Proxy Booking">
        <p>
          Proxy Booking occurs when volunteers and public officers book
          appointments on behalf of seniors. We wanted to keep the main flow as
          primarily digital and yet have an inclusive flow for seniors was to
          activate community and ground support that will go around to explain
          and help the seniors. Hence, we designed a flow where these volunteers
          is able to book and manage appointments the seniors they help.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/vaccineops/img/05_ProxyBooking.png"
            alt="Appointment booking screens"
            width={1330}
            height={1560}
            className="w-full max-w-3xl h-auto rounded-lgborder-border-default"
          />
        </div>
      </FullContainer>

      <Default heading="User Testing">
        <p>
          Here are some glimpse to out user testing on the ground with the
          public and clinics who will be using our systems
        </p>
      </Default>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/vaccineops/img/06_UserTesting.png"
            alt="User Testing for Appointment Booking"
            width={2400}
            height={650}
            className="max-h-[650px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Appointment Cards">
        <p>
          These are printables (in 4 major national languages) that the
          volunteers will carry with them so that they can fill up the booking
          details and hand it over to the senior who does not have a mobile
          phone after making an appointment on their behalf.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/vaccineops/img/07_AppointmentCards.png"
            alt="Appointment Cards in 4 languages - filled by the volunteer during house visits"
            width={2400}
            height={830}
            className="max-h-[830px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Default heading="Vaccination Certs">
        <p>
          I also conceptualise how vaccine certs and verification can work in
          conjuction with time-limited Antigen Rapid Test clearance
          certificates.
        </p>
        <p>
          There were too many unknowns that needed work from the policy and
          operation again before I could design effectively. e.g. Who will
          verify and how will they verify? Will they need an app? How much data
          should be revealed?? Will it be discriminating if one is unvaccinated
          and yet denied access?
        </p>
        <p>
          Hence, after some policies and strategy changes, it was handed off to
          the team who were implementing the entrance checking systems at public
          places to work on it. A year after I designed these screens, the
          vaccination status feature has been integrated into the TraceTogether
          App which is the app used for checking in into places you visit. My
          mocks only served as initial conceptualisation for planning and
          discussion.
        </p>
      </Default>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/vaccineops/img/08_VaccinationCerts.png"
            alt="Vaccination Certificates and Covid Test Concept with time based expiry"
            width={960}
            height={1250}
            className="w-full max-w-2xl h-auto rounded-lgborder-border-default"
          />
        </div>
      </FullContainer>

      <Default heading="Landing Page">
        <p>
          I did the content planning, design and frontend of the vaccine.gov.sg
          website over a few days using the Government Website builder - Isomer.
          Most of it was organising the content using the CMS, find appropriate
          illustrations, write the content in Markdown and create a custom
          accordion for the FAQ questions since that was not available as a
          feature.
        </p>
        <p>
          The website&apos;s main objective is to direct people to register for
          vaccination and have their most commonly asked questions answered. I
          also trained the ops and comms colleagues so that they can update the
          website on their own using the Isomer Content Management System (CMS).
        </p>
      </Default>

      <FullContainer>
        <div className="w-full h-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/works/vaccineops/img/09_LandingPage.png"
            alt="I created the structure, prepared the content and images and coded vaccine.gov.sg"
            width={6000}
            height={1850}
            className="max-h-[1850px] w-auto object-contain rounded-lgmx-auto"
          />
        </div>
      </FullContainer>

      <Impact heading="Impact" bgColor="bg-gray-100">
        <div className="container max-w-4xl mx-auto">
          <ImpactMetric
            value="92"
            unit="%"
            label="Total Population Vaccinated"
          />
        </div>
      </Impact>

      <Quote author="Commander, Crisis Strategy and Operations Group, Ministry of Health">
        <p>
          I am surprised, my own dad upon seeing the press release went to
          register and made an appointment without my help. The product is
          well-designed and thoughtful. Even the most elderly groups of users
          had an easy time making their appointments.
        </p>
      </Quote>

      <Default heading="Reflections">
        <p>
          I am very honoured and humbled to be able to play my part and help out
          in a minor way in the whole covid-19 vaccination operations. It was
          one of the most hectic and chaotic projects I have been involved in.
        </p>
      </Default>

      <Default heading="Additional Links">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">
              <a
                href="https://www.channelnewsasia.com/singapore/covid-19-tech-open-government-products-2583911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                How the Singapore Government turned to its experimental tech team to solve COVID-19 problems quickly
              </a>
            </h4>
            <p className="text-sm content-default">Channel News Asia</p>
          </div>
          <div>
            <h4 className="font-semibold">
              <a
                href="https://medium.com/open-government-products/how-technology-accelerated-singapores-covid-19-vaccination-rollout-8b13c59eee9f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                How Technology Accelerated Singapore&apos;s COVID-19 Vaccination Rollout
              </a>
            </h4>
            <p className="text-sm content-default">OGP&apos;s Blog</p>
          </div>
          <div>
            <h4 className="font-semibold">
              <a
                href="https://www.moh.gov.sg/covid-19/vaccination/statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Vaccination Statistics Singapore
              </a>
            </h4>
            <p className="text-sm content-default">Ministry of Health Singapore</p>
          </div>
        </div>
      </Default>
    </WorkTemplate>
  );
}