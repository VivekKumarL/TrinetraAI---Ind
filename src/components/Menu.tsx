"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuItems from "./MenuItems";

const menuItems = [
  { label: "Product", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Customers", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        alt="HamburgerMenu"
        width={28}
        height={82}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="mt-4 flex flex-col lg:flex-row items-center justify-center  absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] gap-8 text-xl z-10">
          {menuItems.map((i) => (
            <div className="py-2" key={i.label}>
              <Link href={i.href}>{i.label}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

{
  /* <div className='mt-4 text-sm flex items-center justify-center gap-4 '>
     {menuItems.map(i=>(
            <div className="py-2" key={i.label}><Link  href={i.href}>{i.label}</Link></div>
        ))} 
    </div>*/
}
