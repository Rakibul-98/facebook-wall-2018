"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

interface Post {
  id: string;
  user_name: string;
  text: string;
  image_url: string | null;
  created_at: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();

    const subscription = supabase
      .channel("posts-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        (payload) => {
          const newPost = payload.new as Post;
          setPosts((prevPosts) => [newPost, ...prevPosts]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error.message);
    } else {
      setPosts(data);
    }
    setLoading(false);
  };

  function formatPostTime(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();

    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);

    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();

    const timeString = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (isToday) {
      return `Today at ${timeString}`;
    } else if (isYesterday) {
      return `Yesterday at ${timeString}`;
    } else {
      return `${date.getDate()} ${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear()} at ${timeString}`;
    }
  }

  return (
    <div className="space-y-4 w-full p-4">
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {posts.map((post) => (
        <div key={post.id} className="border-b-2 border-gray-300">
          <div className="flex justify-between text-sm text-gray-700 font-bold mb-1">
            <span className="text-lg">{post.user_name}</span>
            <span className="text-gray-500 font-normal">
              {formatPostTime(post.created_at)}
            </span>
          </div>

          <p className="mb-2 text-gray-800 text-sm">{post.text}</p>

          {post.image_url && (
            <div className="mb-2">
              <Image
                src={post.image_url}
                alt="Post"
                width={150}
                height={150}
                className="rounded bg-gray-50"
              />
            </div>
          )}
        </div>
      ))}

      {!loading && posts.length === 0 && (
        <p className="text-center text-gray-500">No posts yet.</p>
      )}
    </div>
  );
}
