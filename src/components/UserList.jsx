import { Link } from "react-router-dom";

function UsersList({ users }) {
  // TODO: ricevi lista utenti come props
  return (
    <div>
      <h2>Lista Utenti</h2>
      <ul>
        {/* TODO: mappa sugli utenti e crea un <Link to={`/users/${id}`}> */}
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
