"use client";

import React, { useRef } from "react";
import NavBar from "./Header";
import axios from "axios";

function WriteBlog() {
  const api = "http://localhost:2000";
  const titleRef = useRef();
  const descriptionRef = useRef();
  const ImageRef = useRef();
  const selectRef = useRef();
  const addBlogHandler = async () => {
    // console.log(
    //   titleRef.current.value,
    //   descriptionRef.current.value,
    //   ImageRef.current.value,
    //   selectRef.current.value
    // );
    const imageFile = ImageRef.current.files[0];

    const reader = new FileReader();
    let base64Url;
    reader.onload = async () => {
      base64Url = reader.result;
      // console.log(base64Url);
      
  const formData = new FormData();
  formData.append('title', titleRef.current.value);
  formData.append('content', descriptionRef.current.value);
  formData.append('category', selectRef.current.value);
  formData.append('image', base64Url);
      // const myObj = {
      //   title: titleRef.current.value,
      //   content: descriptionRef.current.value,
      //   image: base64Url,
      //   category: selectRef.current.value,
      // };
      console.log(formData);

      try {
        const response = await axios.post(`${api}/addBlog`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data); // Assuming response contains data
      } catch (err) {
        console.log("Error adding blog:", err);
      }
    };

    reader.readAsDataURL(imageFile);
    console.log(base64Url);
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
            <input
              className="rounded-pill ms-2"
              ref={ImageRef}
              type="file"
            ></input>
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
