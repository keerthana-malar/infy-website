import "../css/home.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://infygain.in/api/blogdata").then((res) => {
      setBlogs(res.data);
      
    });
  }, []);
  function dateSlice(id){
    const rawDate = blogs[id].date;
    const blogDate = rawDate.slice(0, 10);
    return blogDate;
}
console.log(blogs[0])
  return (
    <>
      <section className="homeBlogSec">
        <div className="container">
            <div className="homeBlogTopCont text-center">
                <p className="mini-title main-color">From Our Blogs</p>
                <p className="test-head">Here’s What’s Happening</p>
            </div>
            <div className="homeBlogBox">
                <div className="row p-1">
            {blogs.map((value, index)=>(
                    <div key={value.id} className="col-md-4">
                        <div className="blogBoxInn">
                            <div className="blogImgBox">
                                <img className="img-fluid" src={"uploads/" + value.img}></img>
                            </div>
                            <div className="blogContBox">
                                <p className="text-muted">{dateSlice(index)}</p>
                                <p className="mid-title">{value.title}</p>
                                <a className="links"><Link to={"/blogs/"+value.id}>READ MORE</Link></a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </section>
    </>
  );

};


export default HomeBlog;
