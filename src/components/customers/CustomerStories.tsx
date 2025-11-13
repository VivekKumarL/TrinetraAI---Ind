"use client"

import { ArrowUpRightIcon, StarIcon, UsersIcon, HeartIcon } from "lucide-react"

const cards = [
  {
    id: 1,
    icon: <StarIcon className="h-7 w-7 text-yellow-500" />,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.",
    linkText: "Read Story",
    bgImg: "/5170.jpg",
  },
  {
    id: 2,
    icon: <UsersIcon className="h-7 w-7 text-blue-500" />,
    title: "Over 10K Active Users , iste quasi voluptatem ullam dolores commodi explicabo debitis",
    linkText: "Read Story",
    bgImg: "/pattern2.svg",
  },
  {
    id: 3,
    icon: <HeartIcon className="h-7 w-7 text-pink-500" />,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.",
    linkText: "Read Story",
    bgImg: "/pattern3.svg",
  },
  {
    id: 4,
    icon: <ArrowUpRightIcon className="h-7 w-7 text-green-500" />,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.",
    linkText: "Read Story",
    bgImg: "/pattern4.svg",
  },
]

export default function CustomerStories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative p-6 rounded-xl border overflow-hidden bg-white dark:bg-gray-900 shadow-lg transition hover:shadow-xl"
        >
          {/* Background image on top-right */}
          {/* <div className="absolute top-4 right-4 opacity-20 w-16 h-16">
            <Image
              src={card.bgImg}
              alt="pattern"
              width={140}
              height={90}
              className="object-contain"
            />
          </div> */}

          {/* Icon on top-left */}
          <div className="mb-6">{card.icon}</div>

          {/* Title */}
          <span className="block text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            {card.title}
          </span>

          {/* Link */}
          <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
            {card.linkText}
          </span>
        </div>
      ))}
    </div>
  )
}
