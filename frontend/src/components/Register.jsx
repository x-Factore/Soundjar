import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  console.log(form);
  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = () => {
    axios
      .post("http://localhost:5000/signup", form)
      .then((response) => {
        alert(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data.message));
        window.location.reload(false);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hi, Wassssup</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className="mb-4">OR</h5>
            <Link
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </Link>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
            <form onSubmit={onSubmitHandler}>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  onChange={onChangeHandler}
                />
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={onChangeHandler}
                />
              </div>

              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
