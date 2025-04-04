"use client";
import { useEffect, useState } from "react";
import { Todo } from "@/utils/types";
import { v4 as uuid } from "uuid";
import TodoList from "@/components/TodoList";
import NewTodoTask from "@/components/NewTodoTask";
import styled, { createGlobalStyle } from "styled-components";
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

  useEffect(() => {
    if (todos.length === 0) {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
      return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // useEffect(() => {
  //   const storedTodos = localStorage.getItem("todos");
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //   }
  //   console.log("Todos added:", todos);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  //   console.log("Todos updated:", todos);
  // }, [todos]);

  const addTodos = (title: any) => {
    setTodos([...todos, { id: uuid(), title, completed: false }]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleTodos = (id: string, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos!.map((todos) => {
        if (todos.id === id) {
          return { ...todos, completed };
        }
        return todos;
      });
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos!.filter((todos) => todos.id !== id);
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
