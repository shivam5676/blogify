"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useNavigate, useState } from "react";

function Blogs() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const api = "http://localhost:2000";
  useEffect(() => {
    async function fetchDAta() {
      const response = await axios.get(`${api}/AllBlog`);
      console.log(response);
      setData(response.data);
    }
    fetchDAta();
  }, []);
  const dataUrlStarter = `data:image/*;base64,`;
  return (
    <div className="container text-warning">
      <div className="mx-5 mt-2 row-cols-1 row row-cols-sm-2 row-cols-md-3">
        {data &&
          data.map((current) => (
            <div
              className=" col mb-3 "
              style={{ height: "auto" }}
              onClick={() => router.push(`/blogs/readBlog/${current._id}`)}
              key={current._id}
            >
              <img
                className=" py-1 border text-white"
                alt="tre"
                style={{ height: "200px", width: "100%" }}
                src={`${dataUrlStarter} ${current.image}`}
              ></img>
              <h4>{current.title}</h4>
              <div className="d-flex text-white justify-content-between mx-3 ">
                <p> {current.createdAt}</p>
                <p className="text-danger mx-3">{current.category}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blogs;
