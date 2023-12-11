import React from 'react';
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import UserDetails from "./components/UserDetails";
import Navbar from './components/NavBar';
import { useTruncate } from "./hooks/useTruncate";

const App: React.FC = () => {
  const { truncate } = useTruncate();

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <PostList truncateLength={100} truncate={truncate} />
        </div>
        <div className="col-span-1">
          <PostItem postId={2} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 margin-1">
          <UserDetails userId={1} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default App;
