"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ChevronRight,
  Briefcase,
  Building,
  Users,
  Globe,
  Star,
} from "lucide-react";

const data = {
  category1: [
    { id: 1, icon: <Briefcase size={20} />, name: "Company A", link: "#" },
    { id: 2, icon: <Building size={20} />, name: "Company B", link: "#" },
    { id: 3, icon: <Users size={20} />, name: "Company C", link: "#" },
  ],
  category2: [
    { id: 4, icon: <Globe size={20} />, name: "Company D", link: "#" },
    { id: 5, icon: <Star size={20} />, name: "Company E", link: "#" },
  ],
  category3: [
    { id: 6, icon: <Briefcase size={20} />, name: "Company F", link: "#" },
    { id: 7, icon: <Building size={20} />, name: "Company G", link: "#" },
  ],
  category4: [
    { id: 8, icon: <Users size={20} />, name: "Company H", link: "#" },
    { id: 9, icon: <Globe size={20} />, name: "Company I", link: "#" },
  ],
  category5: [
    { id: 10, icon: <Star size={20} />, name: "Company J", link: "#" },
    { id: 11, icon: <Briefcase size={20} />, name: "Company K", link: "#" },
  ],
};

export default function CustomerTabs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Customers</h2>

      <Tabs defaultValue="category1" className="w-full">
        {/* Centered Tabs List */}
        <TabsList className="flex justify-center-safe flex-wrap gap-3 mb-8 bg-transparent mx-auto">
          {Object.keys(data).map((key) => (
            <TabsTrigger
              key={key}
              value={key}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-transparent text-white hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              {key.replace("category", "Category ")}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        {Object.entries(data).map(([key, companies]) => (
          <TabsContent key={key} value={key} className="">
            <div className="flex flex-col gap-4 bg-background">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="flex items-center gap-4 border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer w-full bg-primary-foreground text-white"
                >
                  {/* Icon */}
                  <div className="text-blue-600">{company.icon}</div>

                  {/* Company Name */}
                  <span className="font-semibold text-lg">{company.name}</span>

                  {/* Spacer */}
                  <div className="flex-grow" />

                  {/* Read Story */}
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium flex items-center gap-1"
                  >
                    Read Story
                    <ChevronRight size={18} />
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
