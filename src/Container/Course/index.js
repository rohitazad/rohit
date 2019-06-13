import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';

class CourseComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:'',
            courseList:[]
        }
    }
    submitHandler = (e)=>{
        e.preventDefault();
        //console.log('form Submit', e);
        this.setState({
            courseList:[ this.state.term, ...this.state.courseList]
        })
        this.setState({
            term:''
        })
    }
    handleChange = (e)=> {
        //console.log(e.target.value);
        this.setState({
            term: e.target.value
        })
    }
    render(){
        return(
            <Container>
                Add Course
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.handleChange} type="text" value={this.state.term} />
                    <input type="submit" value="Add Course"></input>
                </form>
                <hr />
                Course List is here
                {this.state.courseList.map((course)=>{
                    return (
                        <div key={course}>{course}</div>
                    )
                })}
            </Container>
        );
    }
}

export default CourseComponent;