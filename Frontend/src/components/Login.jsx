import React, { useEffect, useState } from 'react'
import "../components/HomePage.css";


function homePage() {

  const element = document.documentElement;
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.addEventListener("scroll", handleScroll);
      };
    };
  }, []);

  const goToBtn=() => {
    window.scrollTo({top:0, left:0, behavior: "smooth"});
  }
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home-Page</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="HomePage.css" />
  <header>
    <div className={`navbar max-w-screem-2x1 container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50  ${
          sticky
            ? "sticky nav-bar shadow-md bg-base-200 duration-300 transition-all ease-in-out"
            : "bg-custom-bg-color"
        }`}>
      <p className=" text-semibold text-2xl">Library Management System</p>
      <div className="">
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  href="/login"
                >
                  Login
                </a>
              </div>
    </div>

  </header>
  <div className="bodyPart mt-16">
    <div className="quote">
      <p id="line">Education is for improving the lives of others</p>
      <p id="line">and for leaving your community and</p>
      <p id="line">would better than you find it .</p>
      <p
        id="authour"
        style={{ fontSize: "1.5rem", margin: "2rem 0rem 0rem 70rem" }}
      >
        - Marian Wright Edelman
      </p>
    </div>
  </div>
  <footer>
    <div className="foot-panel1 cursor-pointer" onClick={goToBtn}>Back to Top</div>
    <div className="foot-panel2">
      <ul>
        <p>Contact Us</p>
        <p>Email : abcd@iitdh.ac.in</p>
        <p>Mobile : 9182736450</p>
      </ul>
      <ul>
        <p>TIMINGS</p>
        <p>Sun : 9:00 AM - 6:00 PM</p>
        <p>Mon - Fri : 8:00 AM - 7:00 PM</p>
        <p>Sat : 9:00 AM - 6:00 PM</p>
      </ul>
      <ul>
        <p>ADDRESS</p>
        <p>IIT DHARWAD Permanent Campus</p>
        <p>Dharwad , Belur Dist</p>
        <p>karnataka , INDIA .</p>
      </ul>
      <ul>
        <p>STAY CONNECTED</p>
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-twitter" />
      </ul>
    </div>
    <div className="foot-panel3">
      <div className="logo" />
    </div>
    <div className="foot-panel4">
      <div className="copyright">
        © 2024 ABC Public Library. All Rights Reserved.
      </div>
    </div>
  </footer>
</>
  )
}

export default homePage;
