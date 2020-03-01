import React, { Component } from 'react';
import CardList from '../component/CardList'
import SearchBox from '../component/SearchBox.js'
import {robots} from '../component/robots';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const{robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?  //0 a eşit olunca false döndürecek, yani false değilse 
            <h1>Loading</h1> :
        (
            <div className='tc'>
                    <h1 className='f2'>RoboFriend</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                         <ErrorBoundry>
                             <CardList robots = {filteredRobots}/>
                         </ErrorBoundry>
                    </Scroll>
            </div>
        );
    }23
}

export default App;