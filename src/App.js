import './App.css';
import {useSpring, animated} from "@react-spring/web";
import {useState} from "react";
import styled from "styled-components";

function App() {
    const [flipped, setFlipped] = useState(false)
    // 変数によって切り替え
    const styles = useSpring({
        opacity: flipped ? 1 : 0,
        rotateY: flipped ? "180deg" : "0deg"
    })
    return (
        <div className="App"
             // 奥行きはperspective
             style={{
                 perspective:"500px"
             }}
             onClick={() => {
            setFlipped(!flipped)
        }}>
            <Card style={styles}/>
            {/*toでmap関数でtoで現在の値を受け取って処理をして返す　*/}
            {/*oはopacity*/}
            <BlueCard style={{
                opacity: styles.opacity.to(o => 1 - o),
                rotateY: styles.rotateY,

            }}/>
        </div>
    );
}

export default App;


const Card = styled(animated.div)({
    position: "absolute",
    width: 500,
    height: 300,
    backgroundColor: "pink",
    borderRadius:20,
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
})

const BlueCard = styled(animated.div)({
    position: "absolute",
    width: 500,
    height: 300,
    backgroundColor: "skyblue",
    borderRadius:20,
    backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)"
})