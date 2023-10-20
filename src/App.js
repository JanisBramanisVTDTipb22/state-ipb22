import Counter from "./Counter";
import Hello from "./Hello.js";

function App() {
    const allNames = ["Jēkabs", "Markus", "Klucis"]
    return (
       <>
       <Counter />
       <Hello />
       <Hello />
       </>
    );
}

export default App;