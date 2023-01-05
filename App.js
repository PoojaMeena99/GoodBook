import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Python: [
    { name: "Python Crash Course", rating: "4.36/5" },
    { name: "Fluent Python", rating: "4.62/5" }
  ],

  HTMLCSS: [
    {
      name: "HTML and CSS Quickstart Guide",
      rating: "4.2/5"
    },
    {
      name: " HTML and CSS: Design and Build Websites",
      rating: "4.3/5"
    }
  ],
  React: [
    {
      name: "Fullstack React",
      rating: "4.63 / 5"
    },
    {
      name: "Fullstack React Native",
      rating: " 4.3 / 5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("React");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 GoodBooks </h1>
      <p style={{ fontSize: "big" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
