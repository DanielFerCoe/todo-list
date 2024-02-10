import styles from "./infosTasks.module.css"

interface InfosTasksProps {
  completedAmount: number
  createdAmount: number
}

export function InfosTasks({ completedAmount, createdAmount }: InfosTasksProps) {
  return (
    <header>
      <div className={styles.infosTask}>
        <span className={styles.createdTasks}>Tarefas criadas</span> 
        <span className={styles.counter}>{ createdAmount }</span>
      </div>
      <div className={styles.infosTask}>
        <span className={styles.completedTasks}>Concluídas</span> 
        <span className={styles.counter}>
          { `${completedAmount} de ${createdAmount}`}
        </span>
      </div>
    </header>
  )
}