import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const WhyusTopHeader = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-left space-y-4">
      <hgroup className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Why Choose TrinetraAI? The Future of AI-Powered Cybersecurity
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Cyber threats are evolving faster than ever, and traditional security
          solutions are struggling to keep up. TrinetraAI is not just another
          cybersecurity tool—it's a revolutionary AI-powered security ecosystem
          designed to detect, analyze, and neutralize threats before they
          strike.
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
  );
};

export default WhyusTopHeader;
