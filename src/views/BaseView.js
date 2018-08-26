import React from "react";

export default class BaseView extends React.Component {
  constructor(props, Controller) {
    super(props);
    this.state = {};
    this.controller = new Controller(
      this.setState.bind(this),
      this.state,
      this.props
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.controller.state = nextState;
    this.controller.props = nextProps;

    return true;
  }
}
