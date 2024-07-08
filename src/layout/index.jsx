import { Outlet } from "react-router-dom";
import { Header } from "../components";
import style from "./layout.module.css";

function Layout() {
  return (
    <>
      <header className={style.header}>
        <Header />
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default Layout;
