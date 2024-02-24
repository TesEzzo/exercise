import useSWR from "swr";

const fetcher = async (url) => {
  try {
    return (await fetch(url)).json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const useGithubUsersSWR = () => {
    const { data, error, mutate } = useSWR(`https://api.github.com/users`, fetcher);
  
    const handleRefreshUsers = () => {
        mutate()
    }

    return {
      users: data,
      error,
      isLoading: !data && !error,
      onRefresh: handleRefreshUsers,
    };
  };

export default useGithubUsersSWR