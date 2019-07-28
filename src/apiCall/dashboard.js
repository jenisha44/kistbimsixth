import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';





class Dashboard extends React.Component{
    constructor(props){  
      super(props); 
      this.state={
        open:false
      };
     
    }
    toogleDrawer=() => {
      this.setState(  {
        open: !this.setstate.open,
    });
  };
    
      
    render(){
      return(
        <div> 
           Dashboard

      </div>    
         
        
      );
        
  }
    }
  
  export default Dashboard;
  