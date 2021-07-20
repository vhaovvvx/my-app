import React, { useEffect, useState } from 'react';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import './App.css';
import PostList from './component/PostList';
import Pagination from './component/Pagination';
import queryString from 'query-string';
import PostFiltersForm from './component/PostFiltersForm';
import ColorBox from './component/ColorBox';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Anhdeptrai qua' },
    { id: 2, title: 'anhdeptrai vai lin' },
    { id: 3, title: 'anhdeptrai that day' },
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('failed to fetch post list: ', error);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log('new page:', newPage);
    setFilter({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log(formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    let newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  function handleFilterChange(newFilters) {
    console.log('new filters: ', newFilters);
    setFilter({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <>
      <h1>React Hook - Todolist - PostList</h1>
      <ColorBox></ColorBox>
      <PostFiltersForm onSubmit={handleFilterChange}></PostFiltersForm>

      <PostList posts={postList}></PostList>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}>
        1
      </TodoList>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
    </>
  );
}

export default App;
