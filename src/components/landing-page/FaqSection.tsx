"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

const questions = [
  {
    question: "What does Torque use to answer an operator question?",
    answer:
      "Torque combines the technical record for the selected machine model with repair notes, events, and operating knowledge captured by your own facility. Each source is clearly labelled in the response.",
  },
  {
    question: "Can we begin with only our highest-risk machines?",
    answer:
      "Yes. Start with the assets that carry the highest downtime risk, then add machines as the operating record grows. Torque is designed to prove value one line at a time.",
  },
  {
    question: "How is our site knowledge separated from machine sources?",
    answer:
      "Facility-specific notes remain scoped to your organization. Machine library sources are clearly marked in each answer, so operators can distinguish shared technical information from local experience.",
  },
  {
    question: "How quickly can Torque become useful on the floor?",
    answer:
      "The machine library gives each selected model a technical starting point immediately. Add your existing repair notes and Torque becomes more specific from the first shift.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(0);
  const idPrefix = useId();

  return (
    <section id="faq" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-32">
        <div>
          <span className="bg-orange-900 text-orange-300 rounded-full text-sm px-2">
            Questions & Answers
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Before it goes on the line
          </h2>
          <p className="mt-5 max-w-md text-md leading-7 text-fg-muted">
            Practical answers for operations teams evaluating Torque on a
            critical asset.
          </p>
        </div>

        <div className="border-y border-line">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const panelId = `${idPrefix}-${index}`;

            return (
              <article
                key={question}
                className={index > 0 ? "border-t border-line" : ""}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-medium text-fg transition-colors hover:text-accent"
                  >
                    {question}
                    {isOpen ? (
                      <Minus className="size-4 shrink-0" strokeWidth={1.5} />
                    ) : (
                      <Plus
                        className="size-4 shrink-0 text-fg-muted"
                        strokeWidth={1.5}
                      />
                    )}
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    className="max-w-2xl pb-5 text-sm leading-7 text-fg-muted"
                  >
                    {answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
