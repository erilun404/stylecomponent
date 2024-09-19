import TodoItem from "../TodoItem";
import { Todo } from "@/utils/types";

type TodoListProps = {
    todo: Todo[];
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id:string) => void;
}

const TodoList = ({todo, toggleTodo, deleteTodo}:TodoListProps) => {
    return (
        <ul>
            {todo.length === 0 && "No Todos"}
            {todo.map(todo => {
                return (
                    <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList