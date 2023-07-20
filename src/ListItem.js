import React from "react";

class ListItem extends React.Component {
  render() {
    console.log(this.props.todos);
    return (
      <div className="container lg:w-1/2 mx-auto h-[68vh] overflow-scroll">
        {this.props.todos.map((todo, index) => {
          return (
            <div
              key={index}
              className="bg-slate-400 rounded-md shadow-md p-6 my-5"
            >
              <span>{todo.title}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListItem;
