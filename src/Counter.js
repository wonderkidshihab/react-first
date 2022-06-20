import { useState } from "react";
import Button from "./button";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <h1>count</h1>
            <h1>{count}</h1>
            <Button title="Button 1" onClick={() => { setCount(count + 1) }} />
        </div>
    );
}


export default Counter;