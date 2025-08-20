import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import Cards2 from "./Cards2";

function BookDetails() {
  const { title } = useParams(); // Capture the book title from the URL parameters
  const [book, setBook] = useState(null); // Initialize book state to null
  const [loading, setLoading] = useState(true); // Add loading state
  const [departmentBooks, setDepartmentBooks] = useState([]); // State for storing books in the same department

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/book?title=${encodeURIComponent(title)}`
        );
        if (res.data) {
          setBook(res.data);
          // fetchDepartmentBooks(res.data.department);
          fetchDepartmentBooks(res.data.department, res.data.title);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchDepartmentBooks = async (department, currentBookTitle) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/books?department=${encodeURIComponent(department)}`
        );
        if (res.data) {
          const filteredBooks = res.data.filter(book => book.title !== currentBookTitle);
          setDepartmentBooks(filteredBooks);
        }
      } catch (error) {
        console.error("Error fetching department books:", error);
      }
    };

    fetchBook();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!book) {
    return <div>Book not found</div>;
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(departmentBooks);
  return (
    <>
      <div className="">
      </div>

      <Cards2 item={book} key={book.id} />
        
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4">
      <div>
          <h1 className="font-semibold text-xl pb-2 mt-10 ml-10">
            Books Recommandations
          </h1>
        </div>


      <Slider  {...settings}>
        {departmentBooks.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
      </div>
    </>
  );
}

export default BookDetails;
