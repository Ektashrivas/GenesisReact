import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import'bootstrap/dist/css/bootstrap.css';
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
 
  return (
    isAuthenticated && (
      <div style={{textAlign:'right',paddingRight:"50px"}}>
      <button className="btn-primary" onClick={() => logout()} style={{width:"100px"}}>
      <b>Logout</b>
     
      </button><br/> <b>Lokesh singh M</b>
      </div>
    )
  )
}
 
export default LogoutButton