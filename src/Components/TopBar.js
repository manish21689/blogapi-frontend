import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { Context } from "../context/Context"
import "./TopBar.css"
const TopBar = () => {
    const { setUser, user,isAuthenticated } = useContext(Context)
    console.log(user)
    const handlelogout = () => {
        setUser(" ")
        localStorage.removeItem("token")
        window.location.replace("/login")
    }
    const PF = "http://localhost:8000/images/profilePhotos/1666858791044_p3.jpg"

    return (
        <div className="topbar">
            <div className="topbar-left">
                <i className="topbar-icon fa-brands fa-square-twitter"></i>
                <i className="topbar-icon fa-brands fa-square-instagram"></i>
                <i className="topbar-icon fa-brands fa-square-facebook"></i>
                <i className="topbar-icon fa-brands fa-linkedin"></i>
            </div>
            <div className="topbar-middle">
                <ul className="topbar-list">
                    <li className="topbar-listitem">
                        <Link className="link" to="/" >Home</Link>
                    </li>
                    <li className="topbar-listitem">
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li className="topbar-listitem">
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                    <li className="topbar-listitem">
                        <Link className="link" to="/write">Write</Link>
                    </li>

                    <li className="topbar-listitem" onClick={handlelogout}>
                        {isAuthenticated && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topbar-right">
                {
                    isAuthenticated ? (<Link to="/settings">
                        <img className="topimg" src={user ? PF : "/public/profile.jpg"} alt="" />
                    </Link>) : (
                        <ul className="topbar-list">
                            <li className="topbar-listitem">
                                <Link className="link" to="/login" >Login</Link>
                            </li>
                            <li className="topbar-listitem">
                                <Link className="link" to="/register">Register</Link>
                            </li>

                        </ul>
                    )
                }
                <i class="topbar-icon fa-solid fa-magnifying-glass-plus"></i>
            </div>
        </div>
    )
}
export default TopBar