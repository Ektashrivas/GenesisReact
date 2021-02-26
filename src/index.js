import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Link,NavLink, Switch,Route} from "react-router-dom"; 
import { Auth0Provider } from '@auth0/auth0-react';
 
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
 
ReactDOM.render(
  <Auth0Provider
    domain="lokeshsinghm5.us.auth0.com"
    clientId="suOXlXhid0OctIGrNEyqKtgsUXq387SE"
    redirectUri={window.location.origin}>
 <BrowserRouter><App/></BrowserRouter>  
 </Auth0Provider>,
  document.getElementById('root')
);
 
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Private from "../src/Genesis/private";
//  import GeneralPurpose from "../src/Genesis/General1";
// import { BrowserRouter,Link,NavLink, Switch,Route} from "react-router-dom";
 
// ReactDOM.render(
// <App/>,
//   //<Private/>,
// //  <GeneralPurpose/>,
//   document.getElementById('root')
// );
 
// reportWebVitals();