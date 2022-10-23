import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'
import styles from './Comment.module.css'

function Comment(props) {
  return(
    <div className={styles.comment}>
      <Avatar  src="https://github.com/Wesley-Medeiros.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Wesley Medeiros</strong>
            <time title='22 de setembro às 08:13h' dateTime="2022-25-02 08:00:00">Cerca de 2h atrás</time>
            </div>

            <button title="Deletar comentário">
            <Trash size={24}/>
            </button>
            
            
          </header>

            <p>{props.content}</p>
        </div>
        <footer>
          <button>
          <ThumbsUp size={20}/>
          Aplaudir <span>20</span>
          </button>

        </footer>

      </div>
    </div>
  )
}

export default Comment