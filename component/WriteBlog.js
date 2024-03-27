"use client";

import React, { useRef } from "react";
import NavBar from "./Header";

function WriteBlog() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const ImageRef = useRef();
  const selectRef = useRef();
  const addBlogHandler = () => {
    console.log(
      titleRef.current.value,
      descriptionRef.current.value,
      ImageRef.current.value,
      selectRef.current.value
    );
  };
  return (
    <>
  
      <NavBar></NavBar>
      <div
        className="container-fluid bg-success"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100dvh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexBasis: "600px",
            backgroundColor: "black",
            height: "80vh",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <h2 className="pt-5 pb-3">Blog Add Form</h2>
          <div className="row my-1" style={{ width: "60%" }}>
            <label>Title :</label>
            <input className="rounded-pill ms-2" ref={titleRef}></input>
          </div>
          <div className="row my-1" style={{ width: "60%" }}>
            <label>Description :</label>
            <textarea
              className="rounded ms-2"
              style={{ maxHeight: "20vh", minHeight: "10vh" }}
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className="row my-1" style={{ width: "60%" }}>
            <label>Image url :</label>
            <input className="rounded-pill ms-2" ref={ImageRef}></input>
          </div>
          <div className="row my-1 rounded-pill" style={{ width: "60%" }}>
            <label>Choose a Category :</label>
            <select className="rounded-pill ms-2" ref={selectRef}>
              <option value="1">1</option>
              <option value="21">2</option>
              <option value="31">3</option>
              <option value="31">4</option>
              <option value="41">5</option>
            </select>
          </div>
          <button
            className="btn btn-outline-info fw-bold mt-3"
            onClick={addBlogHandler}
          >
            Add Blog
          </button>
        </div>
      </div>
    </>
  );
}

export default WriteBlog;
