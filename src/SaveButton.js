import React, { Component } from "react";
import { withComponents } from "@reactioncommerce/components-context";

class SaveButton extends Component {

  render() {
    const { Button } = this.props.components;
    return <Button>Save</Button>;
  }
}

export default withComponents(SaveButton);
