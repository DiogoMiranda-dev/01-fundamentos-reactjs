import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import style from "./Post.module.css";

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src="https://github.com/DiogoMiranda-dev.png" />
          <div className={style.authorInfo}>
            <strong>Diogo Miranda</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="jane.design/doctorcare">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
      
    </article>
  );
}
