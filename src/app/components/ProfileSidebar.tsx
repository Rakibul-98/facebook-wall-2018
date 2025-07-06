import Image from "next/image";
import Link from "next/link";

export default function ProfileSidebar() {
  return (
    <aside className="hidden sm:block w-64 text-sm font-sans space-y-4">
      <div className="w-full">
        <Image
          src="/profile.png"
          alt="Mark"
          width={240}
          height={240}
          className="border border-gray-300 w-full object-cover"
        />
      </div>

      <div className="space-y-1 text-blue-700">
        <Link href="#" className="block hover:underline">
          View Photos of Rakibul (541)
        </Link>
        <Link href="#" className="block hover:underline">
          View Videos of Rakibul (14)
        </Link>
        <Link href="#" className="block hover:underline">
          Poke Rakibul
        </Link>
      </div>

      <div className="border border-gray-300">
        <div className="bg-gray-100 font-bold text-gray-700 px-2 py-1 border-b border-gray-300">
          Information
        </div>
        <div className="p-2 space-y-2 text-gray-800 text-sm">
          <div>
            <span className="text-gray-500">Networks:</span>
            <br />
            Facebook
            <br />
            Harvard Alum
            <br />
            San Francisco, CA
          </div>
          <div>
            <span className="text-gray-500">Birthday:</span>
            <br />
            May 14, 2001
          </div>
          <div>
            <span className="text-gray-500">Current City:</span>
            <br />
            Dhaka, Bangladesh
          </div>
        </div>
      </div>

      <div className="border border-gray-300">
        <div className="bg-gray-100 font-bold text-gray-700 px-2 py-1 border-b border-gray-300">
          Mutual Friends
        </div>
        <div className="p-2 text-blue-700 hover:underline cursor-pointer">
          287 friends in common <span className="text-gray-500">See All</span>
        </div>
      </div>
    </aside>
  );
}
