import { Constant } from "./Constants";
import { useAxios } from "./hook/useAxios";

const App = () => {
  const {
    data: comments,
    error: commentsError,
    refetch: refetchComments,
  } = useAxios(Constant.API_URL);

  if (commentsError) {
    return (
      <p>{commentsError}</p>
    )
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>PostId</th>
            <th>Name</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments &&
            comments.length > 0 &&
            comments.map((item) => (
              <tr key={item.id}>
                <td>{item.postId}</td>
                <td>{item.name}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
