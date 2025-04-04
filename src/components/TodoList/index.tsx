import TodoItem from "../TodoItem";
import { Todo } from "@/utils/types";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledUl = styled.ul`
  color: hsl(200, 29%, 90%);
`;

type TodoListProps = {
  todo: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = ({ todo, toggleTodo, deleteTodo }: TodoListProps) => {
  return (
    <StyledUl>
      <ul>
        {todo.length === 0 && "No Todos"}
        {todo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </StyledUl>
  );
};

export default TodoList;
