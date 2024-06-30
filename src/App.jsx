import { Header } from "./components/Header";
import { Sidebar } from "./components/Siderbar";
import { Post } from "./components/Post";

import style from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diogo Miranda"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem accusantium magnam aspernatur. Non nemo placeat repellendus libero dolor repudiandae tenetur laborum quae ex vero! Error ad quo ullam hic delectus?"
          />
            <Post
            author="Cindhy Miranda"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem accusantium magnam aspernatur. Non nemo placeat repellendus libero dolor repudiandae tenetur laborum quae ex vero! Error ad quo ullam hic delectus?"
          />
            <Post
            author="Maria"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem accusantium magnam aspernatur. Non nemo placeat repellendus libero dolor repudiandae tenetur laborum quae ex vero! Error ad quo ullam hic delectus?"
          />
        </main>
      </div>
    </>
  );
}
