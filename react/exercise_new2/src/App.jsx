import { useAxios } from "./hook/useAxios";
import { Constants } from "../../exercise_new2/src/constants";
import Card from "./components/Card";
//title body user
const App = () => {
  const {
    data: fUrl,
    error: fUrlError,
  } = useAxios(Constants.API_POSTS);

  const {
    error: sUrlError,
  } = useAxios(Constants.API_USERS)

  if (fUrlError || sUrlError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div>
        {fUrl?.posts && fUrl.posts.length > 0 && fUrl.posts.map((post) => (
          <Card key={post.id} data={post} />
        ))}
      </div>
    </>
  );
};

export default App;
