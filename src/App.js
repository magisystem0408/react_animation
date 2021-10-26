import './App.css';
import {a, useSpring, useTrail} from "@react-spring/web";
import styled from "styled-components";

const App = () => {
    const items = [
        "skyblue",
        "pink",
        "turquoise",
        "salmon"
    ]

    // useTrailの第一引数は長さを入れる
    const trail = useTrail(items.length, {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        loop:{reverse:true},
        delay:100,
    })
    return (
        <div className="App">
            <CardList>
                {
                    trail.map((styles, index) => (
                        <Card key={index} style={{
                            backgroundColor: items[index], ...styles
                        }}/>
                    ))
                }
            </CardList>
        </div>
    );
}

export default App;

const CardList = styled("div")({
    display: "grid",
    gridTemplateColumns: "300px 300px",
    gap:20,
})

const Card = styled(a.div)({
    width: 300,
    height: 200,
    borderRadius: 20,
    backgroundColor: "skyblue"
})