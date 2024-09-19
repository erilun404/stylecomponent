'use client'
import { useState } from "react";
import { Todo } from "@/utils/types";
import {v4 as uuid} from 'uuid';
import TodoList from "@/components/TodoList";
import NewTodoTask from "@/components/NewTodoTask";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (title: any) => {
      setTodos(currentTodos => {
        return [
          ...currentTodos,
          {id: uuid(), title, completed: false}
        ]
      })
  }
  
  const toggleTodos = (id:string, completed: boolean) => {
    setTodos(currentTodos => {
      return currentTodos.map(todos => {
        if(todos.id === id) {
          return {...todos, completed}
        }
        return todos
      })
    })
  }

 const deleteTodo = (id: string) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todos => todos.id !== id)
    })
  }

  return (
    <>
     <NewTodoTask addTodo={addTodos}/>
     <TodoList todo={todos} toggleTodo={toggleTodos} deleteTodo={deleteTodo}/>
    </>
   
  
  );
}
