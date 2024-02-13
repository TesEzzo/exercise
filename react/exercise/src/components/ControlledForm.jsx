import { useState } from "react";

const ControlledForm = () => {
  console.log();
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleLogin = () => {
    localStorage.setItem("nick", data.username);
  };

  const handleLogout = () => {
    localStorage.removeItem("nick", data.username);
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <h1>My Controlled Form</h1>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="session"
          checked={data.session}
          onChange={handleInputChange}
        />
        <div>
          {localStorage.nick ? (
            <button onClick={handleLogout}>logout</button>
          ) : (
            <button disabled={!data.username || !data.password}>Login</button>
          )}
        </div>
      </form>
    </>
  );
};

export default ControlledForm;

//lo so questo sistema di login/logout fa schifo ma non ho capito bene cosa chiedeva l'esercizio e ho fatto quello che ho potuto con quello che chiedeva
