import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Samplebook from "../components/Samplebook.jsx";
import "../components/HomePage.css";
import toast, { Toaster } from "react-hot-toast";

function Books() {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const element = document.documentElement;
  const [sticky, setSticky] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/book/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

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

  const notify = () => {
    toast.success("Logout Successful", { duration: 1500 });
    navigate("/");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="stylesheet" href="HomePage.css" />
      
      <div className={`navbar max-w-screem-2x1 container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50  ${
          sticky
            ? "sticky nav-bar shadow-md bg-base-200 duration-300 transition-all ease-in-out"
            : "bg-custom-bg-color"
        }`}>
        <p className="text-bold text-xl">Library Management System</p>
        <form className="relative" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Type here"
            className="w-full md:w-80 p-4 rounded-full bg-slate-800 text-white focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-900 rounded-full hover:bg-slate-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>

        <div className="">
          <a
            className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
            onClick={notify}
          >
            Logout
            <Toaster />
          </a>
        </div>
      </div>
      <div className="main-container mt-12 pt-5">
        <Samplebook />
      </div>
      <footer>
        <div className="foot-panel1 cursor-pointer" onClick={goToBtn}>
          Back to Top
        </div>
        <div className="foot-panel2">
          <ul>
            <p>Contact Us</p>
            <p>Email: abcd@iitdh.ac.in</p>
            <p>Mobile: 9182736450</p>
          </ul>
          <ul>
            <p>TIMINGS</p>
            <p>Sun: 9:00 AM - 6:00 PM</p>
            <p>Mon - Fri: 8:00 AM - 7:00 PM</p>
            <p>Sat: 9:00 AM - 6:00 PM</p>
          </ul>
          <ul>
            <p>ADDRESS</p>
            <p>IIT DHARWAD Permanent Campus</p>
            <p>Dharwad, Belur Dist</p>
            <p>Karnataka, INDIA</p>
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
  );
}

export default Books;
