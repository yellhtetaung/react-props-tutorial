import React from "react";

class Title extends React.Component {
  render() {
    return <h1 className={this.props.class}>{this.props.children}</h1>;
  }
}

class TextInput extends React.Component {
  render() {
    return (
      <input
        className={this.props.className}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={(e) => this.props.onChangeText(e)}
      />
    );
  }
}

class Button extends React.Component {
  render() {
    const { className, onClick } = this.props;

    return (
      <button className={className} onClick={onClick}>
        {this.props.title}
      </button>
    );
  }
}

export { Title, TextInput, Button };
