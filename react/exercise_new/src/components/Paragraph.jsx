export const Paragraph = ({ data }) => {
  return (
    <>
      <div className="max-w-max rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="text-gray-700 text-base">
            {data.lines.map((line, i) => {
              return <p key={`div-${i}`}>{line}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
