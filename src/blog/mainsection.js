import "font-awesome/css/font-awesome.css";
import "../css/blog.css";
import "../css/common.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";

function Mainsection() {

  const { id } = useParams();
  const [blogs, setBlogs] = useState({
    id: "",
    date: "",
    title: "",
    
    category: "",
    quote: "",
    metades: "",
    metakey: "",
    content: "",
    img: "",
    status: "Active",
  });
  useEffect(() => {
    axios
      .get("https://infygain.com/api/editblog/" + id)
      .then((res) => {
        const blogData = res.data.result[0];
        setBlogs({
          ...blogs,
          id: blogData.id,
          date: blogData.date,
          title: blogData.title,
          category: blogData.category,
          quote: blogData.quote,
          content: blogData.content,
          metades: blogData.metades,
          metakey: blogData.metakey,
          img: blogData.img,
          status: blogData.status,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id,blogs]);
  const rawDate = blogs.date;
    const blogDate = rawDate.slice(0, 10);
        

  return (
    <>
      <div className="container main mt-5 ">
        <div className="blogsection ">
          <div className="row">
            <div className="col-md-12 ">
              {/* <button className='btns'>Infygain</button>    <button className='btns blogbutton'>Infygain</button><br></br><br></br> */}
              
              <div className="image1">
                <img className="" 
                src={"../uploads/"+ blogs.img}
                alt="blogs"
                title={blogs.title}
                >
                </img>
              </div>
              <p className="sub-title">
                {blogs.title}
              </p>
              <time className="text-muted entry-date published">
                <i className="fa-solid fa-calendar-days"></i>{blogDate}
              </time>
              <br></br>
              <div dangerouslySetInnerHTML={{__html:blogs.content}} className="text-muted blog-content">
                
              </div>
              <div className="reviewsection">
                <i class="fa fa-solid fa-quote-left"></i>
                <p className="review">
                  <b>
                    {blogs.quote}
                  </b>
                  <br></br>
                </p>
              </div>
              <br></br>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// function stripHTMLTags(html) {
//   const temp = document.createElement('div');
//   temp.innerHTML = html;
//   return temp.textContent || temp.innerText;
// }
export default Mainsection;
