import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextInput from "../../Components/Common/TextInput";

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        title: "",
        category: ""
      },
      errors: {
        onSave: false,
        title: ""
      },
      saving: false
    };
  }
  //const { user, onSave, onChange, saving , errors  = {this.props}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.onSave}>
              <h2>{this.state.user.id ? "Edit" : "Add"} User</h2>
              {this.state.errors.onSave && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errors.onSave}
                </div>
              )}
              <TextInput
                name="title"
                label="Title"
                value={this.state.user.title}
                onChange={this.onChange}
                error={this.state.errors.title}
              />

              <TextInput
                name="category"
                label="Category"
                value={this.state.user.category}
                onChange={this.onChange}
                error={this.state.errors.category}
              />

              <Button
                type="submit"
                disabled={this.state.saving}
                className="btn btn-primary"
              >
                {this.state.saving ? "Saving..." : "Save"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

UserAdd.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default UserAdd;
