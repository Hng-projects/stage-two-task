import { Outlet } from "react-router-dom";
import { Nav } from "../components";
import style from "./layout.module.css";

function Layout() {
  return (
    <>
      <header className={style.header}>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default Layout;
