import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/component/Navbar";
import Homepage from "./Pages/Homepage";
import CreateBlog from "./Pages/CreateBlog";
import BlogPost from "./Pages/BlogPost ";
import UpdateBlogPost from "./Pages/UpdateBlogPost ";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path= "/blogs/:id"  element={<BlogPost/>} />
        <Route path="/blogs/update/:id/" element={<UpdateBlogPost/>} />
      </Routes>
    </>
  );
}

export default App;
