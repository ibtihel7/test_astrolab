import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from '../Components/Home'
class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
            </div>
         );
    }
}
 
export default Routes;