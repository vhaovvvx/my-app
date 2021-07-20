import React from "react";
import PropTypes from "prop-types";

TestApi.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TestApi.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TestApi(props) {
  const { posts, onTodoClick } = props;

  function handleClick(post, index) {
    if (onTodoClick) {
      onTodoClick(post, index);
    }
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={post.id} onClick={() => handleClick(post, index)}>
          {post.title}
          {/* <button onClick={() => handleDeleteClick(post.id)}>delete</button> */}
        </li>
      ))}
    </ul>
  );
}

export default TestApi;
