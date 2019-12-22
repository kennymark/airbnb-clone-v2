import React from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";

export default class Search extends React.Component {
  getSearchVal = e => {
    this.props.searchVal(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col>
            <Input
              type="text"
              name="search"
              placeholder="Search"
              className="mx-auto"
              onChange={this.getSearchVal}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
