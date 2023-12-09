import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
            {posts.map((post) => (
              /*  <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p> */
              <span key={post.id}>
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                  {/* <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} /> */}
                  <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">{post.title}</h3>
                    <p className="text-gray-600 text-xl">{post.body}</p>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
