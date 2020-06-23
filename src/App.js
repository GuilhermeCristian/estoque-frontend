import React, { useState, useEffect, useRef } from "react";
import Routes from "./routes";
import api from "./services/api";

function App() {
  const [state, setState] = useState("loading");
  const [user, setUser] = useState("user");
  const isLoggedIn = useRef(false);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/perfil", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        isLoggedIn.current = true;
        setUser(response.data);
      } catch (err) {
        console.log(err.response);
      }

      setState("ready");
    }

    getUserData();
  }, []);

  if (state === "loading") return <div>Carregando...</div>;

  return (
    <div className="App">
      <Routes isLoggedIn={isLoggedIn.current} user={user} />
    </div>
  );
}

export default App;
