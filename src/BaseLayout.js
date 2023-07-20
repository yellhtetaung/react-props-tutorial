import React from "react";

class BaseLayout extends React.Component {
  render() {
    return (
      <main className="container mx-auto mt-10">{this.props.children}</main>
    );
  }
}

export default BaseLayout;
