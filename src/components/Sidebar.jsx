import {PencilLine} from 'phosphor-react'
import Avatar from './Avatar'
import style from './Sidebar.module.css'

function Siderbar(){
return(
  <aside className={style.Siderbar}>
    <img className={style.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40"  />

    <div className={style.profile}>
      <Avatar src="https://github.com/Wesley-Medeiros.png" /> 
 
      <strong>Wesley Medeiros</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil</a>
    </footer>
  </aside>
)
  
}

export default Siderbar