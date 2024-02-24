import { useEffect, useState } from "react";

const GithubUsers = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (username.length > 0) {
          setLoading(true);
          const responce = await fetch(
            `https://api.github.com/users/${username}`
          );
          const data = await responce.json();
          if (typeof data === "object") {
            setUser(data);
          } else if (!responce.ok) {
            throw new Error("404: dato non trovato");
          } else {
            throw new Error("O-01: il dato non è un oggetto");
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();

  }, [username]);

  return (
    <div>
    {user && (
      <>
        <img src={user.avatar_url} />
        <div>{user.login}</div>
        <div>{user.name}</div>
      </>
    )}
    {error && <div>{error.message}</div>}
    {loading && <div>Loading...</div>}
  </div>
  );
};

export default GithubUsers;
