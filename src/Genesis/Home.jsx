import React,{Component} from 'react';
import Homeimage from './image.jpg'
export default class Home extends Component {
	
	
	
	render(){
		return(
			
                <div style={{fontSize:"large"}}>
					<br/>
					<h2><b>Genesis Financial Solutions Partners With Tavant for Enterprise-Wide Digital Transformation</b></h2>
               <br/>
				Tavant, a Silicon Valley-based digital lending solutions leader, today announced it has partnered with Genesis Financial Solutions® (Genesis), the nation’s largest provider of private-label credit programs for non-prime consumers. This enterprise-wide digital transformation will introduce new mobile and portal customer experiences.
				<br/>
			  <img src={Homeimage} alt="Logo"className="logo" style={{width:"500px",height:"300px",marginLeft:"450px"}}/>
		
			  </div>
		);
	}
}

