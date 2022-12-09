import React from 'react'

function About() {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://media.istockphoto.com/id/1086341762/vector/about-us-flat-design-style-colorful-illustration.jpg?s=612x612&w=0&k=20&c=jeUDlovR0TRmuSb6lp19P7ijHx8UNtZzZhHJZVmoWJc="
                alt="About"
                className="w-75 mt-5"
              />
            </div>
            <div className='col-md-6'>
                <h3 className='fs-5'>About Us</h3>
                <h3 className='display-6'>Who <b>We</b> Are</h3>
                <p className='lead'> Soundjar is your friend in case u need to listen to new music , here u can share your music.</p>
                <hr />
                <p className='lead mb-4'>We'r proud that u are in our site </p>
                <button className="btn btn-primary rounded-pill py-2">Get Started</button>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About