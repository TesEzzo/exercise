import { Constant } from "./constants"
import useAxios from "./hooks/useAxios"

const App = () => {
  const {
    data,
    error,
  } = useAxios(Constant.API_URL)

  if (error) {
    return(
      <p>{error}</p>
    )
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Body</th>
            <th>Post ID</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.comments && data.comments.length > 0 && data.comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.body}</td>
                <td>{comment.postId}</td>
                <td>{comment.user.username}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App