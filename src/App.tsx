// import Post from './Post';
import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


const posts:PostType[]  = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/BePenques.png',
      name: 'Betiza Barreira',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},    
          // <a href="#">#novoprojeto </a>{' '}
          // <a href="http://">#nlw</a>{' '} 
          // <a href="http://">#rocketseat</a>{' '}     
    ],
    publishedAt: new Date('2024-05-20 13:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/BePenques.png',
      name: 'Betiza Penques',
      role: 'Fullstack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2024-05-10 13:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

// export default App



