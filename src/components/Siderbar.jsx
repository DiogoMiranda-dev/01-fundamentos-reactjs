import { Avatar } from "./Avatar";
import { PencilLine } from "phosphor-react";
import style from "./Siderbar.module.css";

export function Sidebar() {
  return (
    <aside className={style.siderbar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={style.profile}>
        <Avatar  src="https://github.com/DiogoMiranda-dev.png" />
        <strong>Diogo Miranda</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
