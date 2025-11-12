"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PlatformFaqSection() {
  return (
    <div className="py-14 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#5D2DFD]">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {[
          {
            id: "item-1",
            question: "What is AI-driven analysis in your platform?",
            answer:
              "Our AI analyzes real-time data streams to detect, classify, and report vulnerabilities faster and more accurately than manual tools.",
          },
          {
            id: "item-2",
            question: "How do you handle SSL certificate checks?",
            answer:
              "We scan SSL configurations, expiry dates, and encryption protocols to ensure your site maintains optimal security standards.",
          },
          {
            id: "item-3",
            question: "Is there a limit to how many domains I can scan?",
            answer:
              "Our scalable infrastructure allows unlimited scans based on your plan, ensuring you stay protected without restrictions.",
          },
          {
            id: "item-4",
            question: "What types of threats can your system detect?",
            answer:
              "From open ports, DNS misconfigurations, expired certificates to HTTP vulnerabilities — we cover a comprehensive security spectrum.",
          },
          {
            id: "item-5",
            question: "How often is your threat database updated?",
            answer:
              "Our AI-backed engine updates its threat definitions hourly, ensuring you’re always shielded against the latest security exploits.",
          },
        ].map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="text-lg font-semibold flex items-center justify-baseline gap-4 hover:no-underline focus:no-underline">
              <span className="text-[#5D2DFD] text-xl leading-none">•</span>
              <span>{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-base">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
