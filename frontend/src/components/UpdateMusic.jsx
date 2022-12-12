import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateMusic() {
  const [form, setForm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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
      .put(`http://localhost:5000/posts/${id}`, form)
      .then((res) => {
        navigate("/Home");
      })
      .catch((err) => setErrors(err.response.data));
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((res) => {
      setForm(res.data);
    });
  }, []);

  return (
    <div className="container mt-5 col-12 col-lg-4">
      <form onSubmit={handleSubmit}>
        <input
          label="Title"
          type="text"
          name="Title"
          onChange={handleChange}
          value={form.Title}
        />
        <input
          label="Body"
          type="text"
          name="Body"
          onChange={handleChange}
          value={form.Body}
        />
        <input
          label="Img"
          type="text"
          name="Img"
          onChange={handleChange}
          value={form.Img}
        />

        <button className="btn btn-primary" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}
export default UpdateMusic;
