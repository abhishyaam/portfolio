import React from 'react';
import './App.css';
import Landing from '../landing/landing.lazy'

const loader = document.querySelector('.loader-container');
const root = document.querySelector('#root');
class App extends React.Component{
    // constructor(props){
    //   super(props)
    // }
   showLoader = () => loader.classList.remove('hide-loader');
   hideLoader = () => {
    // console.log('hiding loader');
    loader.classList.add('hide');
    root.classList.remove('hide');
    // console.log(loader);
  };
  componentDidMount() {
    // console.log('Component mounting');
    //hide .loader-container div when react dom is rendered
    this.hideLoader()
  }
  render() {
    return (
      <div className="App">
        <Landing name="Abhi"/>
      </div>
    );
  }

}

export default App;
