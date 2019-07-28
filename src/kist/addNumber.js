import React from 'react';

class addNumber extends React.Component{
  constructor(props){
    super(props);
    this.state={first:1,second:2,result:''};

    this.handleChange=this.handleChange.bind(this);
    this.add=this.add.bind(this);
  }
  handleChange(e){
    
    this.setState({
    [e.target.name]:e.target.value
    
  });
  }
  add(e){
    var sum = parseInt(this.state.first)+parseInt(this.state.second);
    this.setState({
      result:sum
    })
  }
  render(){
    return(
      <div>        
        <input type="numbers" name="first" onChange={this.handleChange} />
        <input type="numbers" name="second" onChange={this.handleChange} />
        <button type="submit" onClick={this.add}>submit </button>
        <div>
              Result : {this.state.result}
        </div>

      </div>
    )
  }
}

export default addNumber;