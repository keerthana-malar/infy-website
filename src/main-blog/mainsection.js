import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FindWindowSize from "../Hooks/FindWindowSize";

function Mainsection() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[currentPage])


  useEffect(() => {
    axios.get("https://infygain.com/api/blogdata").then((res) => {

  // sorted by date
      const sortedBlogs = res.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      setBlogs(sortedBlogs);
    });
  }, []);

  const totalItems = blogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const maxVisiblePages = 3; // Maximum visible page numbers
    const pages = [];

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i}>
          <button
            className={currentPage === i ? "active" : ""}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const windowSize = FindWindowSize()

  return (
    <>
      <div className="container main-blogs">
        {/* Blog content... */}
        <div className="row mt-5">
        {currentItems.map((value) => (
         

          <div key={value.id} className="col-md-4  blog-one-boxes">
                  
          <div className="blogBoxInn ">
            <div className="blogImgBox">
            {/* <div className="blogDate">
                13 <br/>
                May
              </div> */}
               <Link to={"/blogs/" + value.id}>
                  <img className="" 
                  src={`uploads/${value.img}`}

                  alt={value.title} />  
                </Link>
                
            </div>
        
            <div className="blogContBox blogp">
              {/* <p className="text-muted">{dateSlice(index)}</p> */}
              <div className="b-title">
                <p className="mid-title">{value.title}</p>
              </div>
              
              <div className="b-intro">
                <p className="mid-title">{windowSize[0] > 1700 ?  value.intro.substring(0, 100) + '...': value.intro.length > 300 ? value.intro.substring(0, 100) + '...': value.intro.substring(0, 150) + '...'   }</p>
              </div>
           
              
                   <p className="readmoretext">
                     <Link to={"/blogs/" + value.id}>
                       <button className="btns">READ MORE</button>
                     </Link>
                   </p>
           
              {/* Alternatively, you can use React Router's Link component:
              <Link to={`/blogs/${value.id}`}>READ MORE</Link> */}
            </div>
          </div>
          </div>
        ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <ul className="pagination">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {renderPageNumbers()}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Mainsection;
