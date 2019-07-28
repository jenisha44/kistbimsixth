import React from 'react';

import {Link} from 'react-router-dom'

class Calculate extends React.Component{
  constructor(props){  
    super(props); 
    this.state={firstNum:'',secomdNum:'',operator:'',isSecondNum:false,result:''}
    this.onHandleInput=this.onHandleInput.bind(this);
    this.isNumberPressed=this.isNumberPressed.bind(this);
    this.onPerformTask=this.onPerformTask.bind(this);
    this.onClearScreen=this.onClearScreen.bind(this);

  }

  onHandleInput(num){
     if(num=='='){
      this.onPerformTask();
    }else if(num=='clear'){
      this.onClearScreen();
    }
    else{
      if(!this.isNumberPressed(num)){
        if(this.state.isSecondNum){
          var number = this.state.secomdNum + num;
          this.setState({secomdNum: number})
        }else{
          var number = this.state.firstNum + num;
          this.setState({firstNum: number})
        }
      }
    }
  
  }

  onClearScreen(){
    this.setState({result:'',firstNum:'', secomdNum:'', operator:'', isSecondNum:false});
  }
  onPerformTask(){
    switch(this.state.operator){
      case '+':
        var result=parseInt(this.state.firstNum)+parseInt(this.state.secomdNum);
        this.props.history.push('/first',{result});
        this.setState({result:result,firstNum:'',secomdNum:'',operator:'',isSecondNum:false});
        break;

      case '-':
        var result=parseInt(this.state.firstNum)-parseInt(this.state.secomdNum);
        this.props.history.push('/first',{result});
        this.setState({result:result,firstNum:'',secomdNum:'',operator:'',isSecondNum:false});
        break;

      case 'X':
        var result=parseInt(this.state.firstNum)*parseInt(this.state.secomdNum);
        this.props.history.push('/first',{result});
        this.setState({result:result,firstNum:'',secomdNum:'',operator:'',isSecondNum:false});
        break;

      case '/':
        var result=parseInt(this.state.firstNum)/parseInt(this.state.secomdNum);
        this.props.history.push('/first',{result});
        this.setState({result:result,firstNum:'',secomdNum:'',operator:'',isSecondNum:false});
        break;
      
    }
  }

  isNumberPressed(num){
    if(isNaN(num)){
      this.setState({isSecondNum:true,operator:num})
      return true;
    }else{
      return false;
    }
  }
    
  render(){
    return(
      <div>
        <div className="resultScreen">
          {this.state.firstNum} {this.state.operator} {this.state.secomdNum} {this.state.result}
        </div>

        <div className="calculatorWrapper">

          {[0,1,2,3,4,5,6,7,8,9,'+', '-', 'X', '/', '=', 'clear'].map(
          (num)=>                
          <div onClick={()=>this.onHandleInput(num)}>
              {num}
          </div>
          )}
    </div>
    <div>
    {/* <Link to='/first'><button>Go to first</button></Link> */}
    {/* <button onClick={()=>this.props.history.push('/first')}>Go to first</button> */}
    </div>
    </div>
      
    )
  }
}

export default Calculate;
