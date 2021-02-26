

import React from 'react';
import {useAuth0} from'@auth0/auth0-react';
import genesislogo from "./genesis.png";
 
import 'bootstrap/dist/css/bootstrap.css'
const LoginButton = () => {
const {loginWithRedirect,isAuthenticated}= useAuth0();
 
return (
    !isAuthenticated && (<div>
      <img src={genesislogo} alt="Logo"className="logo"style={{width:"200px",height:"80px",marginTop:"2px"}}/>
      <div style={{textAlign:'center',paddingRight:"50px"}}><button onClick={() => loginWithRedirect()}  className="btn-primary">
       <b> Log In</b>
      </button>
      </div>
      </div>
    )
  )
}
 
export default LoginButton