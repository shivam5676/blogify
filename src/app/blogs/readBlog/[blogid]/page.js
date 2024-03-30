import NavBar from "./../../../../../component/Header";
import Review from "../../../../../component/BlogReader";
import BlogReader from "./../../../../../component/BlogReader";
import Comment from "./../../../../../component/Comment";
const ReaderView = ({ params }) => {
  console.log(params.blogid);
  return (
    <div className="bg bg-dark text-white">
      <NavBar></NavBar>
      <BlogReader></BlogReader>
    </div>
  );
};
export default ReaderView;
