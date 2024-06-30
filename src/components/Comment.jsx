import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Comment.module.css";

export function Comment() {
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diogo Miranda</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:00">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}