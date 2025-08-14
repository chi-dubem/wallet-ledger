import { Link } from "react-router";
import { useState } from "react";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("dashboard");
    function handelActive(active) {
      setIsActive(active);
    }
    return (
      <div className="flex flex-row items-center gap-6">
        <div className="mr-7 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <img src="src\images\logo.svg" />

        <div>
            <div
                className={`block md:hidden fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div
                className="flex justify-end py-4 px-2"
                onClick={() => setIsOpen(false)}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-8 cursor-pointer"
                >
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                </svg>
                </div>

                <nav className="p-4">
                    <ul className="space-y-4">
                        <li
                        className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                            "dashboard" === isActive ? "bg-gray-100" : ""
                        }`}
                        >
                        <Link
                            to="/"
                            className="block text-gray-700 hover:text-blue-500"
                            onClick={() => handelActive("dashboard")}
                        >
                            Dashboard
                        </Link>
                        </li>
                        <li
                        className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                            "transaction" === isActive ? "bg-gray-100" : ""
                        }`}
                        >
                        <Link
                            to="transaction"
                            className="block text-gray-700 hover:text-blue-500"
                            onClick={() => handelActive("transaction")}
                        >
                            Transaction
                        </Link>
                        </li>
                        <li
                        className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                            "report" === isActive ? "bg-gray-100" : ""
                        }`}
                        >
                        <Link
                            to="report"
                            className="block text-gray-700 hover:text-blue-500"
                            onClick={() => handelActive("report")}
                        >
                            Report
                        </Link>
                        </li>
                        <li
                        className={`p-2 rounded-full hover:bg-gray-100 text-sky-900 ${
                            "settings" === isActive ? "bg-gray-100" : ""
                        }`}
                        >
                        <Link
                            to="settings"
                            className="block text-gray-700 hover:text-blue-500"
                            onClick={() => handelActive("settings")}
                        >
                            Settings
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </div>
    );
}