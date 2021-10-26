import './App.css';
import {a, useSpring} from "@react-spring/web";
import {useEffect} from "react";
import styled from "styled-components";

const App = () => {
    const [styles, api] = useSpring(() => {
        // 初期値を書く
        return {
            x: 0,
            y: 0,
            rotate: 0
        }
    })
    useEffect(() => {
        let unmounted = false;
        (async () => {
            while (true) {
                if (unmounted){
                    break
                }
                await Promise.all(
                    api.start({
                        x: Math.random() * 600 - 300,
                        y: Math.random() * 600 - 300,
                        rotate: Math.random() * 360,
                    })
                )
            }
        })()

        // クリーンアップ関数
        return () => {
            unmounted = true
        }
    }, [])
    return (
        <div className="App">
            <Square style={styles}/>
        </div>
    );
}

export default App;

const Square = styled(a.div)({
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "skyblue"
})