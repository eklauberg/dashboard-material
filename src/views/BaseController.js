export default class BaseController {
  constructor(setState, props, state) {
    this.setState = setState;
    this.state = state;
    this.props = props;
  }
  begin = () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
  };
  end = () => {
    if (this.state.loading) {
      this.setState({ loading: false });
    }
  };
}
