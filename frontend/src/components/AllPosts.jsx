 const AllPosts = (props) => {
    console.log(props)
    return props.data.map(prop=>{
      return (
        <div className='post-box'>
            <img src={prop.cover} className="post-cover"></img>
            <h1>{prop.title}</h1>
            <h2>{prop.artist}</h2>
            <a href={prop.link} target='blank'>▶ Listen</a>
            <h2>{'Shared by '+ prop.user}</h2>
        </div>
      )
    })
  };

  export default AllPosts