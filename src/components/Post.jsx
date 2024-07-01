import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import  ptBr from "date-fns/locale/pt-BR";
import style from "./Post.module.css";


export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  });

  const publishedDateRelativeFormatted = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatar_url} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeFormatted}
        </time>
      </header>

      <div className={style.content}>
         {content?.map(line => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <span> {' '}
                <a href="#">{line.content}</a>
              </span>
            );
          }
        })}
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
