import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import Signup from './components/signUp';
import BookDetails from './components/BookDetail';
import Books from './components/Books';
import { Toaster } from 'react-hot-toast';
import IssueBook from './components/IssueBook';

function App() {
  return (
    <>
    <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:title" element={<BookDetails />} />
        <Route path="/issue/:title" element={<IssueBook />} />

      </Routes>
      
    </>
  );
}

export default App;
