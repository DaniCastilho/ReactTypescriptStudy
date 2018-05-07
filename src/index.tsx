import * as React from "react";
import { render } from "react-dom";

import Stateless from "./StatelessComponent";
import Statefull from "./StatefullComponent";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Stateless message="Ola stateless component" />
        <Statefull message="Ola statefull component" />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
