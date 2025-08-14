import { Outlet } from "react-router";
import Header from "../header/Header";
import NavBar from "../nav/navBar";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-3">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
