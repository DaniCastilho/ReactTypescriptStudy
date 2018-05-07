import * as React from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
type StatelessProps = {
  message: string;
};

const Stateless: React.SFC<StatelessProps> = ({ message }) => (
  <div style={styles}>
    <h2>{message}</h2>
  </div>
);

export default Stateless;
