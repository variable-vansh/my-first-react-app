function List(props) {
    if (!props.animals) {
      return <div>Loading...</div>;
    }
  
    if (props.animals.length === 0) {
      return <div>No janwar in the areas!</div>;
    }
  
    return (
      <ul>
        {props.animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
  }
  
  function App() {
    const animals = [];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List />
      </div>
    );
  }
  
  
  

  export default App
  