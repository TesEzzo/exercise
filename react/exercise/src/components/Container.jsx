const Container = ({ title, children }) => {
  return (
    <div className="app">
      <div className="app-title">{title}</div>
      <div className="app-content">{children}</div>
    </div>
  );
};

export default Container;
