import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

class UserBio extends React.Component{
    constructor(props){  
      super(props); 
  this.state = {expanded: false,userList:[],loading:true};
  this.getUserData=this.getUserData.bind(this);
    }
   
    getUserData(){
      let self=this;
        axios.get('https://api.myjson.com/bins/lwiqv')

        .then(function (response) {
            
            self.setState( {userList: response.data,loading:false})

        })
        .catch(function(error){

            console.log(error);
        });
    }
    componentDidMount(){
      this.getUserData();
  }
    handleExpandClick= () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
      
    render(){
      return(
        <div> 

          {this.state.loading ?
          <div style={{margin:'50px 0px 50px 0px'}}>
            <CircularProgress style={{margin:'0 auto', display:'black'}}
            /> </div>:
          <Grid container spacing={24}>
            {this.state.userList.length?
            this.state.userList.map(
                 (user)=>
<Grid item xs={12} sm={6}>
<Paper style={{border:'1px solid '+user.eyeColor}}>
           <Card >
        <CardHeader
          avatar={
            <Avatar src={user.picture}>
                </Avatar>
          }
          
          title={<div>{user.email}<br/>Age:{user.age}</div>}
          subheader={<div>{user.address}<br/>{user.phone}</div>}

        />
        <CardContent>
          <Typography component="p">
           Address,contact,age
          </Typography>
        </CardContent>
        <CardActions >
           
          <IconButton
            
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {user.friends.length?
            user.friends.map(
                (friends)=>
                <Chip
                avatar={
                  <Avatar>
                    A
                  </Avatar>
                }
                label={friends.name}
                style={{margin:10}}
                />
            ): ''
            }
            
        
          </CardContent>
        </Collapse>
      </Card>
      </Paper>
            </Grid>
            ): ''
          }
    
    </Grid>
          }
            </div>
            
            
            
              
           
         
        
      );
        
  }
    }
  
  export default UserBio;
  