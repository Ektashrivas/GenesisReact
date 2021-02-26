import logo from './logo.svg';
import './App.css';
import Home from "../src/Genesis/Home";
import Privatelabel from "../src/Genesis/private";
import GeneralPurpose from "../src/Genesis/General1";
import { BrowserRouter as Router,Link,NavLink, Switch,Route} from "react-router-dom";
import genesislogo from "../src/Genesis/genesis.png";
import { useAuth0 } from "@auth0/auth0-react";
 
const LoginPage=()=>{
    const {isAuthenticated}=useAuth0();
  
  return (
      isAuthenticated &&(
     <div><br/>
 
<ul className="nav nav-tabs">
<img src={genesislogo} alt="Logo"className="logo" style={{width:"200px",height:"80px",marginTop:"2px"}}/>
        <li class="nav-item">

        <NavLink to="/Home" activeClassName="testclass" style={{color:"gray"}} class="nav-link"><b>Home   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></NavLink>
       </li>
       <li class="nav-item">
        <NavLink to="/General1" activeClassName="testclass" style={{color:"gray"}}class="nav-link"><b>General purpose</b></NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/private" activeClassName="testclass" style={{color:"gray"}}class="nav-link"><b>&nbsp;&nbsp;&nbsp;&nbsp;Private Label</b></NavLink>

       </li>
        </ul>
 
<Switch>
 <Route exact path="/Home" component={Home}></Route> 
<Route path="/private" component={Privatelabel}></Route>
<Route path="/General1" component={GeneralPurpose}></Route>
</Switch>
 
</div>
      )
  );
}
 
export default LoginPage;