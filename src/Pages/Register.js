import { useState } from "react"
import axios from "axios"
import "./Register.css"
const Register = () => {
    const PF = "http://localhost:8000/images/profilePhotos/"
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const [error, setError] = useState(false)
    const handleform = async (event) => {
        event.preventDefault()
        const data = new FormData()
        data.append("username", username)
        data.append("email", email)
        data.append("password", password)
        if (file) {
            const fileName = new Date().getTime() + '_' + file.name
            data.append("name", fileName)
            data.append("file", file)
            data.append("profilepic", PF + fileName)
        }
        try {
            const res = await axios.post("http://localhost:8000/api/auth/register", data)
            res.data && window.location.replace("/login")
            setError(false)
        } catch (error) {
            setError(true)
            setUsername("")
            setEmail("")
            setPassword("")
            setFile(null)
        }
    }
    return (
        <div className="register">
            <form onSubmit={handleform} className="regform">
                <input type="text" name="username"
                    value={username} className="box"
                    placeholder="Enter Your name.."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="email" name="email"
                    value={email} className="box"
                    placeholder="Enter Your email.."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" name="password"
                    value={password} className="box"
                    placeholder="Enter Your password.."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="filewrapper">
                    <label htmlFor="fileinput">
                        <i className="uploadimg fa-solid fa-cloud-arrow-up"></i>
                    </label>
                    <input type="file" id="fileinput" name="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: 'none' }} />
                    {file && <img className="regimg" src={URL.createObjectURL(file)} alt="" />}
                </div>
                <button>Register</button>
                {error && <span style={{ color: "white", marginTop: "2px" }}>SomeThing Went Wrong</span>}
            </form>
        </div>
    )
}
export default Register