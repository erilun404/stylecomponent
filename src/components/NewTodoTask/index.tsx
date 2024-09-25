'use client'
import { useState } from "react"
import styled from "styled-components"

type NewTodoTaskProps = {
    addTodo: (newItem: string) => void;
}

const StyledNewTodoTask = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
        padding-bottom: 4px;
    }

    label {
        display:flex;
        gap: 4px;
        align-items: center;
    }

    input {
    outline: none;
    border: 1px solid hsl(248, 29%, 23%);
    background: hsl(200, 29%, 30%);
    border-radius: 4px;
    padding: 4px 8px;
    color: hsl(200, 29%, 90%);
    }

    button {
    background: hsl(200, 100%, 50%, 0.1);
    border: 1px solid hsl(340, 78%, 82%);
    color: hsl(340, 78%, 82%);
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:hover {
            background: hsl(340, 78%, 82%, 0.2);
    }
  }
`

const NewTodoTask = ({addTodo}:NewTodoTaskProps) => {
    const [newItem, setNewItem] = useState<string>('')

    const handleTask = (e: { preventDefault: () => void;}) => {
        e.preventDefault()
        if (newItem.trim() === "") return

        addTodo(newItem)

        setNewItem("")
    }

    return (
        <StyledNewTodoTask>
               <form onSubmit={handleTask}>
            <div>
                <label htmlFor="item">New item</label>
                <input 
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item">
                    </input>
            </div>
            <button>Add task</button>
        </form>
        </StyledNewTodoTask>
     
    )
}

export default NewTodoTask