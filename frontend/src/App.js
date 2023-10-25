import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./paths/Home.js";
import CreateBook from "./paths/CreateBook.js";
import DeleteBook from "./paths/DeleteBook.js";
import EditBook from "./paths/EditBook.js";
import ShowBook from "./paths/ShowBook.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
  );
}

export default App;
