import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import * as courseActions from "../../Redux/Actions/courseActions";
import PropsTypes from "prop-types";

class CourseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      course: []
    };
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
    courses: state.courses
  };
}

//export default CourseComponent;
export default connect(mapStateToProps)(CourseComponent);
