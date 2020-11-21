import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";

class App extends Component {
  
  constructor() {
    super()
    // save the original array here???
    // const hogs = hogs
    const updatedHogs = hogs.map(hog => {
      return {
        ...hog,
        hidden: false
      }
    })

    this.state = {
       hogs: updatedHogs,
       showGreased: false,
       sortBy: ''
    }
  }

  handleSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  findHogs = () => {
    let updatedHogs = [...this.state.hogs].filter(hogObj => !hogObj.hidden)

    if (this.state.showGreased) {
      updatedHogs = this.state.hogs.filter(hogObj => hogObj.greased)
    }

    if (this.state.sortBy === 'weight'){
      updatedHogs.sort(function (hogA, hogB) {
        return hogA.weight - hogB.weight;
      });
    } else if (this.state.sortBy === 'name') {
      updatedHogs.sort( (hogA, hogB) => hogA.name.toUpperCase() < hogB.name.toUpperCase() ? -1: 1 )
      }
      return updatedHogs
    }

    toggleGreased = () => {
      this.setState(prevState => { 
        return {
          showGreased: !prevState.showGreased 
        }
      })
    }

    hideHog = (name) => {
      const updatedHogs = this.state.hogs.map(hogObj => {
        if (hogObj.name === name) {
          return {
            ...hogObj,
            hidden: true
          }
        } else {
          return hogObj
        }
      })
  
  
      this.setState({
        hogs: updatedHogs
      })
  
    }
  

  render() {
    const hogsToShow = this.findHogs()

    return (
      <div className="App">
        <Nav 
        // Old methods that may require another fetch request, not a good idea
        // allHogs={this.allHogs} greased={this.greased} nameSort={this.nameSort} weightSort={this.weightSort}
        handleSort={this.handleSort} toggleGreased={this.toggleGreased}/>
        <PigContainer hogs={hogsToShow} hideHog={this.hideHog}/>
      </div>
    );
  }
}

export default App;


  // these go in main body class under constructor
  // These methods save original state as the results from fetch, which may need to re fetch if you want to get the original list back
  // greased = () => {
  //   let hogs = this.state.hogs
  //   let greasedHogs = hogs.filter(hog => hog.greased)
  //   this.setState({
  //     hogs: greasedHogs
  //   })
  // }

  // allHogs = () => {
  //   this.setState({
  //     hogs: hogs
  //   })
  // }

  // nameSort = () => {
  //   let hogs = this.state.hogs
  //   let sorted =  hogs.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
  //   // let sorted = hogs.sort((hog, hog2) => hog.name.localeCompare(hog2.name))
  //   this.setState({
  //     hogs: sorted
  //   })
  // }
  
  // weightSort = () => {
  //   let hogs = this.state.hogs
  //   let sorted =  hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
  //   // let sorted = hogs.sort((hog, hog2) => hog.name.localeCompare(hog2.name))
  //   this.setState({
  //     hogs: sorted
  //   })
  // }

  // hideHog = (e) => {
  //   let hogs = this.state.hogs
  //   let pigs = hogs.filter(pig => pig.name !== e.target.previousElementSibling.firstElementChild.innerText)
  //   e.stopPropagation()
  //   this.setState({
  //     hogs: pigs
  //   })
  // }
