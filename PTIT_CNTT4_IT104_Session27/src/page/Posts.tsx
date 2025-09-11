import React from "react";
import { posts } from "../components/data";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div>
      {posts.map((item) => (
        <div key={item.id} className="w-screen p-2 m-3 shadow-2xs ">
          <Link to={`/blog/posts/${item.id}`}> {item.title}</Link>
          <p>{item.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
