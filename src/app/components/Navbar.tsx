import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#3b5998] text-white px-4 py-1 text-sm font-sans">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg">facebook</span>

        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="#" className="hover:underline">
          Profile
        </Link>
        <Link href="#" className="hover:underline">
          Friends
        </Link>

        <div className="relative">
          <Link href="#" className="hover:underline">
            Inbox
          </Link>
          <span className="absolute -top-1 -right-3 bg-gray-200 text-[#3b5998] text-xs font-bold px-1 rounded-full">
            2
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="hover:underline cursor-pointer">Rakibul H.</span>
        <Link href="#" className="hover:underline">
          Settings
        </Link>
        <Link href="#" className="hover:underline">
          Logout
        </Link>

        <div className="flex items-center border border-gray-300 bg-white px-1">
          <input
            type="text"
            placeholder="Search"
            className="text-black text-sm outline-none px-1 py-0.5 w-28"
          />
          <button className="px-1">🔍</button>
        </div>
      </div>
    </nav>
  );
}
