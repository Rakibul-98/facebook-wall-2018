import Image from "next/image";
import img from "../../../../public/profile.png";

const dummyPosts = [
  {
    id: 1,
    name: "Greg Wientjes",
    text: "Happy baby!",
    image: img,
    time: "just now",
  },
  {
    id: 2,
    name: "Greg Wientjes",
    text: "Check out this bike family!",
    image: "https://images.unsplash.com/photo-1614794869239-26c39de3d456",
    time: "2m",
  },
];

export default function Feed() {
  return (
    <div className="space-y-4 w-full p-4">
      {dummyPosts.map((post) => (
        <div key={post.id} className="border-b-2 border-gray-300">
          <div className="flex justify-between text-sm text-gray-700 font-bold mb-1">
            <span className="text-lg">{post.name}</span>
            <span className="text-gray-500 font-normal">{post.time}</span>
          </div>

          <p className="mb-2 text-gray-800 text-sm">{post.text}</p>

          {post.image && (
            <div className="mb-2">
              <Image
                src={post.image}
                alt="Post"
                width={150}
                height={150}
                className="rounded bg-gray-50"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
