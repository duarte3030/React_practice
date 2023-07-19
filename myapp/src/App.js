import './App.css';


const Person = () => {
  return (
    <>
      <h2>Name: John</h2>
      <h3>Last Name: Doe</h3>
      <h3>Age: 30</h3>
    </>
  )
}


const App = () => {
 
  return (
    <div className="App">
      <h1>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
      </h1>
    </div>
  );
}

export default App;
