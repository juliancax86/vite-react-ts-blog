import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <>
      <div className='App'>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
