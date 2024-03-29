"use client";

import axios from "axios";
import React from "react";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";

function Review() {
  const addCommentHandler = () => {
    console.log("api fired.....");
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => console.log(res))
      .then((json) => console.log(json));
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <p className="border text-info border-info p-2 rounded fw-bolder">
          Comments
        </p>
      </div>
      <section className="container ">
        <div
          className="d-flex justify-content-center flex-column flex-md-row"
          style={{ display: "flex", flexBasis: "600px" }}
        >
          <input
            style={{ display: "flex" }}
            placeholder="write your comment here..."
          ></input>
          <button
            className="btn btn-outline-warning mx-2 mt-2 mt-md-0"
            onClick={addCommentHandler}
          >
            Add Comment
          </button>
        </div>
      </section>
      <section className="container pt-2">
        <div className="d-flex justify-content-center  py-2">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "700px",
              border: "1px solid white",
            }}
          >
            <div className="row row-cols-1 row-cols-sm-2">
              <p className="col">name :</p>
              <p className="col">date</p>
            </div>
            <div className="p-3 word-wrap text-break">
              {" "}
              sahdhgxdhgahghagjaghsjhgaghgggshghsghajgakajkjakhshkwklqiiwioihhsmnklsiksahdhgxdhgahghagjaghsjhgaghgggshghsghajgakaj
              kjakhsh kwklqiiwioihhsmnklsik
            </div>
            <div className="d-flex justify-content-center">
              <div className="m-2">
                like <BiLike />
              </div>
              {/* <div className="m-2">comment <FaComment/></div> */}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center  py-2">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "700px",
              border: "1px solid white",
            }}
          >
            <div className="row row-cols-1 row-cols-sm-2">
              <p className="col">name :</p>
              <p className="col">date</p>
            </div>
            <div className="p-3 word-wrap text-break">
              {" "}
              sahdhgxdhgahghag jaghsjhgaghg ggshghsg hajga kaj kjakhsh
              kwklqiiwioihhsmnklsik sahdhgxdhgahghag jaghsjhgaghg ggshghsg hajga
              kaj kjakhsh kwklqiiwioihhsmnklsik
            </div>
            <div className="d-flex justify-content-center">
              <div className="m-2">
                like <BiLike />
              </div>
              {/* <div className="m-2">comment <FaComment/></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
