import { Link, Outlet } from "react-router-dom";
import useGithubUsersListSWR from "./hook/useGithubUsersListSWR";


const GithubUsersListShow = () => {
  const { users, error, isLoading, onRefresh } = useGithubUsersListSWR();

  return (
    <>
      <div>
        <button onClick={onRefresh}>Refresh</button>
        {isLoading && !error && <h3>Loading...</h3>}
        {error && <h3>An error has occured</h3>}
        {users && !error && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.login}<Link to={`/users/${user.login}`}><button>Show the user</button></Link></li>
            ))}
          </ul>
        )}

        <Outlet />
      </div>
    </>
  );
};

export default GithubUsersListShow;
