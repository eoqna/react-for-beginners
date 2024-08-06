import { useEffect, useState } from "react";

/** useEffect
function App() {
  const [ counter, setCounter ] = useState(0);
  const [ keyword, setKeyword ] = useState("");

  const onClick = () => setCounter((prev) => prev+1);

  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once.");
  }, []);
  
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("i run when 'keyword' & 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input 
        value={keyword} 
        type="text" 
        placeholder="Search here..." 
        onChange={onChange} 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};
*/

function Hello() {
  useEffect(() => {
    console.log("created :)");

    return () => {
      console.log("destroyed :(");
    }
  }, []);

  return <h1>Hello</h1>;
};

function App() {
  const [ showing, setShowing ] = useState(false);

  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default App;
