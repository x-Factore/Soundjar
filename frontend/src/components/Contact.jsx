import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="fs-5 text-center mb-4">
                Have Some <b>Questions ?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=2000&t=st=1670772066~exp=1670772666~hmac=9ee61f7ba5a9f00b45b1e32a31e5f34e4b168a0c76b2d9afc4d918e399924921"
                alt="Contact"
                className="w-75"
              />
            </div>
            <div className="col-md-6">
              <form action="">
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Your Name{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Besto Friendo"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your Question{" "}
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">
                  Send Message <i className="fa fa-paper-plane ms-2 w-100"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
