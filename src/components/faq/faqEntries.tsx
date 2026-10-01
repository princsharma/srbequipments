import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export type FaqEntry = {
  id: string;
  question: string;
  answer: ReactNode;
};

export const FAQ_ENTRIES: FaqEntry[] = [
  {
    id: "roadside",
    question: "Do you offer roadside assistance?",
    answer: (
      <p>
        Yes, we offer roadside assistance. We are always ready to help you. Our
        mobile truck repair service is fully equipped with the latest tooling
        and technology to facilitate Edmonton&apos;s most advanced roadside truck
        repair service. You can call us at{" "}
        <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> to learn more about
        roadside assistance services.
      </p>
    ),
  },
  {
    id: "why-srb",
    question: `Why should I come to ${SITE.name}?`,
    answer: (
      <>
        <p>
          There are multiple reasons to bring your truck for repair to the{" "}
          {SITE.name}. Let me show you some of the few.
        </p>
        <ul>
          <li>
            We offer quality and professional services at the most affordable
            rates.
          </li>
          <li>
            We offer a more comprehensive range of services, from tire
            replacement, CVIP inspections, and preventive maintenance to complete
            engine repair.
          </li>
          <li>
            Apart from truck repair services, we also offer trailer repair
            services under the same roof.
          </li>
          <li>We offer 24*7 professional customer support services.</li>
          <li>
            We have an impressive list of thousands of satisfied customers
            across Edmonton.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cvip-need",
    question: "Do I need to get a CVIP Inspection for my vehicle?",
    answer: (
      <p>
        A CVIP inspection is essential because the process ensures your vehicle
        that treks across Canadian highways is adequately maintained and safe.
        Safety is the most important and apparent reason to inspect your
        vehicle. A vehicle defect found during an inspection could save you from
        roadside breakdowns.
      </p>
    ),
  },
  {
    id: "tow-arrival",
    question: "How long will it take for a tow truck to arrive?",
    answer: (
      <p>
        It&apos;s better to take roadside assistance services than towing
        services. Bringing a damaged truck to the truck repair shop costs you
        human resources and more service charges, except for your repair bills.
        Call <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> to book roadside
        assistance services from {SITE.name} to save time.
      </p>
    ),
  },
  {
    id: "payments",
    question: "What type of payments are accepted?",
    answer: (
      <p>
        We accept a more comprehensive range of payment options, from debit
        cards, credit cards, and cash to digital payments.
      </p>
    ),
  },
  {
    id: "road-service-charge",
    question: "How do you charge for road service?",
    answer: (
      <p>
        The cost of roadside assistance depends on many factors like which type
        of truck repair you need, whether it&apos;s a simple tire replacement or
        engine repair. Additionally, how far does your truck needs repairs from
        the truck repair shop that provides your roadside assistance services?
        You can call us at <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>{" "}
        anytime to know more. One thing is sure we offer the most affordable
        rates in town.
      </p>
    ),
  },
  {
    id: "trailers",
    question: "Do you rebuild or refurbish trailers?",
    answer: (
      <p>
        Yes, {SITE.name} is a truck and trailer repair shop in Edmonton. Our team
        is dedicated to providing the best trailer repair services in Edmonton.
        We are fully equipped for repairs by a trained, certified team of
        heavy-duty mechanics.
      </p>
    ),
  },
  {
    id: "overheat",
    question: "What should I do if my truck starts to overheat?",
    answer: (
      <>
        <p>
          If you are in an overheated vehicle, do not try to drive farther and
          follow these steps to avoid injury and further damage to your vehicle.
        </p>
        <p>
          <strong>Pull Over Immediately</strong> — After feeling the
          engine&apos;s high temperature or hearing an alarm, you must pull over
          immediately. Continuing to drive will make things worse.
        </p>
        <p>
          <strong>Don&apos;t Pop the Hood Until It&apos;s Cool</strong> — Wait
          several minutes before popping the hood. A good idea to see if
          it&apos;s hot is to carefully touch the back of your hand on the hood.
        </p>
        <p>
          <strong>Turn the Heater on</strong> — If you&apos;re still moving
          because of emergencies, you can turn your heater on to eliminate some
          of that heat. It won&apos;t cool down your engine but will help avoid a
          disaster.
        </p>
        <p>
          <strong>Open the Windows</strong> — Opening a window could be an
          excellent way for some heat escape.
        </p>
        <p>
          <strong>Get Some Help</strong> — The best action is to have the vehicle
          towed to your nearest truck repair shop or call the roadside
          assistance team.
        </p>
      </>
    ),
  },
  {
    id: "services",
    question: "What services do you offer?",
    answer: (
      <p>
        We offer a comprehensive range of services, from wheel alignment,
        preventive maintenance, and trailer repairs to complete engine repair. We
        also provide roadside assistance or mobile service truck.
      </p>
    ),
  },
  {
    id: "hours",
    question: "What are the business hours of the garage?",
    answer: (
      <p>
        Working hours are Mon–Sat: 8 am – 5 pm. Sunday closed. Feel free to
        contact us at <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> if you
        need any emergency repairs.
      </p>
    ),
  },
  {
    id: "preventative",
    question: "Do you offer preventative maintenance services?",
    answer: (
      <p>
        Yes, we offer preventive maintenance service or routine services. During
        preventative maintenance, our mechanic checks the various components of
        your truck and takes care of all necessary adjustments, repairs,
        lubrications, or replacements. As a result, your vehicle will stay in
        better condition, thus reducing unexpected breakdowns.
      </p>
    ),
  },
  {
    id: "cvip-frequency",
    question: "How often do you need a CVIP?",
    answer: (
      <p>
        Trucks and trailers need an annual CVIP Inspection, whereas a bus needs
        one every six months.
      </p>
    ),
  },
  {
    id: "oil-change",
    question: "How often do I need an oil change?",
    answer: (
      <p>
        On average, you will want to get heavy-duty commercial vehicle service,
        including an oil change, no later than 30,000 miles and around 5,000
        miles for light-duty to be on the safe side. There are several factors
        impact when your oil should be changed, including Oil quality, Driving
        habits, Engine condition, and Driving conditions
      </p>
    ),
  },
  {
    id: "licensed",
    question: "Are your mechanics licensed?",
    answer: (
      <p>
        Yes, our mechanics are licensed and professionals as well. They help you
        get on the road again as soon as possible without compromising quality.
        We have served the community with outstanding, efficient truck repairs,
        servicing, and maintenance for many years.
      </p>
    ),
  },
  {
    id: "tire-rotation",
    question: "How often should I rotate the tires on my truck?",
    answer: (
      <p>
        Rotate your tire in every preventive maintenance. Your mechanics will
        rotate your tires when you go for regular maintenance. Neglecting to
        rotate tires is a significant cause of premature tire wear.
      </p>
    ),
  },
];
