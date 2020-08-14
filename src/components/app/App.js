import React from "react";
import "./App.css";
import Landing from "../landing/landing.lazy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Photography  from '../Photography/Photography.lazy'
const loader = document.querySelector(".loader-container");
const root = document.querySelector("#root");
class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  showLoader = () => loader.classList.remove("hide-loader");
  hideLoader = () => {
    // console.log('hiding loader');
    loader.classList.add("hide");
    root.classList.remove("hide");
    // console.log(loader);
  };
  componentDidMount() {
    // console.log('Component mounting');
    //hide .loader-container div when react dom is rendered
    this.hideLoader();
  }
  render() {
    return (

        <Router>
          <Switch>
          <Route path="/portfolio" render={(props) => <Landing {...props} name = "Abhi"/>}/>
            <Route path="/photography" render={(props) => <Photography {...props} name = "Abhi"/>}/>
          </Switch>
        </Router>
    
    );
  }
}

export default App;
