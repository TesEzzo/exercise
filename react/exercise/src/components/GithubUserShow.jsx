import { useParams } from "react-router";
import useGithubUsersSWR from "./hook/useGithubUserSWR";


const GithubUserShow = () => {
  const { username } = useParams()
  const { data, error, loading, onFetchUser } = useGithubUsersSWR(username);

  const hundleClickUserData = () => {
    onFetchUser(username)
  }

  return (
    <>
      <div>
        <button onClick={hundleClickUserData}>Load user Data</button>
        {loading && <h1>Loading...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>{data.name}</h1>}
      </div>
    </>
  );
};

export default GithubUserShow;
