import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//including react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//importing sidebar component
import Sidebar from "./components/sidebar.js";
//importing the home page
import HomePage from "./pages/HomePage/index.js";
//importing the students page
import StudentsPage from "./pages/StudentsPage/index.js"
//importing the teachers page
import TeachersPage from "./pages/TeachersPage/index.js"
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Route exact path="/" component={HomePage} />
        <Route path="/Students" component={StudentsPage} />
        <Route path="/Teachers" component={TeachersPage} />


      </Router>

    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
