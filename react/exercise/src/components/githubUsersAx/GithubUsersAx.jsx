import { useAxios } from "./hook/useAxios";
import { Constants } from "./constants";
import { useState } from "react";

const GithubUsers = () => {
  const [username, setUsername] = useState("");
  const {
    data: user,
    error: userError,
    refetch: refetchUser
  } = useAxios(Constants(username).API_URL);

  if (userError && username) {
    return (
      <>
        <p>{userError}</p>
      </>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(String(event.target[0].value))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="user"
          type="text"
          placeholder="Username Github"
        />
        <button type="submit">RUN!</button>
      </form>
      <div>
        {user && user.length > 0 && (
          <ul>
            <li>{user.login}</li>
            <li>{user.id}</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default GithubUsers;
