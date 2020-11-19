import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       hogs: hogs
    }
  }

  greased = () => {
    let hogs = this.state.hogs
    let greasedHogs = hogs.filter(hog => hog.greased)
    this.setState({
      hogs: greasedHogs
    })
  }

  allHogs = () => {
    this.setState({
      hogs: hogs
    })
  }

  nameSort = () => {
    let hogs = this.state.hogs
    let sorted =  hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    // let sorted = hogs.sort((hog, hog2) => hog.name.localeCompare(hog2.name))
    this.setState({
      hogs: sorted
    })
  }
  
  weightSort = () => {
    let hogs = this.state.hogs
    let sorted =  hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    // let sorted = hogs.sort((hog, hog2) => hog.name.localeCompare(hog2.name))
    this.setState({
      hogs: sorted
    })
  }

  hideHog = (e) => {
    let hogs = this.state.hogs
    let pigs = hogs.filter(pig => pig.name !== e.target.previousElementSibling.firstElementChild.innerText)
    e.stopPropagation()
    this.setState({
      hogs: pigs
    })
  }

  render() {
    return (
      <div className="App">
        <Nav greased={this.greased} allHogs={this.allHogs} nameSort={this.nameSort} weightSort={this.weightSort}/>
        <PigContainer hogs={this.state.hogs} hideHog={this.hideHog}/>
      </div>
    );
  }
}

export default App;
