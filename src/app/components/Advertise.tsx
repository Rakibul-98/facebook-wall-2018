import Image from "next/image";

export default function Advertise() {
  const ads = [
    {
      id: 1,
      title: "Scuba Diving Vacations",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description:
        "Dive or Snorkel with Stuart Cove's Dive Bahamas in Nassau. World class walls, wrecks, reefs and unforgettable shark dives! 800-879-9832",
    },
    {
      id: 2,
      title: "Hard Drive Imaging?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Crystal_Clear_action_reload.svg/1024px-Crystal_Clear_action_reload.svg.png",
      description:
        "True hardware-independent Windows imaging. Only one master image needed for easy deployment regardless of manufacturer. See how!",
    },
    {
      id: 3,
      title: "Wedding Card Box",
      image: "https://images.unsplash.com/photo-1520583457224-aee11bad5112",
      description:
        "Beautiful handmade card boxes for your special day. Elegant, customizable, and perfect for weddings.",
    },
  ];

  return (
    <div className="text-xs w-64 font-sans text-gray-700 space-y-4">
      <div className="text-gray-500 text-[11px] mb-1">Advertise</div>

      {ads.map((ad) => (
        <div key={ad.id} className="space-y-1">
          <a href="#" className="text-blue-700 font-bold hover:underline block">
            {ad.title}
          </a>

          <div className="w-full h-28 relative">
            <Image
              src={ad.image}
              alt={ad.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700">{ad.description}</p>

          <hr className="border-gray-300" />
        </div>
      ))}
    </div>
  );
}
