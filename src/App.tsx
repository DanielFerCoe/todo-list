import { useState } from "react"
import { ClipboardList } from "lucide-react"

import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"

import styles from "./app.module.css"
import { TaskComponent } from "./components/Task"
import { InfosTasks } from "./components/InfosTasks"

export interface Task {
  id: string;
  description: string
  isChecked: boolean
  createdAt: Date
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddNewTask(task: string) {
    if(!task){
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      description: task,
      isChecked: false,
      createdAt: new Date()
    }

    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId)

    setTasks(tasksWithoutDeletedOne)
  }

  function handleToggleTask(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if(task.id === taskId) {
        task.isChecked = !task.isChecked
      }

      return task
    })

    setTasks(updatedTasks)
  }

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked === true){
        return prevValue + 1
    }

    return prevValue
  }, 0)

  return (
    <div className="app">
      <Header />
      <main className={styles.wrapper}>
        <NewTask onAddNewTask={handleAddNewTask}/>

        <section className={styles.tasksContainer}>
          <InfosTasks 
            createdAmount={tasks.length}
            completedAmount={checkedTasksCounter}
          />

          <div className={styles.tasks}>
            {
              tasks.length > 0 
              ? (
                tasks.map(task => (
                  <TaskComponent 
                    key={task.id} 
                    task={task}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                  />
                ))
              )
              : (
                <div className={styles.emptyTasks}>
                  <ClipboardList size={56}/>

                  <div className={styles.infoContainer}>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus items a fazer</p>
                  </div>
                </div>
              )
            }

          </div>
        </section>
      </main>

    </div>
  )
}

export default App
