import { Check, Trash2 } from "lucide-react"

import { Task } from "../App"

import styles from "./task.module.css"

interface TaskProps {
  task: Task
  onToggleTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export function TaskComponent({ task, onToggleTask, onDeleteTask }: TaskProps) {
  function handleToggleTask(){
    onToggleTask(task.id)
  }

  function handleDeleteTask(){
    onDeleteTask(task.id)
  }

  const styleCheckBox = task.isChecked ? styles.checked : styles.unchecked

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <label 
          htmlFor="checkbox" 
          onClick={handleToggleTask}
        >
          <input type="checkbox"/>
          <span className={`${styles.checkbox} ${styleCheckBox}`}>
            {task.isChecked && <Check size={14}/>}
          </span>
        </label>

        <p className={styleCheckBox}>
          { task.description }
        </p>
       
      </div>

      <button 
        onClick={handleDeleteTask}
        title="Deletar tarefa"
      >
        <Trash2 size={18}/>
      </button>
    </div>
  )
}
