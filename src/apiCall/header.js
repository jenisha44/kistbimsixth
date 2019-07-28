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
import {Link} from "react-router-dom";
import menuList from './menuItem';
import {List,ListItem,ListItemText} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';




class Header extends React.Component {
  constructor(props){  
      super(props); 
      this.state={
        open:false
      };
  
    }
    toogleDrawer=() => {
      this.setState(  {
        open: !this.state.open,
    });
  };
    
      
    render(){
      return(
        <div> 
           <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={this.toogleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" >
            React project
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={this.state.open} onClose={this.toogleDrawer}>
        <div
        tabIndex={0}
        role="button"
        onClick={this.toogleDrawer}
        >
          <List>
              {menuList.headerMenu.map((text, index) => (
                  <Link to={text.path}>
                      <ListItem button key={index}>
              <ListItemIcon>{text.icon} </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
            </Link>
          ))}
        </List>

      </div>
      </Drawer>

      </div>    
         
        
      );
              }
            }  
  

  
  export default Header;
  