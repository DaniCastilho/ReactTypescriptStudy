import * as React from "react";
import * as ReactDOM from "react-dom";

type StatefullProps = {
  message: string;
};

type StatefullState = {
  count: number;
};
class Statefull extends React.Component<StatefullProps, StatefullState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <h2 onClick={this.increment}>
        {this.props.message} {this.state.count}
      </h2>
    );
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
}

export default Statefull;
