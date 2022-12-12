import React from "react";
import { useEffect } from "react";
import Music from "./MusicRowTable";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [music, setMusic] = useState([]);
  const [form, setForm] = useState({});

  // get all Users from data
  useEffect(() => {
    axios.get("/posts").then((result) => {
      console.log(result.data);
      setMusic(result.data);
    });
  }, []);

  // add a User
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/posts", form)
      .then((Response) => {
        alert(Response.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  //delete a user
  const Delete = (id__) => {
    if (window.confirm("are you sure to delete this music !")) {
      axios.delete(`/posts/${id__}`).then((Response) => {
        alert(Response.data.message);
        window.location.reload();
      });
    }
  };
  return (
    <div className="row p-4">
      <div className="mt-4">
        <h1>Soundjar the power of the music sharing</h1> <br />
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={handleSubmit}>
          <input
            label="Title"
            type="text"
            name="Title"
            placeholder="put the name"
            onChange={handleChange}
          />
          <input
            label="Link"
            type="text"
            name="Link"
            placeholder="put the link"
            onChange={handleChange}
          />
          <input
            label="Img"
            type="text"
            name="Img"
            placeholder="put the image"
            onChange={handleChange}
          />

          <button className="btn btn-primary" type="submit">
            Add music{" "}
          </button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Link</th>
              <th scope="col">Img</th>
            </tr>
          </thead>
          <tbody>
            {music.map(({ Title, Body, Img, _id }) => (
              <Music
                Title={Title}
                Body={Body}
                Img={Img}
                Id={_id}
                Delete={Delete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
