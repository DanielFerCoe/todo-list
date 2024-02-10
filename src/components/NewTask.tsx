import { ChangeEvent, FormEvent, useState } from "react"
import { PlusCircle } from "lucide-react"

import styles from "./newTask.module.css"

interface NewTaskProps {
  onAddNewTask: (task: string) => void
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [task, setTask] = useState('')

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>){
    setTask(event.target.value)
  }

  function handleAddNewTask(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    onAddNewTask(task)

    setTask("")
  }

  return (
    <form 
      className={styles.newTask}
      onSubmit={handleAddNewTask}
    >
      <input 
        type="text" 
        name="task" 
        value={task}
        onChange={handleChangeTask}
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit">
        Criar <PlusCircle size={20}/>
      </button>
    </form>
  )
}