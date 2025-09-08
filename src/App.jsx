import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MyContext } from "./Context/MyContext";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";

function App() {
  // TODO: stato per gli utenti
  // const [____, ____] = useState([]);

  // TODO: useEffect per fare fetch da "https://jsonplaceholder.typicode.com/users"

  return (
    <MyContext.Provider
      value={
        {
          /* TODO: inserisci utenti qui */
        }
      }
    >
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList /* TODO: props */ />} />
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
