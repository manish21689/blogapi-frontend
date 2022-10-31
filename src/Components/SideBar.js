import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Sidebar.css"
const SideBar = () => {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get("http://localhost:8000/api/category/")
      setCats(res.data)
      console.log(res.data)

    }
    getCategory()

  }, [])
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <h3>ABOUT ME</h3>
        <img src="profile.jpg" alt="" />
        <p className="sidedesc">
          Hi I am react Developer Woriking in Sahara India
          and looking for Backend Developr Post
        </p>
      </div>
      <div className="sidebaritem">
        <h3>CATEGORIES</h3>
        <div className="catwrapper">
          {
            cats.map((c) => (
              <div className="cattitle">
              <Link to={`/?cat=${c.name}`} className="link">{c.name}</Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className="sidebaritem">
        <h3>SOCIL MEDIA</h3>
        <div className="topbar-left">
                <i className="topbar-icon fa-brands fa-square-twitter"></i>
                <i className="topbar-icon fa-brands fa-square-instagram"></i>
                <i className="topbar-icon fa-brands fa-square-facebook"></i>
                <i className="topbar-icon fa-brands fa-linkedin"></i>
            </div>
      </div>

    </div>
  )
}
export default SideBar