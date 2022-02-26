import React, { useState, useEffect } from 'react';
import PostCard from "../../components/PostCard/PostCard";
import Header from "../../components/Header/Header";


export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(data => data.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <Header />
      <div className="post-container">
      {posts.map((post) => {
        return (
          <PostCard key={post.id} post={post}/>
        )
      })}
      </div>
    </div>
  );
}
