import React,{ useContext} from 'react'
import { AuthContext } from './AuthContext'

export default function Header(){

    const authContext = useContext(AuthContext)

    const logout =() => {
        authContext.setAuth({})
        localStorage.removeItem('name')
        localStorage.removeItem('pwd')

    }
    return (
        
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">React hooks</a>
            <div>
                {authContext.auth.name? <div>{authContext.auth.name} 
                            <button className="btn btn-danger" onClick={logout}> You need to logout</button>
                        </div>
                      :    'you need to login'}
            </div>
          </nav>

    )

}