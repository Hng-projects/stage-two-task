import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <p>nav</p>
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
