import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Logout from '../Components/Logout'

class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Login}/>
             <Route exact path='/home' component={Home}/>   
             <Route path= "/logout" component={Logout} />
            </div>
         );
    }
}
 
export default Routes;