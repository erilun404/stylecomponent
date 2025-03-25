"use client";
import { useState } from "react";
import { Todo } from "@/utils/types";
import { v4 as uuid } from "uuid";
import TodoList from "@/components/TodoList";
import NewTodoTask from "@/components/NewTodoTask";
import styled, { createGlobalStyle } from "styled-components";
//import globalStyle from "@/styles/globalstyle";
import Header from "@/components/HeaderTodo";

const StyledMain = styled.main`
  align-items: center;
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4b5267;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100%;
  }
`;

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (title: any) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: uuid(), title, done: false }];
    });
  };

  const toggleTodos = (id: string, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, done: completed };
        }
        return todos;
      });
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todos) => todos.id !== id);
    });
  };

  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <Header />
        <NewTodoTask addTodo={addTodos} />
        <TodoList
          todo={todos}
          toggleTodo={toggleTodos}
          deleteTodo={deleteTodo}
        />
      </StyledMain>
    </>
  );
}
