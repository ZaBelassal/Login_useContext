import React , { useState , useContext } from'react'
import Header from './Header'
import Login from './Login'
import { AuthProvider, AuthContext } from './AuthContext'

function App() {
  const authContext = useContext(AuthContext)
  return (
      <div className="container">
        <Header />
        {authContext.auth.name ? 'welcome' :<Login />}
      </div>
  );
}
function AppWithStore(){
  return(
  <AuthProvider>
    <App />
  </AuthProvider>
  );
}

export default AppWithStore;
