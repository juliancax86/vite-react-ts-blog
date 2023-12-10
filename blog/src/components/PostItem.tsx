import React from "react";
import useFetch from "../hooks/useFetch";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Props {
  postId: number;
}

const PostItem: React.FC<Props> = ({ postId }) => {
  const {
    data: post,
    loading: postLoading,
    error: postError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    20
  );

  if (postLoading || commentsLoading) {
    return <div>Loading...</div>;
  }

  if (postError || commentsError) {
    return <div>Error: {postError?.message || commentsError?.message}</div>;
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h2 className="text-xl text-sky-700 font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 text-base">{post.body}</p>
        <h3 className="text-lg  text-amber-400 font-bold mt-4 mb-2">
          Comments
        </h3>
        {comments.map((comment: Comment) => (
          <div
            key={comment.id}
            className="bg-gray-100 rounded-lg p-4 mt-2 shadow-md"
          >
            <h4 className="text-base  text-sky-700 font-bold mb-2">
              {comment.name}
            </h4>
            <p className="text-gray-700 text-base">{comment.body}</p>
            <p className="text-gray-600 text-sm mt-2">{comment.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
