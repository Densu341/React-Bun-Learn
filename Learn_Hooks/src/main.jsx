import React from "react";
import { createRoot } from "react-dom/client";
import Todo from "./components/Todo";
import ToggleLamp from "./components/ToggleLamp";
import Counter from "./components/Counter";
// import GitHubProfile from "./components/GithubProfile";

import "./styles/style.css";

function App() {
  // const [username, setUsername] = React.useState("dicodingacademy");

  // const usernameChange = ({ target }) => setUsername(target.value);
  return (
    <>
      <h1>
        Latihan <code>useState()</code>
      </h1>
      <section>
        <h2>
          Kasus 1: <code>ToggleLamp</code> Component
        </h2>
        <p>Nyalakan lampu untuk melihat pesan.</p>
        <ToggleLamp />
      </section>
      <section>
        <h2>
          Kasus 2: <code>Todo</code> Component
        </h2>
        <Todo />
      </section>
      <section>
        <h2>
          Kasus 3: <code>Counter</code> Component
        </h2>
        <Counter />
      </section>
      {/* <section>
        <div>
          <input
            type="radio"
            name="username"
            value="dicodingacademy"
            checked={username === "dicodingacademy"}
            onChange={usernameChange}
          />{" "}
          dicodingacademy
          <input
            type="radio"
            name="username"
            value="densu341"
            checked={username === "densu341"}
            onChange={usernameChange}
          />{" "}
          densu341
        </div>

        <GitHubProfile username={username} />
      </section> */}
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
