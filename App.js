import React from "react";


import "./style.css";

import Profile from "./profile";

function App() {
  let data = {
    name: "MarwaBENSAAD",
    bio: "Computer Science",
    profession: "Developpeur",
  };


  const handleName = e => {
    e.preventDefault();
    alert(data.name);
  };
  const style = {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    border: "1px solid black",
    marginTop: "10px"
  };

  return (
    <div className="App">
      <img src="profil.jpg" onClick={handleName} style={style} />
      <br />
      <Profile data={data}>

      </Profile>
      <br />
    </div>
  );
}
export default App;





