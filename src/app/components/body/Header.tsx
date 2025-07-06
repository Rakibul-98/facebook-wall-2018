/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Wall");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const tabs = ["Wall", "Info", "Photos", "Notes", "Boxes"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Post cannot be empty!");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = null;

      if (image) {
        const filePath = `${Date.now()}_${image.name}`;
        const { error: uploadError } = await supabase.storage
          .from("post-images")
          .upload(filePath, image);

        if (uploadError) {
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }

        imageUrl = supabase.storage.from("post-images").getPublicUrl(filePath)
          .data.publicUrl;
      }

      const { error: insertError } = await supabase.from("posts").insert({
        text,
        image_url: imageUrl,
        user_name: "Rakibul Hasan",
      });

      if (insertError) {
        throw new Error(`Post save failed: ${insertError.message}`);
      }

      console.log("Post successfully saved to Supabase!");
      setText("");
      setImage(null);
    } catch (err: any) {
      console.error("Error:", err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
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
                : "text-blue-700 cursor-pointer hover:underline"
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
          disabled={loading}
        />

        <div className="flex justify-between items-center text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <label className="flex space-x-1 cursor-pointer hover:underline">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                disabled={loading}
              />
              <span>Attach Photo</span>
            </label>
            {image && (
              <span className="text-green-600 text-xs">Image ready</span>
            )}
          </div>

          <button
            type="submit"
            className={`bg-blue-600 text-white px-3 py-1 text-xs ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700 cursor-pointer"
            }`}
            disabled={loading}
          >
            {loading ? "Posting..." : "Share"}
          </button>
        </div>
      </form>
    </div>
  );
}
