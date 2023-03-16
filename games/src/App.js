import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import Details from "./components/Details";
import Login from "./components/Login";
import Register from "./components/Register";
import Create from "./components/Create";

function App() {
  const baseUrl = "http://localhost:3030";
  const [games, setGames] = useState([]);

  /*   useEffect = () => {
    fetch(`${baseUrl}\games`).then((res) => console.log(res.json()));
  }; */

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
