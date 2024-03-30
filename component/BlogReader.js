"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import Comment from "./Comment";

const BlogReader = () => {
  const api = "http://localhost:2000";
  useEffect(() => {
    async function fetchDAta() {
      const response = await axios.get(`${api}/getBlog`);
      console.log(response);
    }
    fetchDAta();
  }, []);
  const addCommentHandler = () => {
    console.log("api fired.....");
    axios
      .get(`${api}/addComment`)
      .then((res) => console.log(res))
      .then((json) => console.log(json));
  };
  return (
    <div className="container mt-5">
      <div className="border" style={{ minHeight: "100vh" }}>
        <div className="row  mt-5 mx-2">
          <div className="col-sm-5 col-12">
            <div className="border pe-3" style={{ height: "300px" }}>
              hello
            </div>
          </div>
          <div className="col word-break">
            <div className="mt-2 mt-sm-5 text-break  text-break p-3">
              <h3 className="text-danger">
                lorem ipsume piccsdefixtrip
                <span className="text-white">
                  hjhsjhsshj asshsh shssjhq ixfirty derscc dersdf ersaer
                </span>
                waggjghs ghjhqjwshj qyhjshys aggjghsg hjhqjwshjqyhjsh
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col word-break text-break">
            <div className=" m-3 word-break px-5 py-2">
              loremipsumepiccsdefixtripixfirtydersccdersdfersaerwaggjghsghjhqjwshjqyhjshyshjhsjhsshjasshshshssjhqjkhwjqjehwqkqjkhloremipsumepiccsdefixtripixcderfddafadfadvadfadvvvafaafafdfersaerw
              aggjghsg hjhqjwshjqyhjsh yshjhsjhsshjasshshshs sjh qjkhwj qjehwq
              kqjkh{" "}
            </div>
          </div>
        </div>
        <div className="px-5">
          <Comment></Comment>
        </div>
      </div>
    </div>
  );
};

export default BlogReader;
