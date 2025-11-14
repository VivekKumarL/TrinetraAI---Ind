"use client";

import { useEffect, useState } from "react";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

// Menu items array
const menuItems = [
  { label: "Platform", href: "/platform" },
  { label: "TrinetraAI Scan", href: "/trinetraAI-scan" },
  { label: "Why TrinetraAI", href: "/whyus" },
  { label: "About Us", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted
    ? theme === "light"
      ? "/trinetralogo1.png"
      : "/trinetralogo1.png"
    : "/trinetralogo1.png";

  return (
    <footer className="text-gray-700 dark:text-gray-300 py-10 px-6 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Left: Logo & Social Icons */}
        <div>
          <Link href="/">
            {mounted ? (
              <Image
                src={logoSrc}
                alt="trinetra Nexus Logo"
                width={180}
                height={32}
                priority
              />
            ) : (
              <div style={{ width: 180, height: 32 }} />
            )}
          </Link>

          <div className="text-sm mb-4 mt-4">
            <h4 className="text-black dark:text-white font-semibold">
              Email:{" "}
              <a
                href="mailto:support@TrinetraAI.com"
                className="hover:text-[#5D2DFD]"
              >
                support@TrinetraAI.com
              </a>
            </h4>
          </div>

          <div className="flex space-x-4 mt-2">
            <Link href="https://instagram.com/TrinetraAI" target="_blank">
              <Instagram className="w-5 h-5 hover:text-[#5D2DFD] transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/TrinetraAI-private-limited"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 hover:text-[#5D2DFD] transition" />
            </Link>
          </div>
        </div>

        {/* Middle: Navigation Menus */}
        <div className="flex flex-col sm:flex-row gap-8 text-sm">
          {/* Company Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-[#5D2DFD]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-[#5D2DFD]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#5D2DFD]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Address */}
        <div className="text-sm">
          <h4 className="text-black dark:text-white font-semibold mb-3">
            Contact
          </h4>
          <p className="mb-1 font-semibold">TrinetraAI Private Limited</p>
          <p className="mb-1"></p>
          <p className="mb-1"> Gurugram, Haryana, India</p>
          <p className="mb-1">India</p>
          <p className="mb-1 font-bold">Head Office</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} TrinetraAI Pvt Ltd. All rights
        reserved.
      </div>
      <div>Made with ❤️ by Vivek Kumar</div>
    </footer>
  );
}
