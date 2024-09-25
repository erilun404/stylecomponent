import styled from "styled-components"

type TodoItemProps = {
    completed: boolean;
    id: string;
    title: string;
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}

const StyledTodoItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;

    button {
        background: hsl(0, 100%, 40%, 0.1);
        border: 1px solid hsl(0, 81.66666666666667%, 23.52941176470588%);
        color: hsl(0, 55.35714285714286%, 21.96078431372549%);
        padding: 4px 8px;
        width: 50%;
        &:hover {
            background: hsl(0, 100%, 40%, 0.2);
        }
    }
    label {
        input[type="checkbox"] {
        width: 1em;
        height: 1rem;
        accent-color: #be97c6;
        }
    }
   
`

const TodoItem = ({completed, id, title, toggleTodo, deleteTodo}:TodoItemProps) => {
    return (
        <StyledTodoItem>
        {/* <li> */}
            <label>
                <input
                type= "checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        {/* </li> */}
        </StyledTodoItem>
    
    )
}

export default TodoItem