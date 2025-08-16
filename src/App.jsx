import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./app/Layout/Layout";
import Dashboard from './app/dashboard/dashboard';
import Transaction from './app/transaction/Transaction';
import Setting from './app/setting/setting';
import Report from './app/report/report';
import NotFoundPage from "./app/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "transaction", element: <Transaction /> },
      { path: "report", element: <Report /> },
      { path: "setting", element: <Setting /> },
      { path: "*", element: <NotFoundPage /> },
      ],
  },
]);

export default function App() {

  return (
    <div className="min-h-screen w-[98%] mx-auto py-4">
      <RouterProvider router={router} />
    </div>
  ); 
}