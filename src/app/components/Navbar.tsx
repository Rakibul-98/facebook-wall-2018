import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "#" },
  { label: "Friends", href: "#" },
  { label: "Inbox", href: "#", badge: 2 },
];

const userLinks = [{ label: "Settings", href: "#" }];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#3b5998] text-white px-4 py-1 text-sm font-sans flex-wrap">
      <div className="flex items-center space-x-3">
        <span className="font-bold text-lg">facebook</span>

        {navLinks.map(({ label, href, badge }) => (
          <div key={label} className="relative hidden md:block">
            <Link href={href} className="hover:underline">
              {label}
            </Link>
            {badge && (
              <span className="absolute -top-1 -right-3 bg-gray-200 text-[#3b5998] text-xs font-bold px-1 rounded-full">
                {badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex-grow" />

      <div className="flex items-center space-x-3">
        <span className="hover:underline cursor-pointer whitespace-nowrap">
          Rakibul H.
        </span>

        {userLinks.map(({ label, href }) => (
          <Link key={label} href={href} className="hover:underline">
            {label}
          </Link>
        ))}

        <div className="items-center border border-gray-300 bg-white px-1 hidden sm:flex">
          <input
            type="text"
            placeholder="Search"
            className="text-black text-sm outline-none px-1 py-0.5 w-24 sm:w-32 md:w-36"
          />
          <button className="px-1">🔍</button>
        </div>
      </div>
    </nav>
  );
}
