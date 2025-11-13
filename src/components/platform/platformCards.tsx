"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Club, ShieldCheck, X } from "lucide-react";

const platformCards = [
  {
    id: 1,
    icon: <Club className="w-7 h-7 text-[#5D2DFD]" />,
    text: "Why We Stand Out",
    dialogTitle: "Why We Stand Out",
    topPara:
      "Cyber threats like phishing, zero-day exploits, and data breaches expose the limits of outdated, manual security systems. TrinetraAI bridges this gap with:",
    points: [
      "Speed: AI-driven detection outpaces conventional tools.",
      "Automation: Hands-free protection minimizes human error.",
      "Adaptability: Self-learning models evolve with every threat.",
      "Affordability: Scalable solutions for businesses of all sizes.",
    ],
    bottomPara:
      "Unlike static, rule-based systems, our platform leverages machine learning, deep learning, and behavioral analysis to catch what others miss — delivering intuitive, cost-effective security without compromise.",
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-7 h-7 text-[#5D2DFD]" />,
    text: "What We Offer",
    dialogTitle: "What We Offer",
    topPara: "Our next-generation solutions are designed to safeguard your digital world:",
    points: [
      "AI-Powered Phishing Defense: Blocks malicious URLs in real time.",
      "Smart Web Penetration Testing: Uncovers vulnerabilities like XSS and SQL Injection with precision.",
      "Real-Time Threat Intelligence: Adapts to emerging risks instantly.",
      "Automated Security Audits: Identifies weaknesses before attackers do.",
      "Evolving AI Models: Learns from global incidents to stay ahead.",
    ],
    bottomPara:
      "By automating complex processes, we free you to focus on innovation while we handle the threats.",
  },
  {
    id: 3,
    icon: <Club className="w-7 h-7 text-[#5D2DFD]" />,
    text: "Our Vision",
    dialogTitle: "Our Vision",
    topPara:
      "As attackers weaponize AI, we’re pushing the boundaries of defense. We see a future where cybersecurity is predictive, autonomous, and effortless — a future where threats are stopped before they begin. Our long-term goals include:",
    points: [
      "Autonomous AI security assessments.",
      "Faster, smarter penetration testing frameworks.",
      "Real-time adaptation to new attack strategies.",
      "Democratizing advanced protection for all.",
    ],
    bottomPara: "",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-7 h-7 text-[#5D2DFD]" />,
    text: "Who We Serve",
    dialogTitle: "Who We Serve",
    topPara: "TrinetraAI is built for:",
    points: [
      "Businesses: Robust, automated security for your assets.",
      "Developers: AI tools to secure your code and projects.",
      "Cybersecurity Experts: Next-gen solutions to amplify your work.",
      "Startups & Enterprises: Scalable protection that grows with you.",
    ],
    bottomPara:
      "No matter your expertise, our user-friendly platform makes security simple and effective.",
  },
  {
    id: 5,
    icon: <Club className="w-7 h-7 text-[#5D2DFD]" />,
    text: "Our Commitment",
    dialogTitle: "Our Commitment",
    topPara:
      "Innovation is our core. We’re relentless in our pursuit of smarter, faster, and more reliable cybersecurity.",
    points: [],
    bottomPara:
      "Our team continuously explores new AI methodologies, reduces false positives, and pioneers auto-remediation — ensuring TrinetraAI remains a leader in the fight against cybercrime.",
  },
  {
    id: 6,
    icon: <ShieldCheck className="w-7 h-7 text-[#5D2DFD]" />,
    text: "The TrinetraAI Difference",
    dialogTitle: "The TrinetraAI Difference",
    topPara: "",
    points: [
      "Proactive Intelligence: Predicts and prevents, not just reacts.",
      "Hybrid Detection: Combines rules and AI for unmatched accuracy.",
      "Self-Improving Systems: Gets stronger with every challenge.",
      "User-First Design: Powerful protection, made simple.",
    ],
    bottomPara: "",
  },
];

const PlatformCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
      {platformCards.map((card) => (
        <Card
          key={card.id}
          className="hover:shadow-lg transition-all rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <CardContent className="p-6 flex flex-col gap-6">
            {/* Top Icon */}
            <div className="flex items-center mt-2">
              {typeof card.icon === "string" ? (
                <Image
                  src={card.icon}
                  alt="icon"
                  width={30}
                  height={30}
                  className="mr-3 pt-1 pb-6 object-contain"
                />
              ) : (
                card.icon
              )}
            </div>

            {/* Title */}
            <div className="flex-1 mt-2">
              <span className="text-lg font-semibold text-accent-foreground">
                {card.text}
              </span>
            </div>

            {/* Read More Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <span className="text-sm text-muted-foreground cursor-pointer hover:underline">
                  Read more
                </span>
              </DialogTrigger>

              <DialogContent className="sm:max-w-lg">
                {/* Accessibility Title */}
                <VisuallyHidden>
                  <DialogTitle>{card.dialogTitle}</DialogTitle>
                </VisuallyHidden>

                {/* Visible Title + Close Button */}
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">{card.dialogTitle}</h4>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="w-5 h-5" />
                    </Button>
                  </DialogTrigger>
                </div>

                {/* Dialog Content */}
                <div className="space-y-4 text-sm text-muted-foreground">
                  {card.topPara && <p>{card.topPara}</p>}

                  {card.points.length > 0 && (
                    <ul className="list-disc list-inside space-y-1">
                      {card.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {card.bottomPara && <p>{card.bottomPara}</p>}
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlatformCards;
