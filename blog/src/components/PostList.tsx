import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Post, PropsTrucate } from './types';

const PostList: React.FC<PropsTrucate> = ({ truncateLength, truncate }) => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    20
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post: Post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <div className="p-4">
            <h2 className="text-xl text-sky-700 font-bold mb-2">
              {post.title}
            </h2>
            <p className="text-gray-700 text-base">
              {truncate(post.body, truncateLength)}
            </p>
            <p className="text-gray-600 text-sm mt-2">Author: {post.userId}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
