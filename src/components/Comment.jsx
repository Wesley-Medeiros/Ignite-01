import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import Avatar from './Avatar'
import styles from './Comment.module.css'

function Comment({content, onDeleteComment}) {
  const [likedCount, setLikedCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikedCount(likedCount + 1)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder= {false}  src="https://github.com/Wesley-Medeiros.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Wesley Medeiros</strong>
            <time title='22 de setembro às 08:13h' dateTime="2022-25-02 08:00:00">Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24}/>
            </button>
            
            
          </header>

            <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
          <ThumbsUp size={20}/>
          Aplaudir <span>{likedCount}</span>
          </button>

        </footer>

      </div>
    </div>
  )
}

export default Comment