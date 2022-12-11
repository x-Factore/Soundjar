import React from "react";
import posts from "../data/example-data";
import { useState } from "react";

const x = posts;

const AllPosts = () => {
  const [post, setPost] = useState([]);
  

// get all 
  return (
    <div>
      {x.map((prop) => {
        return (
          <div className="post-box">
            <img src={prop.cover} className="post-cover" alt="" />
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
