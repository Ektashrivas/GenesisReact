import logo from './logo.svg';
import './App.css';
import Home from "../src/Genesis/Home";
import Privatelabel from "../src/Genesis/private";
import GeneralPurpose from "../src/Genesis/General1";
import { BrowserRouter as Router,Link,NavLink, Switch,Route} from "react-router-dom";
import genesislogo from "../src/Genesis/genesis.png";
 import { useAuth0 } from "@auth0/auth0-react";
 import LoginButton from "./components/LoginButton";
 import LogoutButton from "./components/LogoutButton";
 import LoginPage from "./LoginPage";
function App() {
  const {isLoading}=useAuth0();
  if(isLoading) return <div class="loader">Loading...</div>
  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
      <LoginPage/>
    </div>

  );
}
 
export default App;