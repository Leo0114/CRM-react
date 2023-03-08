import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevloCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevloCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction,
} from "./pages/EditarCliente";
import { action as eliminarClienteAction } from "./components/Cliente";

const router = createBrowserRouter([
  {
    path: "/CRM-react",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/CRM-react/clientes/nuevo",
        element: <NuevloCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/CRM-react/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/CRM-react/clientes/:clienteId/eliminar",
        action: eliminarClienteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);