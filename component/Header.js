"use client";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  return (
    <div className="container-fluid text-warning  pt-3 fixed-top bg-dark border-bottom">
      <div className="container d-flex justify-content-between">
        <div>
          <h2>Blogify</h2>
        </div>
        <div className="d-flex">
          <p
            className="px-3"
            onClick={() => {
              router.push("/");
            }}
          >
            home
          </p>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </button>
            <ul className="dropdown-menu bg-dark ">
              <li>
                <a className="dropdown-item text-white" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <p
            className="px-3"
            onClick={() => {
              router.push("/blogs/createBlog");
            }}
          >
            Write a blog
          </p>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
