import Header from './components/Header';
import  Post  from "./components/Post";
import Siderbar from './components/Sidebar';

import styles from './App.module.css';


import "./global.css"

const posts = [
  {
    id:1,
    author: {
      avatarUrl:"https://github.com/Wesley-Medeiros.png",
      name:"Wesley Medeiros Ramalho",
      role:"Front-end Developer",
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉',},
      {type: 'link', content:' jane.design/doctorcare',}

      
    ],
    publishedAt: new Date('2022-05-02 20:00:00'),
  },

  {
    id:2,
    author: {
      avatarUrl:"https://github.com/Wesley-Medeiros.png",
      name:"Wesley Medeiros Ramalho",
      role:"Front-end Developer",
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉',},
      {type: 'link', content:' jane.design/doctorcare',}

      
    ],
    publishedAt: new Date('2022-06-02 20:00:00'),
  },
]

 function App() {
  

  return (
   <div>

     <Header />

     <div className={styles.wrapper}>
       <Siderbar/>
       <main>
         
         {posts.map(post => {
           return( 
           <Post
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
             key={post.id}
           
           />)

         })}
         
       </main>
     </div>
     </div>
  )
}

export default App

