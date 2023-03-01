import React from "react";

const Navigation = () => {
  return (
    <header class="navigation-header">
      <span class="navigation-logo">
        <img src="./static/images/todo-icon.png" alt="todo-logo" />
      </span>
      <span class="spacer"></span>
      <span class="navigation-description">Todo List</span>
    </header>
  );
};

export default Navigation;