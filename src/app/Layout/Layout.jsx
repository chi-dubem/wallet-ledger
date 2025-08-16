import { Outlet } from "react-router";
import Header from "../header/Header";
import NavBar from "../nav/navBar";

// export default function Layout() {
//   return (
//     <main className="flex flex-row">
//       <Header />
//       <div className="flex flex-row">
//         <NavBar />
//         <Outlet />
//       </div>
//     </main>
//   );
// }

export default function Layout() {
  return (
    <main className="flex flex-row items-start">
      <div className="w-[20%]">
        <Header />
        <NavBar />
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </main>
  );
}
