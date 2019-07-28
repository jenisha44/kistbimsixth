import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Radio } from '@material-ui/core';
var adbs = require("ad-bs-converter");
class form extends React.Component{
    constructor(props){  
        super(props); 
        this.state={dob:'',result:'',selectedValue:'bs'}
        this.handleChange=this.handleChange.bind(this)
       this.convertdate=this.convertdate.bind(this)
       this.handleChangeSelect=this.handleChangeSelect.bind(this)
    }
    handleChange(e){
        this.setState({
            dob:e.target.value
        })
    }
    convertdate(){
        var result=adbs.ad2bs(this.state.dob).ne;
        var ans=result.year+','+result.month+','+result.day+','+result.strDayOfWeek;
        this.setState({result:ans})
       // console.log(this.state.dob)
       // console.log(adbs.ad2bs(this.state.dob))
    }
    handleChangeSelect(event){
        this.setState({selectedValue:event.target.value});   
    };
    render(){
      return(
        <div>
            <div>
            <Radio
            checked={this.state.selectedValue==='bs'}
            value="bs"
            onClick={this.handleChangeSelect}
            name="radio-button-demo"
            aria-label="BS"
            
           
            />
            <Radio
            checked={this.state.selectedValue==='ad'}
            value="ad"
            onClick={this.handleChangeSelect}
            name="radio-button-demo"
            aria-label="AD"
            color="red"
            style={{color:'#222222'}}
            />
            </div>
          <TextField
          id="standard-name"
          label="dob"
          name="dob"

          value={this.state.dob}
          onChange={this.handleChange}
          margin="normal"
          placeholder="Enter Dob"
          helperText="YYY/MM/DD"
        />
        <Button variant="contained" onClick={this.convertdate}>
         Convert
        </Button>
        <div>
            {this.state.result}
        </div>
        </div>
      );
    }
}
export default form;