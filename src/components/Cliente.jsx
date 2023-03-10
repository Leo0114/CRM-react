import { Form, useNavigate, redirect } from "react-router-dom";
import { destroyCliente } from "../api/clientes";

export async function action({ params }) {
  await destroyCliente(params.clienteId);
  return redirect("/CRM-react");
}

const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;
  const navigate = useNavigate();

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className=" p-6">
        <p className=" text-gray-600">
          <span className=" text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className=" text-gray-600">
          <span className=" text-gray-800 uppercase font-bold">Telefono: </span>
          {telefono}
        </p>
      </td>
      <td className="p-6 flex space-x-3 ">
        <button
          type="button"
          className=" text-blue-600 hover:text-blue-800 uppercase font-bold text-xs"
          onClick={() => navigate(`/CRM-react/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/CRM-react/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("Deseas eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className=" text-red-600 hover:text-red-800 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;
