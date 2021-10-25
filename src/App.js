import './App.css';
import {useSpring, animated, a} from "@react-spring/web";
import {useState} from "react";
import styled from "styled-components";

function App() {
    const styles = useSpring({
        from: {
            rotate: "0deg"
        },
        to: {
            rotate: "360deg"
        },
        loop:true,
        //一度アニメーションして逆回転もある
        // loop:{
        //     reverse:true
        // }

        // アニメーションの動きを変えられる
        //一定期間で回るアニメーションが作成される
        config:{
            duration:1000
        }
    })
    return (
        <div className="App"　style={{backgroundColor:"red"}}>
            <Loader style={styles}/>
        </div>
    );
}

export default App;


const Loader = styled(a.div)({
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "5px solid #fff ",
    borderTopColor: "transparent"
})