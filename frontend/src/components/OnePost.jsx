import React from "react";

const OnePost = (props) => {
    console.log(props.data)
    return (
        <div className='onePost-box'>
            <img src={props.data.cover} className="onePost-cover"></img>
            <h1>{props.data.title}</h1>
            <h2>{props.data.artist}</h2>
            <p>0 Upvotes</p>
            <p>0 Downvotes</p>
            <button>↑</button>
            <button>↓</button>
            <a href={props.data.link} target='blank'>▶ Listen</a>
            <h3>{'Shared by '+ props.data.user}</h3>
        </div>
      )
  };

  export default OnePost