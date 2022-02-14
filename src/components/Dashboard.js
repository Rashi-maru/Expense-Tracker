import React, { Component } from "react";
import ReactDOM from "react-dom";
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Stickynote from "./Stickynotes/Stickynote";
import ExpenseTracker from "../../src/ExpenseTracker";

const Columns = () =>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>

<BrowserRouter>
<div>

    <Switch>
        <Route path="/stickynotes" component={Stickynote}></Route>
        <Route path="/expensetracker" component={ExpenseTracker}></Route>
    </Switch>


</div>
</BrowserRouter>


{/* <Route path="/expensetracker">
  <ExpenseTracker />
</Route> */}
<Router>
    <div>
        <Link to="/expensetracker">Column 1</Link>
        {/* <div>Column 2</div> */}
        <Link to="/stickynotes">Column 2</Link>
        <div>Column 3</div>
    </div>
</Router>
</div>
ReactDOM.render(<Columns />, document.getElementById("root"))

export default Columns;
