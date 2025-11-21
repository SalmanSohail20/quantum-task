import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main-layout ">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
