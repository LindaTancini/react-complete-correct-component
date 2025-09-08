import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

function UserDetails() {
  const { id } = useParams();
  const { users } = useContext(MyContext);

  // TODO: trova utente con id === Number(id)
  // const user = ...
  const user = users.find((e) => e.id === Number(id));

  return (
    <div>
      <h2>Dettagli Utente</h2>
      {/* TODO: mostra nome, email, ecc */}
      <p>Nome : {user.name}</p>
      <p>Email: {user.email} </p>
      <p>Telefono: {user.phone}</p>
    </div>
  );
}

export default UserDetails;
