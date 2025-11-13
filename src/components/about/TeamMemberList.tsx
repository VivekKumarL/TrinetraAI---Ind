"use client";

import { useState } from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LinkedinIcon } from "lucide-react";


// Example team data
const teamMembers = [
  {
    name: "Aarav Sharma",
    position: "Frontend Engineer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/aaravsharma",
  },
  {
    name: "Meera Desai",
    position: "UI/UX Designer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/meeradesai",
  },
  {
    name: "Rohan Patel",
    position: "Backend Developer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/rohanpatel",
  },
  {
    name: "Aarav Sharma",
    position: "Frontend Engineer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/aaravsharma",
  },
  {
    name: "Meera Desai",
    position: "UI/UX Designer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/meeradesai",
  },
  {
    name: "Rohan Patel",
    position: "Backend Developer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/rohanpatel",
  },
  {
    name: "Aarav Sharma",
    position: "Frontend Engineer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/aaravsharma",
  },
  {
    name: "Meera Desai",
    position: "UI/UX Designer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/meeradesai",
  },
  {
    name: "Rohan Patel",
    position: "Backend Developer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/rohanpatel",
  },
  {
    name: "Aarav Sharma",
    position: "Frontend Engineer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/aaravsharma",
  },
  {
    name: "Meera Desai",
    position: "UI/UX Designer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/meeradesai",
  },
  {
    name: "Rohan Patel",
    position: "Backend Developer",
    avatar: "/teamprofile.jpg",
    linkedin: "https://linkedin.com/in/rohanpatel",
  },
  // add 12 more similarly
];

export default function TeamMemberList() {
   const [open, setOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => {
         

          return (
            <Popover key={index} open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div
                  className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-md transition"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <p className="font-medium">{member.name}</p>
                </div>
              </PopoverTrigger>

              <PopoverContent
                side="top"
                align="center"
                className="w-[300px] p-4 shadow-lg rounded-lg"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover w-16 h-16"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {member.position}
                    </p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <LinkedinIcon size={22} />
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
    </div>
  );
}
