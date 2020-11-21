import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      
      <div>
      <label>
        Show Greased Hogs:<input type='checkbox' onChange={props.toggleGreased}/>
      </label>
      <label>
        Sort By:
       <select onChange={props.handleSort}>
         <option value='' ></option>
         <option value='weight' >weight</option>
         <option value='name' >name</option>
       </select>
      </label>
      </div>

      {/* <button onClick={props.nameSort}>Sort Hogs By Name</button>
      <button onClick={props.weightSort}>Sort Hogs By Weight</button> */}
      {/* <button onClick={props.allHogs}>Show All Hogs</button> */}

    </div>
  );
};

export default Nav;
