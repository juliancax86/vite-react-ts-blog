import React from "react";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import UserDetails from "./components/UserDetails";
import { useTruncate } from "./hooks/useTruncate";

const App: React.FC = () => {
  const { truncate } = useTruncate();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">SALVO BLOG</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <PostList truncateLength={100} truncate={truncate} />
        </div>
        <div className="col-span-1">
          <PostItem postId={1} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2">
          <UserDetails userId={1} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default App;
