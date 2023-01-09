
import { useState } from 'react';
import './App.css';

function App() {
  const [checked,setChecked] = useState(false);
  return (
    <div className="App">
      <button disabled={checked?true:false} > button</button>
      <input type="checkbox" checked={checked} onChange={()=>setChecked((prev) => !prev)}></input>
    </div>
  );
}

export default App;
