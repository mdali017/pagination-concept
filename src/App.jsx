import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import Pagination from "./components/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts, 14);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <h2>Welcome</h2>
      {/* <PostCard posts={posts} /> */}
      <PostCard posts={currentPosts} />
      <Pagination
        totalPosts={posts.length}
        postPerPage={postPerPage}
        setCurentPage={setCurentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default App;
