import Header from "../Components/Header"
import Posts from "../Components/Posts"
import SideBar from "../Components/SideBar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import "./Home.css"
const Home = () => {
    const [posts, setPosts] = useState([])
    const { search } = useLocation()
    useEffect(() => {
        const fetchApi = async () => {
            let res = await axios.get("http://localhost:8000/api/post" + search)
            setPosts(res.data)
            console.log(res.data)
        }
        fetchApi()
    },[search])
    return (
        <>
            <Header />
            <div className="home">
                <Posts post={posts} />
                <SideBar />
            </div>
        </>
    )
}
export default Home