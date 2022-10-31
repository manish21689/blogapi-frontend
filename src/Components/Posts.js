import Post from "./Post"
import "./Posts.css"
const Posts = ({post}) => {
    return (
        <div className="posts">
          {
          post.map((rowitem)=>(<Post row={rowitem}/>))  
          }
        </div>
    )
}
export default Posts