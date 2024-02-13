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
import GithubUsers from "./components/githubUsers/GithubUsers";

const App = () => {
  const [lenguage, setLenguage] = useState("en")

  const handleSetLanguage = (lenguage) => {
    setLenguage(lenguage)
  }

  return (
    <>
      <div className="welcome">
        <h1>My Application</h1>
        <Age name="John" age={18} /> {/* Conditional Rendering */}
      </div>
      <hr />
      <AlertClock /> {/* Events */}
      <hr />
      <Counter /> {/* UseState */}
      <hr />
      <Clock /> {/* UseEffect */}
      <hr />
      <Event /> {/* Handling Events */}
      <hr />
      <ControlledForm /> {/* ControlledForm */}
      <hr />
      <UncontrolledForm /> {/* UncontrolledForm */}
      <hr />
      <CounterRefs /> {/* Refs (da completare) */}
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
        <p>Hi i'm de child</p>
      </Container>
      <hr />
      <div>
        <button onClick={() => handleSetLanguage("it") }>IT</button>
        <button onClick={() => handleSetLanguage("en") }>EN</button>
      <LenguageContext.Provider value={lenguage}>
        <Clock />
      </LenguageContext.Provider>
      </div>
      <hr />
      <GithubUsers />
    </>
  );
};

export default App;
