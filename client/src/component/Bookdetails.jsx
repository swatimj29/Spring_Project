import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';

const Bookdetails = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
  });
  const [bookList, setBookList] = useState([]);
  const [editingId, setEditingId] = useState(null); // null means adding new book

  const BASE_URL = "https://your-backend-service.onrender.com";

  // Use environment variable for backend URL
  //const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";


  // Fetch books on load
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {

      const res = await axios.get(`${BASE_URL}/books`);
      setBookList(res.data);
    } catch (err) {
      console.error("Failed to fetch books:", err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.author || !formData.price) {
      alert("All fields are required!");
      return;
    }

    try {
      if (editingId) {
        // Update existing book
        await axios.put(`${BASE_URL}/books/${editingId}`, formData);
        alert("Book updated successfully!");
      } else {
        // Add new book
        await axios.post(`${BASE_URL}/books`, formData);
        alert("Book added successfully!");
      }
      setFormData({ title: '', author: '', price: '' });
      setEditingId(null);
      fetchBooks();
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Operation failed.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await axios.delete(`${BASE_URL}/books/${id}`);
      alert("Book deleted successfully!");
      fetchBooks();
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to delete book.");
    }
  };

  const handleEdit = (book) => {
    setFormData({
      title: book.title,
      author: book.author,
      price: book.price
    });
    setEditingId(book.id); // mark which book is being edited
  };

  return (
    <div>
      <div className="page-title">{editingId ? "Update Book" : "Book Entry Form"}</div>

      <div className="form-wrapper">
        <div className="form-section">
          <div className="input-group">
            <div className="input-field">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Enter book title"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                placeholder="Enter author name"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                placeholder="Enter price"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            {editingId ? "Update Book" : "Submit"}
          </button>
        </div>
      </div>

      {/* Table of books */}
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookList.length === 0 ? (
            <tr><td colSpan={5}>No books found</td></tr>
          ) : (
            bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>
                  <button className="update-btn" onClick={() => handleEdit(book)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bookdetails;
