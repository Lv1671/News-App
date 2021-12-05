import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       <Switch>
          <Route exact path="/"><News key="General" pageSize={12} country={"in"} category={"general"}/></Route>
          <Route exact path="/business"><News key="Buisness" pageSize={12} country={"in"} category={"business"}/></Route>
          <Route exact path="/entertainment"><News  key="Entertainment"pageSize={12} country={"in"} category={"entertainment"}/></Route>
          <Route exact path="/general"><News key="General" pageSize={12} country={"in"} category={"general"}/></Route>
          <Route exact path="/health"><News key="Health" pageSize={12} country={"in"} category={"health"}/></Route>
          <Route exact path="/science"><News  key="Science"pageSize={12} country={"in"} category={"science"}/></Route>
          <Route exact path="/sports"><News key="Sports" pageSize={12} country={"in"} category={"sports"}/></Route>
          <Route exact path="/technology"><News key="Technology" pageSize={12} country={"in"} category={"technology"}/></Route>
        </Switch>
       </Router>
      </div>
    )
  }
}
