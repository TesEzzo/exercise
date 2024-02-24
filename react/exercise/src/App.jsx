import Counter from "./components/Counter";
import AlertClock from "./components/AlertClock";
import ControlledForm from "./components/ControlledForm";
import Clock from "./components/Clock";
import Event from "./components/Event";
import Age from "./components/Age";
import UncontrolledForm from "./components/UncontrolledForms";
import CounterRefs from "./components/CounterRefs";
import Colors from "./components/Colors";
import { TodoList } from "./components/TodoList";
import Container from "./components/Container";
import { LenguageContext } from "./components/LenguageContext";
import { useState } from "react";
import useCurrentLocation from "./components/hook/useCurrentLocation";
import { Link, Route, Routes } from "react-router-dom";
import GithubUsersListshow from "./components/GithubUsersListshow";
import GithubUserShow from "./components/GithubUserShow";
import GithubUsers from "./components/GithubUsers"

const App = () => {
  const [lenguage, setLenguage] = useState("en");
  const [user, setUser] = useState("");
  const [geo, setGeo] = useState();
  const location = useCurrentLocation();


    
  const handleSubmitUser = (e) => {
      e.preventDefault();
      setUser(String(e.target[0].value));    };

  const handleSetLanguage = (lenguage) => {
    setLenguage(lenguage);
  };



  const handleClickGeo = () => {
    setGeo(location);
  };

  return (
    <>
      <div className="welcome">
        <h1>My Application</h1>
        <Age name="John" age={18} /> {/* Conditional Rendering */}
      </div>
      <hr />
      <AlertClock /> {/* Events */}  
      <hr />
      <ControlledForm /> {/* ControlledForm */}
      <hr />
      <UncontrolledForm /> {/* UncontrolledForm */}
      <hr />
      <CounterRefs /> {/* Refs */}
      <hr />
      <Colors
        items={[
          { id: 1, color: "red" },
          { id: 2, color: "yellow" },
          { id: 3, color: "green" },
          { id: 4, color: "blue" },
        ]}
      /> {/* Lists */}
      <hr />
      <TodoList /> {/* List and State */}
      <hr />
      <Container title="I'm the title"> {/* Composition and Children */}
        <p>Hi i'm the child</p>
      </Container>
      <hr />
      <div>
        <button onClick={() => handleSetLanguage("it")}>IT</button>
        <button onClick={() => handleSetLanguage("en")}>EN</button>
        <LenguageContext.Provider value={lenguage}> {/* Context */}
          <Clock />
        </LenguageContext.Provider>
      </div>
      <hr /> 
      <form onSubmit={handleSubmitUser}> 
        <input type="text" placeholder="UsernameGit" />
        <button type="submit">GO!</button>
      </form>
        <GithubUsers username={user}/> {/* Data fetching with useEffect */}
      <hr />
      <div> {/* Custom Hooks */}
        <button onClick={handleClickGeo}>I'll find you</button>
        {geo ? JSON.stringify(geo) : "Location data not available yet."}
      </div>
      <hr />
      <Routes>
        <Route path="/counter" element={<Counter />} /> {/* UseState */}
        <Route path="/clock" element={<Clock /> } /> {/* UseEffect */}
        <Route path="/event" element={<Event />} /> {/* Handling Events */}
        <Route path="/users" element={<GithubUsersListshow />} >
            <Route path=":username" element={<GithubUserShow />}></Route>
        </Route>
      </Routes>
      <div>
      <Link to="/counter" >Counter</Link> | <Link to="/clock" >Clock</Link> | <Link to="/event" >Event</Link> | <Link to="/users" >Users</Link>
      </div>
      <hr />

    </>
  );
};

export default App;