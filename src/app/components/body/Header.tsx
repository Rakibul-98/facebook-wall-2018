"use client";

import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Wall");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const tabs = ["Wall", "Info", "Photos", "Notes", "Boxes"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post Text:", text);
    console.log("Image File:", image);
    setText("");
    setImage(null);
  };

  return (
    <div className="px-4 w-full space-y-4">
      <div className="flex space-x-4 text-sm font-sans">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-1 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 font-bold"
                : "text-blue-700 cursor-pointer"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 p-2 space-y-2"
      >
        <textarea
          placeholder="What's on your mind?"
          className="w-full border border-gray-300 p-2 text-sm resize-none"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex justify-between items-center text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <label className="flex space-x-1 cursor-pointer hover:underline">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
              <span>Attach Photo</span>
            </label>
            {image && (
              <span className="text-green-600 text-xs">Image ready</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 text-xs hover:bg-blue-700 cursor-pointer"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
}
