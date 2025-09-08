import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function UserDetails() {
  const { id } = useParams();
  const { users } = useContext(MyContext);

  // TODO: trova utente con id === Number(id)
  // const user = ...

  return (
    <div>
      <h2>Dettagli Utente</h2>
      {/* TODO: mostra nome, email, ecc */}
    </div>
  );
}

export default UserDetails;
