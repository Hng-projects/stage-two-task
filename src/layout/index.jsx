import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
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
      <footer className={style.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
