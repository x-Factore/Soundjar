import React from "react";
import posts from "../data/example-data";
  console.log("eeeeeeeeeeeeeeeeee", posts);

const AllPosts = () => {
  return (
    <div>
      {posts.data.map((prop) => {
        return (
          <div className="post-box">
            <img src={prop.cover} className="post-cover" />
            <h1>{prop.title}</h1>
            <h2>{prop.artist}</h2>
            <a href={prop.link} target="blank">
              ▶ Listen
            </a>
            <h2>{"Shared by " + prop.user}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
