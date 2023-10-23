import Counter from "./Counter";
import Hello from "./Hello.js";

function App() {
    const allNames = ["Jēkabs", "Markus", "Klucis"]

    const helloJSX = allNames.map((name, index) => {
        return <Hello key={index} name={name} />;
    })

    return (
       <>
       <Counter />
       {helloJSX}
       </>
    );
}

export default App;