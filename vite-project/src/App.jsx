// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import userData from "./data/userData";
import Profile from "./components/Profile/Profile/";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={{ followers: 5603, views: 4827, likes: 1308 }}
      />
    </div>
  );
}

export default App;
