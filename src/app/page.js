import NavBar from "./../../component/Header";
import Hero from './../../component/hero';
import Blogs from './../../component/blogs';
export default function Home() {
  return (
    <div
      style={{ height: "auto", width: "100dvw", backgroundColor: "black" }}
      
    >
      <NavBar></NavBar>
      <Hero></Hero>
      <Blogs></Blogs>
    </div>
  );
}
