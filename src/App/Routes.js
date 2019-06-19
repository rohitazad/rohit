import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";

import { BrowserRouter as Router } from "react-router-dom";

import HeaderIndex from "../Components/Header/index";
import MainIndex from "../Container/Main/index";
import AboutUsIndex from "../Container/AboutUs/index";
import ContactUsIndex from "../Container/ContactUs/index";
import CourseComponent from "../Container/Course/index";
import UserAdd from "../Container/Course/UserAdd";

class RoutesComponent extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <HeaderIndex />
          <Switch>
            <Route exact path="/" component={MainIndex} />
            <Route path="/about-us" component={AboutUsIndex} />
            <Route path="/contact-us" component={ContactUsIndex} />
            <Route exact path="/course-list" component={CourseComponent} />
            <Route path="/course-list/user-add" component={UserAdd} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
export default RoutesComponent;
