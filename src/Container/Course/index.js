import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import * as courseActions from "../../Redux/Actions/courseActions";
import PropsTypes from "prop-types";
import UserList from "./UserList";
import { NavLink } from "react-router-dom";
import { fetchAllPosts } from "../../Redux/Actions/index";

//import axios from "axios";

class CourseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      course: []
    };
  }

  componentDidMount() {
    // let payload = {
    //   token: "Lg6AcEePOsJbldWFXuGo4g",
    //   data: {
    //     name: "nameFirst",
    //     email: "internetEmail",
    //     phone: "phoneHome",
    //     _repeat: 300
    //   }
    // };
    // axios({
    //   method: "post",
    //   url: "https://app.fakejson.com/q",
    //   data: payload
    // }).then(function(resp) {
    //   // Do something with fake data
    //   console.log("myfacekapi ", resp);
    // });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts/1", {})
    //   .then(res => {
    //     console.log("res", res);
    //   })
    //   .catch(e => {
    //     console.log("err", e);
    //   });
    this.props.dispatch(fetchAllPosts());
  }

  submitHandler = e => {
    e.preventDefault();
    //console.log('form Submit', e);
    //debugger;
    this.props.dispatch(courseActions.createCourse(this.state.course));
    this.setState({ title: "" });
  };
  handleChange = e => {
    //console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
    let course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };
  render() {
    console.log("my new post resulce data", this.props);
    return (
      <Container>
        Add Course
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.title}
          />
          <input type="submit" value="Add Course" />
        </form>
        <hr />
        Course List is here
        {this.props.courses.map(course => {
          return <div key={course.title}>{course.title}</div>;
        })}
        <hr />
        <NavLink className="nav-link" to="/course-list/user-add">
          Add User
        </NavLink>
        <UserList userList={this.props.posts} />
      </Container>
    );
  }
}

CourseComponent.propsTypes = {
  courses: PropsTypes.array.isRequired,
  dispatch: PropsTypes.func.isRequired
};

function mapStateToProps(state) {
  //debugger;
  return {
    courses: state.courses,
    posts: state.posts
  };
}

//export default CourseComponent;
export default connect(mapStateToProps)(CourseComponent);
