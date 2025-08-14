import { useState } from "react";
import { Link } from "react-router"
import Dashboard from "../dashboard/dashboard";
export default function NavBar() {
  const [isActive, setIsActive] = useState('dashboard')
  function handelActive(active){
    setIsActive(active)
  }
  return (
    <div
      className="
          fixed top-0 left-0 h-full bg-white  z-30
          transition-transform duration-300 ease-in-out
          -translate-x-full
          w-[280px] md:w-64 lg:w-72
          md:relative md:translate-x-0 md:z-auto
        "
    >
      <div className="hidden md:block md:col-span-1 py-10">
        <div className="px-8">
          <ul className="flex flex-col gap-2">
            <li
              className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                "dashboard" === isActive ? "bg-gray-100" : ""
              }`}
            >
              <Link to={"/"} onClick={() => handelActive("dashboard")}>
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                "transaction" === isActive ? "bg-gray-100" : ""
              }`}
            >
              <Link
                to={"transaction"}
                onClick={() => handelActive("transaction")}
              >
                <span>Transaction</span>
              </Link>
            </li>
            <li
              className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                "report" === isActive ? "bg-gray-100" : ""
              }`}
            >
              <Link to={"report"} onClick={() => handelActive("report")}>
                <span>Report</span>
              </Link>
            </li>
            <li
              className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                "setting" === isActive ? "bg-gray-100" : ""
              }`}
            >
              <Link to={"setting"} onClick={() => handelActive("setting")}>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}