import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

export class Flat extends Component {
  static defaultProps = {
    flat: {
      imageUrl:
        "https://images.unsplash.com/photo-1489936724440-afaf5a115ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80",
      price: "165",
      name: "Le Parisian de Montjeur"
    }
  };

  render() {
    return (
      <Card onClick={this.props.onClick} style={{ maxHeight: 400 }}>
        <CardImg
          top
          width="100%"
          src={this.props.flat.imageUrl}
          alt="Card image cap"
        />
        <CardBody>
          <CardText>
            <strong>£{this.props.flat.price}</strong>-{this.props.flat.name}
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Flat;
