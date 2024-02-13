const Event = () => {
  const handleClick = () => {
    console.log(event.target);
  };
  return (
    <>
      <button onClick={handleClick}>
        <img
          width={24}
          height={24}
          src="https://www.creativefabrica.com/wp-content/uploads/2021/07/12/Like-icon-Graphics-14628087-1-580x386.jpg"
          alt="like"
        />
        Like!
      </button>
    </>
  );
};

export default Event;
