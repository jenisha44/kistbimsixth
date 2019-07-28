import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class first extends React.Component{
  constructor(props){  
    super(props); 
    this.state={result:this.props.history.location.state.result}
    
    

  }
    
  render(){

    return(
      <div>  
      <div>
      <Grid container >
        
        <Grid item xs={12} >
        <div className="menubar">
          
          </div>
        </Grid>
        
        <Grid item xs={8}>
        <div className="intro1">
          
          </div>
        </Grid>
        <Grid item xs={4} >
        <div className="intro2">
          
          </div>
        </Grid>
        <Grid item xs={3} className="smbar">
        <div className="smbar">
          
          </div>
        </Grid>
        <Grid item xs={3} >
        <div className="smbar">
          
          </div>
        </Grid>
        <Grid item xs={3} >
        <div className="smbar">
          
          </div>
        </Grid>
        <Grid item xs={3} >
        <div className="smbar">
          
          </div>
        </Grid>
      </Grid>
    </div>
        {this.state.result}
      </div>
    )
  }
}

export default first;
