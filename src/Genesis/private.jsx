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
import genesis from '../Genesis/genesis.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import'bootstrap/dist/css/bootstrap.css';
import{BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import EngineRenderer from './engine';

const querystring = require('querystring')

const defaultColDef={
   
    flex:1,
    resizable: true,
    wrapText:true,
    autoHeight:true
  }
 

 
export default class Privatelabel extends Component{
  actionButton=(engine)=>{

    const selectednodes=this.state.selectednodes
    const sel=selectednodes[0].data
    sel.uwEngine=this.state.uwEngine
    console.log("the type   "+sel.uwEngine)
    
    axios.put("http://localhost:56677/api/Main/UpdatePrivateLabelRecords",{BrandingCodeId:sel.brandingCodeId,BrandingCode:sel.brandingCode,Classification:sel.classification,Organisation:sel.organisation,Orchestration:sel.orchestration,Program:sel.program,EquifexProgramType:sel.equifexProgramType,AdjudicationEngine:sel.adjudicationEngine,UWEngine:sel.uwEngine}).then(res=>{console.log(res)
      if(res.data==true)
                alert("Data updated successfully")
      else
                alert("data not updated")
 })


 
  }

    constructor(props){
        super(props);
        
        this.state={
          count:0,
          selectednodes:0,
          uwEngine:'',
          gridOptions:
           { 
             api:{},
            columnApi:{},
            brandingCodeId:'',
            brandingCode:'',
            rowSelection:'single',
            classification:'',
            organisation:'',
            orchestration:'',
            program:'',
            equifexProgramType:'',
            adjudicationEngine:'',
            engine:'', 
            autoSizePadding:10,
            rows:[],
            skipHeaderOnAutoSize:true,
            pagination:true,
            paginationPageSize:3,
            isDisabled:true,
            columnDefs:[    
            {headerName:"Branding code id", field:"brandingCodeId"},
            {headerName:"Branding code" ,field:"brandingCode"},
            {headerName:"Classification" ,field:"classification"},
            {headerName:"Organization" ,field:"organisation"},
            {headerName:"Orchestration" ,field:"orchestration"},
            {headerName:"Program" ,field:"program"},
            {headerName:"Equifax program type" ,field:"equifexProgramType"},
            {headerName:"Adjudication Engine discription" ,field:"adjudicationEngine"},
            
            {headerName:"UW Engine", field:"uwEngine" ,cellRenderer:'engineRenderer',cellRendererParams: { onEngineChange: this.onEngineChange} },
            {headerName:"Action", field:"uwEngine",cellRendererFramework:(params)=><div> <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={this.actionButton}
  
            id="a"
            startIcon={<SaveIcon />}
          >
          </Button> </div>}
        ],
        frameworkComponents: {
          engineRenderer: EngineRenderer
        },
        rowData:null,
        //enableSorting:true,
        onGridReady:this.onGridReady.bind(this),
            //en:"",
            onSelectionChanged:this.onSelectionChanged.bind(this),
        }
        
    }
   
    }
    resetClick=()=>
   { 
    this.state.code= ''
    this.state.codeid= ''
    this.state.classification= ''
    this.state.organisation= ''
    this.state.orchestration= ''
    this.state.program= ''
    this.state.engine= ''
    this.state.equifexProgramType= ''
    this.state.adjudicationEngine= ''
    console.log(this.state.brandingCode)
    }

    onEngineChange = (uwEngine) => {
              console.log("engine Change", uwEngine)
              this.state.uwEngine=uwEngine
              this.setState({count:this.state.count+1})  
              //document.getElementById("a").disabled=false;
        }
   
onGridReady(params){
    this.state.gridOptions.api=params.api;
    this.state.gridOptions.columnApi=params.columnApi;
    this.state.gridOptions.api.rowData()
    this.setState(this.state)
}
    onGridReady=()=>{
       let params ={
            "brandingCodeId": this.state.codeid,          
            "brandingCode":this.state.code ,     
            "classification": this.state.classification,
            "organisation": this.state.organization ,
            "orchestration": this.state.orchestration ,
            "program": this.state.program ,
            "equifexProgramType": this.state.programtype,
            "adjudicationEngine": this.state.enginedis,  
            "uwEngine": this.state.engine   
                   }       
        axios.request({
            url: 'http://localhost:56677/api/Main/GetPartial/PrivateLabel?' + querystring.stringify(params),
            method: 'get',
            data: params
        }).then(res=>{
            console.log(res.data) 
            this.setState({rows: res.data})
            //this.setState({en: res.data.uwEngine})
           // params.api.applyTransactionAsync({add:res})
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
            <div >     
            <br/>
         
{/* <Grid container spacing={2}>
       
       <Grid item xs={9}>
        </Grid>
       <Grid item xs={0}>
         <Paper>
         <button type="button" className="btn btn-primary counter-button" style={{width:"150px"}}>Save  ({this.state.count})</button>
        
         </Paper>
       </Grid>
       <Grid item xs={0}>
         <Paper >
         <button type="button" className="btn btn-danger"style={{width:"150px"}}>Sync</button>

         </Paper>
       </Grid>
     </Grid> */}


<Grid container spacing={2}>
       
<Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Branding code Id" name ="codeid" className="s" onChange={this.HandleChanges}  />
       </Grid>
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Branding code" name ="code" className="s" onChange={this.HandleChanges} />
       </Grid>
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Classification" name ="classification" className="s" onChange={this.HandleChanges}  />
       </Grid>
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Organization" name ="organization" className="s" onChange={this.HandleChanges} />
       </Grid>
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Orchestration" name ="orchestration" className="s" onChange={this.HandleChanges} />
       </Grid>
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Program" name ="program" className="s" onChange={this.HandleChanges}  />
       </Grid>
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Equifax program type" name ="programtype" className="s" onChange={this.HandleChanges} />
       </Grid>
       <Grid item xs={2}>
         <input type="text" style={mystyle} placeholder="Adjudication Engine discription" name ="enginedis" className="s" onChange={this.HandleChanges} />
       </Grid>
       
       <Grid item xs={2}>
        <select  style={mystyle}onChange={this.HandleChanges} name="engine" >
             
         <option value=""  disabled selected hidden>UW Engine</option>
             
         <option value="Interconnect">Interconnect</option>
         <option value="Powercurves">Powercurves</option>
         <option value="Smarts">Smarts</option>
             
             </select>
       </Grid>
       <Grid item xs={0}>
         <Paper>
         <button type="button" className="btn btn-primary"onClick={this.onGridReady}  style={{width:"150px"}}value="search">Search</button>
        
         </Paper>
       </Grid>
       <Grid item xs={0}>
         <Paper >
         <button type="button" onClick={this.resetClick}  style={{width:"150px"}}className="btn btn-danger">Reset</button>

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