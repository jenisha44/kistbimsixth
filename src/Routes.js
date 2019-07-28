import React from 'react';
import Calculate from './kist/calculate';
import {Route, Switch} from "react-router-dom";
import First from './kist/first';
import form from './kist/form';
import UserBio from './apiCall/UserBio';
import Dashboard from './apiCall/dashboard';
import Header from './apiCall/header';



class Routes extends React.Component{
  render(){
  return(
      <div>
        <Header/>
        <Switch>
            <Route path="/" component={Calculate} exact/>
            <Route path="/first" component={First} exact/>
            <Route path="/form" component={form} exact/>
            <Route path="/UserBio" component={UserBio} exact/>
            <Route path="/Dashboard" component={Dashboard} exact/>
        </Switch>
      </div>
    )
  }
}

export default Routes;
