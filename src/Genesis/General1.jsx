import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'ag-grid-community/dist/ag-grid-community.js';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from "ag-grid-react";
import { onGridReady } from "ag-grid-react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import { makeStyles } from '@material-ui/core/styles';
import genesis from '../Genesis/genesis.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import'bootstrap/dist/css/bootstrap.css';
import{BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import EngineRenderer from './engine';
import { RowNode } from 'ag-grid-community';


const querystring = require('querystring')

const defaultColDef={
    sortable:true,
    editable:true,
    flex:1,
   wrapText:true,
    autoHeight:true,
  }
 
export default class GeneralPurpose extends Component{
  
    constructor(props){
      super(props);
        
        this.state={
          count:0,
          selectednodes:0,
          UwEngine:'',
          gridOptions:
           { 
              api:{},
              columnApi:{},
              headerHeight: 70,
              rowHeight: 70,
              brand:'',
              product:'', 
           
              channel:'',
              engine:'',
              rows:[],
              pagination:true,
              rowSelection:'single',
              paginationPageSize:4,
              columnDefs:[    
              {headerName:"Brand", field:"brand"},
              {headerName:"Product" ,field:"product"},
              {headerName:"Channel" ,field:"channel"},
              {headerName:"UW Engine", field:"engine" ,cellRenderer:'engineRenderer',className:'c' ,cellRendererParams: { onEngineChange: this.onEngineChange} },
              {headerName:"Action", field:"engine",cellRendererFramework:(params)=><div> <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={this.actionButton}
              startIcon={<SaveIcon />}
               >
          </Button> 
          </div>
          }
        ],
        frameworkComponents: {
          engineRenderer: EngineRenderer
        },
        rowData:null,
        enableSorting:true, 
        onGridReady:this.onGridReady.bind(this),
        onSelectionChanged:this.onSelectionChanged.bind(this),
            en:""
            
        }
    }
 }

  resetClick=()=>
    { 
        this.state.brand= ''
        this.state.product= ''
        this.state.channel= ''
        this.state.engine=''
        console.log(this.state.brand)
    }

  actionButton=(engine)=>{
        const selectednodes=this.state.selectednodes
        const sel=selectednodes[0].data
        sel.engine=this.state.UwEngine
        console.log("the type   "+sel.engine)
 
 axios.put("http://localhost:56677/api/Main/UpdateGeneralPurposeRecords",{Brand:sel.brand,Channel:sel.channel,Engine:sel.engine,Product:sel.product}).then(res=>{console.log(res)
 if(res.data==true)
     alert("Data updated successfully")
   })
 
      console.log("engine Change", selectednodes)
      console.log(this.state.count)
   }
      onEngineChange = (engine) => {
      console.log("engine Change", engine)
      this.state.UwEngine=engine
      this.setState({count:this.state.count+1})  
  }
   
// onGridReady(params){
//     this.state.gridOptions.api=params.api;
//     this.state.gridOptions.columnApi=params.columnApi;
//     this.state.gridOptions.api.rowData()
//     this.setState(this.state)
// }

    onGridReady=()=>{
       let params ={
            "brand": this.state.brand,         
            "product":this.state.product , 
            "engine": this.state.engine , 
            "channel": this.state.channel       
                   }       
        axios.request({
            url: 'http://localhost:56677/api/Main/GetPartial?' + querystring.stringify(params),
            method: 'get',
            data: params
        }).then(res=>{
            console.log(res.data) 
            this.setState({rows: res.data})
            this.setState({en: res.data.engine})
        })
    
    }
    
   onSelectionChanged=(event)=>{
     console.log(event)
     this.state.selectednodes=event.api.getSelectedNodes()
     console.log(this.state.selectednodes)
   }

    HandleChanges=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        let mystyle={
        padding:"2px",
        borderRadius:"5px",
        align:'center',
        width:'170px'
              };
        return(
            <div>     
            <br/>

{/* <Grid container spacing={2}>
      <Grid item xs={9}>
        </Grid>
       <Grid item xs={0}>
         <Paper>
         <button type="button" className="btn btn-primary counter-button"style={{width:"150px"}}>Save  ({this.state.count})</button>
        
         </Paper>
       </Grid>
       <Grid item xs={0}>
         <Paper >
         <button type="button" className="btn btn-danger"style={{width:"150px"}}>Sync</button>

         </Paper>
       </Grid>
     </Grid> */}
<br/>

<Grid container spacing={2}>
       
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Enter Brand" name ="brand" className="s" onChange={this.HandleChanges} value={this.state.brand} />
       </Grid>
       <Grid item xs={2}>
       <input type="text"  style={mystyle} placeholder="Enter Product" name="product" className="s" onChange={this.HandleChanges} value={this.state.product}/>       </Grid>
       <Grid item xs={2}>
         <input type="text"  value={this.state.channel} style={mystyle} placeholder="Enter Channel" name="channel" className="s" onChange={this.HandleChanges} />
       </Grid>
       <Grid item xs={2}>
        <select  style={mystyle} name="engine" onChange={this.HandleChanges}>
             
         <option value="Select"  disabled selected hidden>UW Engine</option>
             
         <option value="Interconnect">Interconnect</option>
         <option value="Powercurves">Powercurves</option>
         <option value="Smarts">Smarts</option>
             
             </select>
       </Grid>
       
       <Grid item xs={0}>
         <Paper>
         <button type="button" className="btn btn-primary"onClick={this.onGridReady}style={{width:"150px"}} value="search">Search</button>
        
         </Paper>
       </Grid>
       <Grid item xs={0}>
         <Paper >
         <button type="button" onClick={this.resetClick} style={{width:"150px"}}className="btn btn-danger">Reset</button>

         </Paper>
       </Grid>
     </Grid>
     <br/>
            <div className="ag-theme-alpine" style={{height:"400px"}}>
                <AgGridReact
                     columnDefs={this.state.gridOptions.columnDefs}
                     rowData={this.state.rows}
                     frameworkComponents={this.state.frameworkComponents}
                     gridOptions={this.state.gridOptions}
                     onGridReady={onGridReady}
                     onSelectionChanged={this.onSelectionChanged}
                     defaultColDef={defaultColDef}/>
               
                </div> 
            </div>
            
        )
    }
  }