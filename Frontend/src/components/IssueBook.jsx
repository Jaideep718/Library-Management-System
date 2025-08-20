
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function IssueBook() {
  const { title } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split("T")[0]);
  const [dueDate, setDueDate] = useState("");
  const [isIssued, setIsIssued] = useState(false);
  const [email, setEmail] = useState(""); // State for email

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/book?title=${encodeURIComponent(title)}`);
        if (res.data) {
          setBook(res.data);
          const dueDate = new Date();
          dueDate.setDate(dueDate.getDate() + 10);
          setDueDate(dueDate.toISOString().split("T")[0]);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [title]);

  const handleIssueBook = async (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    if (storedEmail !== email) {
      toast.error("Email does not match logged in user", { duration: 2000 });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/issue", {
        title: decodeURIComponent(title),
        email,
        issueDate,
        dueDate,
      });
      console.log("Issue Book Response:", response.data);
      setIsIssued(true);
      toast.success("Book successfully issued", { duration: 2000 });
      setTimeout(() => {
        navigate("/books");
      }, 2000);
    } catch (error) {
      toast.error("You have already borrowed this book", { duration: 2000 });
      // console.error("Error issuing book:", error);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }
  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-custom-bg-color">
      <h1 className="text-3xl font-bold mb-5 text-center">Issue Book</h1>
      {isIssued ? (
        <div className="text-center text-green-500">
          <p>Book successfully issued!</p>
          <p>You will be redirected to the Books page shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleIssueBook} className="flex flex-col">
          <p>
            <strong>Title:</strong> {book.title}
          </p>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>
            <strong>Description:</strong> {book.description}
          </p>
          <label htmlFor="email" className="mb-1 mt-4">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5 p-2 border border-gray-300 rounded"
            required
          />
          <label htmlFor="issueDate" className="mb-1">
            Issue Date:
          </label>
          <input
            type="date"
            id="issueDate"
            value={issueDate}
            readOnly
            onChange={(e) => setIssueDate(e.target.value)}
            className="mb-5 p-2 border border-gray-300 rounded"
            required
          />
          <label htmlFor="dueDate" className="mb-1">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            readOnly
            className="mb-5 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-500 hover:text-white transition duration-200"
          >
            Issue Book
            <Toaster />
          </button>
        </form>
      )}
    </div>
  );
}

export default IssueBook;
