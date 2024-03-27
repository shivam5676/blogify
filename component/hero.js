import React from "react";

function Hero() {
  return (
    <div className="container text-white mt-5 ">
      <div className="pt-5"></div>
      <div
        className="mx-4 text-white d-flex p-3"
        style={{ borderStyle: "dashed" }}
      >
        <div style={{ height: "35vh" }} className=" mx-2 col rounded">
          <img
            alt="our services"
            src={
              "https://media.licdn.com/dms/image/D4D35AQEv75uUAyZ55w/profile-framedphoto-shrink_800_800/0/1690849670652?e=1711540800&v=beta&t=Enp1bOFJIW-7wLUOr76LF7ZNCth-8hsSbBRO2HUgEoU"
            }
            style={{ height: "100%", width: "100%" }}
          ></img>
        </div>
        <div
          style={{ height: "auto", overflow: "hidden", textWrap: "nowrap" }}
          className=" col"
        >
          <div className="row row-cols-1 row-cols-md-2">
            <p>20 March 2024</p>
            <div className="badge bg-danger d-flex justify-content-center align-items-center fw-bold">
              Featured
            </div>
          </div>

          <h2 className="text-wrap ">
            <span className="text-warning">Mishra</span> : The{" "}
            <span className="text-danger word-wrap">Mern Stack</span> Developer{" "}
          </h2>
          <hr className="text-warning"></hr>
          <p
            className="overflow-hidden text-wrap text-truncate"
            style={{ maxHeight: "100px" }}
          >
            lorem ipsum qwerty ipsum content ipsum everything is lorem epsum
            lorem ipsum qwerty ipsum content ipsum everything is lorem epsum
            lorem ipsum qwerty ipsum content ipsum everything is lorem epsum
            lorem ipsum qwerty ipsum content ipsum everything is lorem epsum
            lorem ipsum qwerty ipsum content ipsum everything is lorem epsum
            lorem ipsum qwerty ipsum content ipsum everything is lorem epsum
            lorem ipsum qwerty ipsum content ipsum everything is lorem epsum
          </p>
          <div className="d-flex justify-content-end ">
            <button className="btn btn-outline-warning "> read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
