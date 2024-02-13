import { Age } from './components/for_App'

const App = () => {
  return (
    <>
      <div>
        <h1>My Application</h1>
        <hr />
        <Age name="John" age={18} />
      </div>
    </>
  )
}

export const Age = ({ name, age }) => {
    return (
        <div>
            {typeof name == "string" ? <h2>Welcome, {name}!</h2> : <p>Insert a valid name</p>}
            {age && typeof age == "number" ? <p>{age}, It's valid age.</p> : <p>It's a invalid age.</p>}
            {age && typeof age == "number" ? <div>
                {age >= 18 && <p>You are an adult.</p>}
                {age >= 18 && age < 65 ? <p>You are not too old/young.</p> : ""}
                {age && <div>
                    {age >= 18 && age < 65 && name == "John" ? <p>Here you are John!</p> : ""}
                </div>}
            </div> : ""}

        </div>
    )
}

export default App