import React, { useState } from "react";
import axios from "axios";
import GalleryImg from "./GalleryImg";
import "./Gallery.css";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const Gallery = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=8&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo));
  };
  return (
    <div className="gallery">
      <center>
        <div>
          <h1>Gallery App</h1>
          <form onSubmit={submitHandler} autoComplete="off">
            <input
              type="text"
              value={search}
              name="gallery"
              onChange={changeHandler}
              placeholder="search images"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
          <br />
          <GalleryImg data={data} />
        </div>
      </center>
    </div>
  );
};

export default Gallery;
