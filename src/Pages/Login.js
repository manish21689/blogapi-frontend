import { useState,useContext } from "react"
import {Context} from "../context/Context"
import axios from "axios"
import "./Login.css"

const Login = () => {
    const {setUser,user} = useContext(Context)    
   const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleform = async (event) => {
        event.preventDefault()
        const data = { username, password }
        try {
            const res = await axios.post("http://localhost:8000/api/auth/login", data)
            //console.log(res.data.others.username, res.data.others._id)
            console.log(res.data)
            //setUsername(res.data.others.username)
            setUser(res.data.others)
            localStorage.setItem("token",JSON.stringify(res.data.token))
           
           // res.data && window.location.replace("/")
            setError(false)
        } catch (error) {
            setError(true)
            setUsername("")
            setPassword("")
            setEmail("")
            
        }
    }
    return (
        <div className="login">
            <form onSubmit={handleform} className="logform">
                <input type="text" name="username"
                    value={username} className="box"
                    placeholder="Enter Your name.."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password" name="password"
                    value={password} className="box"
                    placeholder="Enter Your password.."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="email" name="email"
                    value={email} className="box"
                    placeholder="Enter Your email.."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Login</button>
                {error && <span style={{ color: "white", marginTop: "2px" }}>SomeThing Went Wrong</span>}
            </form>
        </div>
    )
}
export default Login