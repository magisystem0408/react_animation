import './App.css';
import {a, useTrail} from "@react-spring/web";
import styled from "styled-components";
import {useMove} from "react-use-gesture";

const App = () => {
    const items = [
        "skyblue",
        "pink",
        "turquoise",
        "salmon"
    ]
    const [trail, api] = useTrail(items.length, () => {
        return {
            x: 0,
            y: 0
        }
    })

    // 移動系の情報を取得してこれる
    const bind = useMove(state => {
        const [x, y] = state.xy
        api.start({
            x: x -circleSize/2,
            y: y - circleSize/2,
        })
        console.log(state.xy)
    })


    return (
        <div className="App" {...bind()}>
            {trail.map((styles,index) => (
                <Circle style={{backgroundColor:items[index],...styles}}/>
            ))}
        </div>
    );
}

export default App;

const circleSize = 100

const Circle = styled(a.div)({
    position: "absolute",
    width: circleSize,
    height: circleSize,
    borderRadius: "50%",
    backgroundColor: "skyblue"
})