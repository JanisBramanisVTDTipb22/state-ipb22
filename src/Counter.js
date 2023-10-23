import { useState } from "react";

function Counter() {
    const [result, setResult] = useState(0);
    const [ratioChange, setRatioChange] = useState(1);

    function addRatio() {
        setResult(result + parseInt (ratioChange));        
    }

    function subtractRatio() {
        setResult(result - parseInt (ratioChange));
    }

    function handleRatioChange(kaķens) {
        setRatioChange(kaķens.target.value)
    }
    
    return (
        <div className="App">
          <input
            type="number"
            value={ratioChange}
            onChange={handleRatioChange}
          ></input>
          <button onClick={addRatio}>GANG +{ratioChange} ratio</button>
          <button onClick={subtractRatio}>GANG -{ratioChange} ratio</button>
          <h1>{result}</h1>
        </div>
      );
    }

export default Counter;