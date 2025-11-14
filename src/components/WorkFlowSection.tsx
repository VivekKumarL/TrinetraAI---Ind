"use client";

import WorkflowCarousel from "./WorkflowCarousel";

const WorkflowSection = () => {
  const cards = [
    { image: "/trinetraPoster2.png", title: "Slack Integration", desc: "AI-Powered Phishing Detection" },
    { image: "/trinetraPoster2.png", title: "GitHub Sync", desc: "AI-Based Web Penetration Testing" },
    { image: "/trinetraPoster2.png", title: "Figma Plugin", desc: "AI-Driven Threat Intelligence & Monitoring" },
    { image: "/trinetraPoster2.png", title: "Zapier Automations", desc: "Secure Code Analysis" },
    { image: "/trinetraPoster2.png", title: "Google Calendar", desc: "AI-Powered Cybersecurity API" },
  ];

  return (
    <section className="py-16 px-4 space-y-10 max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
          <div className="w-lg">
            <span className="font-medium text-sm uppercase">Core Services</span>
            <h2 className="text-4xl font-semibold">
              TrinetraAI Services – AI-Powered Cybersecurity Solutions
            </h2>
          </div>

          <div className="text-white space-y-2 w-sm">
            <p className="text-gray-600 text-sm font-semibold">
              At TrinetraAI, we provide cutting-edge AI-driven security solutions to protect businesses, developers, and enterprises from modern cyber threats.
            </p>
          </div>
        </div>

        {/* ✅ Only pass cards */}
        <WorkflowCarousel cards={cards} />
      </div>
    </section>
  );
};

export default WorkflowSection;
