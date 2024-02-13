import { useContext } from "react";
import { useEffect, useState } from "react";
import { LenguageContext } from "./LenguageContext";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const lenguage = useContext(LenguageContext)

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });
  return (
    <div>
      <p>{lenguage === "it" ? `Sono le: ${date.toLocaleTimeString()}` : `Current time: ${date.toLocaleTimeString("locale", {hour12: true })}`}</p>
    </div>
  );
};

export default Clock;
