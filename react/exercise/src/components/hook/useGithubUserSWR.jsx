import useSWR from "swr";

const fetcher = async (url) => {
  try {
    return (await fetch(url)).json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const useGithubUsersSWR = (username) => {
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);
  
    const fetchGithubUser = () => {
        mutate()
    }

    if (username !== null) {
      return {
        users: data,
        error,
        loading: !data && !error,
        onFetchUser: fetchGithubUser,
      };
    }
  };

export default useGithubUsersSWR