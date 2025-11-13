"use client";

const menuItems = [
  { label: "Product", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Customers", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/" },
];

const MenuItems = () => {
  return (
    <div className="flex gap-6">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default MenuItems;
