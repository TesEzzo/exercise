import { useAxios } from "./hook/useAxios";
import { Constants } from "./constants";
import { Paragraph } from "./components/Paragraph";

const App = () => {
  const [lines, setLines] = useState(14);

  const {
    data: url,
    error: urlError,
    refetch: refetchUrl,
  } = useAxios(Constants(lines).API_URL);

  const handleChangeLine = (event) => {
    setLines(Number(event.currentTarget.value));
  };

  if (urlError) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div>
        <select onChange={handleChangeLine} defaultValue={14}>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
        </select>
        {url &&
          url.length > 0 &&
          url.map((line, i) => <Paragraph key={i} data={line} />)}
      </div>
    </>
  );
};

export default App;
