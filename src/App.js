import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { CreateReview } from "./pages/Create-Review";
import Reviews from "./pages/Reviews";


function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/" component={Login} ></Route>
        <Route path="/Signup" component={Signup} ></Route>
        <Route path="/Create-Review" component={CreateReview} ></Route>
        <Route path="/Reviews" component={Reviews} ></Route>
      </switch>
    </Router>
  );
}

export default App;
