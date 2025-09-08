import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MyContext } from "./Context/MyContext";
import UsersList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  // TODO: stato per gli utenti
  // const [____, ____] = useState([]);
  const [users, setUsers] = useState([]);

  // TODO: useEffect per fare fetch da "https://jsonplaceholder.typicode.com/users"
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Errore fetch:", err));
  }, []);

  return (
    <MyContext.Provider
      value={{
        users /* TODO: inserisci utenti qui */,
      }}
    >
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={<UsersList users={users} /* TODO: props */ />}
          />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

function Home() {
  return <h1>Benvenuto nella mini-app React 🚀</h1>;
}

export default App;
