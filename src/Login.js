import React,{useState, useContext} from 'react'
import { AuthContext } from './AuthContext'

export default function Login() {
    const [name,setname] = useState('')
    const [pwd,setpwd] =useState('')
    const authContext = useContext(AuthContext)

    const handleName= (e) => {
        setname(e.target.value)

    }
    const handlePassword = (e) => {

        setpwd(e.target.value)

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({name,pwd})
        localStorage.setItem('name',name);
        localStorage.setItem('password',pwd);
        authContext.setAuth({name,pwd})
    }

    return (
        <form>
            <h2>Login</h2>

            <input type="text" className="form-control" 
                   placeholder="Enter your userName" value={name} onChange={handleName}/> <br/>

            <input type="password" className="form-control" 
                   placeholder="Enter your password" vale={pwd} onChange={handlePassword}/><br/>

            <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
        </form>
    )
}
