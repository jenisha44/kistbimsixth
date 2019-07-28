import React from 'react';

class second extends React.Component{
    constructor(props){
        super(props);
        this.state={first:'hey',second:'sup?'};
    }

  render(){
    return(
      <div style={{color:'#abcdef',fontFamily:'times new roman',fontSize:60,fontWeight:800,padding:20}}>
        this is second<br/>
        <b>Well just wanna make this bold</b><br/>
        {this.state.first}<br/>
        {this.state.second}
      </div>
    )
  }
}

export default second;
