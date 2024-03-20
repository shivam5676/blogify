function NavBar() {
  return (
    <div className="container-fluid text-warning  pt-3 fixed-top bg-dark">
      <div className="container d-flex justify-content-between">
        <div>
          <h2>Blogify</h2>
        </div>
        <div className="d-flex">
          <p className="px-3">home</p>
          <p className="px-3">Categories</p>
          <p className="px-3">blog</p>
          <p className="px-3">About</p>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
