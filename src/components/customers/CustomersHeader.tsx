"use client"

import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

export default function CustomersHeader() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-left space-y-4">
      <hgroup className="max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          What our customers say about us
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          See how brands trust us to deliver outstanding service and experiences.Trusted by ambitious startups to major enterprises.
        </p>
      </hgroup>

      <div className="pt-4">
        <Link
          href="/"
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
        >
          Go to Homepage
          <ChevronRightIcon className="ml-1 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
