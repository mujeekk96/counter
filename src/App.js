import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
   setCount(count + 1);
    console.log(count);
  };
  let obj={
    title:'1st Counter',
    
  }
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      <Counter {...obj}/>
     <Counter title ='2nd counter'  count={count}/>
   
    </div>
  );
}

export default App;
