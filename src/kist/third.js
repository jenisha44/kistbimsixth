import React from 'react';

class third extends React.Component{
  render(){
      var i = 9;
    return(
      <div style={{color:'#a12345',fontSize:23,fontWeight:900,marginTop:20}}>
        this is third<br/>
        <b>{i==1?'True!':'False!!!'}</b>
      </div>
    )
  }
}

export default third;
