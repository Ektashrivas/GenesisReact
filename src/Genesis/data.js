// import React,{Component} from 'react';

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import {AgGridReact} from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import React, { useState } from 'react';
//import { render } from 'react-dom';
import {  AgGridReact } from 'ag-grid-react';

//import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export const data=()=>{
    const data=[
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ],

const columns=[
    {headerName:"make",field:'make'},
    {headerName:"model",field:'model'},
    {headerName:"price",field:'price'},
    
]
}
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
               rowData={data} columnDefs={columns}>
            </AgGridReact>
        </div>
    );

// render(<App />, document.getElementById('root'));

// export class data extends Component
// {
//     constructor(props){
//         super(props);
//         this.state={
// columnDef:[
//     {headerName:'brand',field:'brand'},
//     {headerName:'Product',field:'Product'},
//     {headerName:'Channel',field:'Channel'},
//     // {headerName:'UWEngine',field:'UWEngine'},
// ],
// rowData: [
// 		{brand: 'Toyota', Product: 'Celica', Channel: 35000},
// 		{brand: 'Ford', Product: 'Mondeo', Channel: 32000},
// 		{brand: 'Porsche', Product: 'Boxter', Channel: 72000}
// 	]
//         };
//     }

//  onGridReady=(params)=>{
//    console.log("grid is ready")
//     fetch("http://localhost:56677/api/Main/GetPartial").then(resp=>resp.json()).then(resp=>console.log(resp));
// }

// render()
// {
//     return(
//         <div className="ag-theme-balham"
//         >
            
//         <AgGridReact
//         columnDef={this.state.columnDef}
//         rowData={this.state.row}
//       //  onGridReady={onGridReady}
//         />
//         </div>
//     );
// }
// }