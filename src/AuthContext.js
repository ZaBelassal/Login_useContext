import React , {useState, useEffect} from 'react'

export const AuthContext = React.createContext() 

export function AuthProvider(Props){

    const [auth,setAuth] = useState({})

    useEffect (()=> {
        const name = localStorage.getItem('name')
        const pwd  = localStorage.getItem('pwd')
        if(name){
            setAuth({
                name,pwd
            })
        }
    },[])
return (
    <AuthContext.Provider value={{auth,setAuth}}>
        {Props.children}
    </AuthContext.Provider>
)



}