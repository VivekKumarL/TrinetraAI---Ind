"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { EyebrowIndicator } from "../ui/eyebrow-indicator";

// const topCards = [
//   {
//     image: "/trinetraPoster2.png",
//     title: "AI-Driven Cybersecurity Intelligence",
//     desc: "Traditional tools rely on manual efforts and rule-based detection, which often miss evolving threats. TrinetraAI leverages AI & machine learning to",
//     col: "#80ff80",
//   },
//   {
//     image: "/trinetraPoster2.png",
//     title: "Linear Build",
//     desc: "Make progress with issue tracking and cycle planning",
//     col: "#ffff66",
//   },
// ];

const gridCards = [
  {
    image: "/trinetraPoster2.png",
    title: "Enterprise-Grade Security, Built for Everyone",
    desc: "From startups to enterprises, TrinetraAI is designed for scalability and ease of use.",
    points: [
      "Startups & SMBs – Affordable, AI-powered security without complex setup.",
      "Developers & Security Teams – Advanced penetration testing & automated vulnerability analysis.",
      "Enterprises – Real-time monitoring, AI-driven threat intelligence, and scalable cybersecurity solutions.",
    ],
  },
  {
    image: "/trinetraPoster2.png",
    title: "Next-Gen AI Innovation",
    desc: "Unlike conventional cybersecurity platforms, TrinetraAI isn’t static—we are constantly innovating to stay ahead of cybercriminals.",
    points: [
      "AI-Driven Log Analysis – Detects anomalies in security logs like a next-gen SIEM.",
      "Self-Learning AI – Continuously updates its detection models to counter evolving threats.",
      "AI Exploit Simulation – Predicts and tests potential attack scenarios before hackers do.",
    ],
  },
];

export default function WhyUsSectionTwo() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-10">
      <h3 className="text-5xl font-extrabold text-center ">
        What Sets TrinetraAI Apart?
      </h3>
      {/* Top Two Cards */}
      <div className="grid md:grid-cols-1 gap-6">
        <Card className="overflow-hidden">
          <Image
            src="/trinetraPoster2.png"
            alt="card one image"
            width={600}
            height={300}
            className="w-full h-56 object-cover"
          />
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <div className="flex items-center gap-2">
                <EyebrowIndicator color="#ffff66" className="w-4 h-2" />
                <h3 className="text-xl font-medium ">
                  AI-Driven Cybersecurity Intelligence
                </h3>
              </div>
              <p className="text-base font-semibold text-muted-foreground">
                Traditional tools rely on manual efforts and rule-based
                detection, which often miss evolving threats. TrinetraAI
                leverages AI & machine learning to:
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                <li>Predict and prevent cyberattacks before they happen.</li>
                <li>Continuously learn and adapt to new attack patterns.</li>
                <li>
                  Automate security for faster and more precise threat detection
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border"
            >
              <ChevronRightIcon />
            </Button>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <Image
            src="/trinetraPoster2.png"
            alt="dashbaord image"
            width={600}
            height={300}
            className="w-full h-56 object-cover"
          />
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <div className="flex items-center gap-2">
                <EyebrowIndicator color="#80ff80" className="w-4 h-2" />
                <h3 className="text-xl font-medium ">
                  Real-Time Threat Protection
                </h3>
              </div>
              <p className="text-base font-semibold text-muted-foreground">
                We don’t just detect threats—we neutralize them in real-time.
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                <li>
                  Instant Phishing URL Detection – Blocks malicious links before
                  they are clicked.
                </li>
                <li>
                  AI-Powered Web Pentesting – Identifies critical
                  vulnerabilities like SQL Injection, XSS, and more.
                </li>
                <li>
                  Automated Security Remediation – Fixes vulnerabilities
                  automatically, reducing the need for manual intervention.
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border"
            >
              <ChevronRightIcon />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {gridCards.map((card, i) => (
          <Card key={i} className="overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4 space-y-3">
              <h3 className="text-base font-semibold ">{card.title}</h3>
              <p className="text-xs font-medium text-muted-foreground">
                {card.desc}
              </p>

              {/* Points List */}
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {card.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border"
                >
                  <ChevronRightIcon />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Final Section */}
      <div className="flex justify-between items-center border rounded-lg p-6 h-auto bg-primary-foreground">
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-muted-foreground">
            Built for Simplicity & Efficiency
          </h3>
          <p className="text-base font-semibold">
            Cybersecurity doesn’t have to be complicated. TrinetraAI provides an
            intuitive, easy-to-use interface with powerful AI automation.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              No need for deep technical expertise – Our AI handles the hard
              work.
            </li>
            <li>
              Fast, accurate results – Get security insights in seconds, not
              hours.
            </li>
            <li>
              Seamless integration – Works effortlessly with existing security
              tools and platforms.
            </li>
          </ul>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border self-start"
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
