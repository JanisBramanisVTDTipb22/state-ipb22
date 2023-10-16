import { useState } from "react";

function App() {
    const [result, setResult] = useState(0);
    const [result1, setResult1] = useState(0);
    const [result2, customRatio] = useState(0);

    function addRatio() {
        setResult(result + 1);        
    }

    function subtractRatio() {
        setResult1(result1 - 1);
    }

    function subtractRatio() {
        customRatio();
    }

    return (
        <div>
            <button onClick={addRatio}>GANG +1 ratio</button>
    <h1>{result}</h1>
            <button onClick={subtractRatio}>GANG -1 ratio</button>
    <h1>{result1}</h1>
            <button onClick={customRatio}>GANG custom ratio</button>
    <h1>{result2}</h1>
        </div>
    );
}

export default App;