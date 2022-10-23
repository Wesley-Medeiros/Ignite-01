import styles from './avatar.module.css'

function Avatar (props){


return(
  <img className={styles.Avatar} src={props.src}  />

) 

};
export default Avatar