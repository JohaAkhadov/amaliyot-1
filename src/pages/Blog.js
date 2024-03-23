import React, { useEffect, useState } from 'react'

function Blog() {

  const [blogData, setBlogData] = useState([]);
  const [blogFilter, setBlogFilter] = useState(blogData)
  let componentMounted = true;
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("http://localhost:5000/blog");
      if (componentMounted) {
        setBlogData(await response.clone().json());
        setBlogFilter(await response.json());
      }
      return () => {
        componentMounted = false
      }
    }
    getBlogs()
  }, [])

  const filterBlog = (cat) => {
    const updatedList = blogData.filter((x) => x.cat === cat);
    setBlogFilter(updatedList)
  }

  const ShowBlogs = () => {
    return (
      <>
        <div className="blogBtns">
          <div className="blogBtn" onClick={() => setBlogFilter(blogData)}>#Все записи</div>
          <div className="blogBtn" onClick={() => filterBlog("Продукция")}>#Продукция</div>
          <div className="blogBtn" onClick={() => filterBlog("Фестивали")}>#Фестивали</div>
          <div className="blogBtn" onClick={() => filterBlog("Приключения")}>#Приключения</div>
        </div>
        <div className="blogDivs">
        {blogFilter.map((blog)=>{
          return(
            <>
                <div className="blogDiv">
                  <img src={blog.img} alt="" />
                  <h1>{blog.header}</h1>
                  <p>{blog.text}</p>
                  <div className="blogCategory">
                    <div className="categoryDiv">
                      <span># {blog.cat}</span>
                    </div>
                  </div>
                </div>
            </>
          )
        })}
        </div>
      </>
    )
  }
  return (
    <div className='blog'>
      <div className="blogText">
        <h1>Блог</h1>
        <p>Пишем о товарах для праздника, интересных мероприятиях и фестивалях.</p>
      </div>
      <div className="blogMain">{<ShowBlogs/>}</div>
      <div className="numberDiv">
        <div className="blogNumber">1</div>
        <div className="blogNumber">2</div>
        <div className="blogNumber">3</div>
        <div className="blogNumber">4</div>
        <div className="blogNumber">5</div>
        <div className="blogNumber">...</div>
        <div className="blogNumber">12</div>
        <div className="blogNumber">Дальше <img src="./img/arrow.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Blog