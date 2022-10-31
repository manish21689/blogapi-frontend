import "./Post.css"
import { Link } from "react-router-dom"
const Post = ({ row }) => {
  const PF = "http://localhost:8000/images/profilePhotos/"
  return (
    <div className="post">
      <img className="postimage" src={row.photo ? PF + row.photo : "2.jpg"} alt="" />
      <div className="postinfo">
        <div className="category">
          {
            row.categories.map((c) => (<span className="catname">{c}</span>))
          }
        </div>
        <Link className="link" to={`/post/${row._id}`}>{row.title}</Link><br></br>
        <span className="postdate">{row.createdAt ? new Date(row.createdAt).toDateString : "1 Hour Ago"}</span>
      </div>
      <p className="postdesc">{row.desc}</p>
    </div>
  )
}
export default Post