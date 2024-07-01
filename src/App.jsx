import { Header } from "./components/Header";
import { Sidebar } from "./components/Siderbar";
import { Post } from "./components/Post";

import style from "./App.module.css";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts = [
  {
    id:1,
    author: {
      avatar_url: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    publishedAt: new Date("2024-06-30 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ]
  },
  {
    id:2,
    author: {
      avatar_url: "https://github.com/AlexandreQuintela.png",
      name: "Jane Smith",
      role: "Editor"
    },
    publishedAt: new Date("2024-06-20 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ]
  },
  {
    id:3,
    author: {
      avatar_url: "https://github.com/DouglasDavi.png",
      name: "Bob Johnson",
      role: "Contributor"
    },
    publishedAt: new Date("2024-06-10 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ]
  },  
];

 export function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
