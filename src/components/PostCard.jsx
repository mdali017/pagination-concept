import React, { useEffect, useState } from "react";

const PostCard = ({ posts }) => {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setPosts(data);
  //       });
  //   }, []);

  return (
    <div className="border">
      <h2 className="text-xl font-bold">PostCard</h2>
      <div className="grid grid-cols-4 gap-7 p-5">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="border text-left p-6 h-[300px]">
              <h1 className="text-xl font-semibold text-center">{post.id}</h1>
              <h3 className="text-2xl font-bold text-center">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
