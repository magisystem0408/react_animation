import './App.css';
import {useSpring, animated} from "@react-spring/web";
import {useState} from "react";

function App() {
    const [toggle, setToggle] = useState(false)
    変数によって切り替え
    const styles = useSpring({
        opacity: toggle ? 1 : 0
    })
    return (
        <div className="App">
            <animated.h1 style={styles}>Hello codesandbox</animated.h1>
            <button onClick={()=>setToggle(!toggle)}>クリックするとアニメーション</button>
        </div>
    );
}

export default App;
