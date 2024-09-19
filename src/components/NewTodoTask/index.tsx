'use client'
import { useState } from "react"

type NewTodoTaskProps = {
    addTodo: (newItem: string) => void;
}

const NewTodoTask = ({addTodo}:NewTodoTaskProps) => {
    const [newItem, setNewItem] = useState<string>('')

    const handleTask = (e: { preventDefault: () => void;}) => {
        e.preventDefault()
        if (newItem.trim() === "") return

        addTodo(newItem)

        setNewItem("")
    }

    return (
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
    )
}

export default NewTodoTask