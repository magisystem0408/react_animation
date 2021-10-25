import './App.css';
import {useSpring, a} from "@react-spring/web";
import {useState} from "react";
import styled from "styled-components";

function App() {
    const [toggle, setToggle] = useState(false)

    const styles = useSpring({
        from: {
            width: "0%",
            backgroundColor: "#eee"
        },
        //asyncで次のアニメションを待ってから次のアニメーションへ移動することができる

        //書き方その1
        // to: async (next) => {
        //     if (toggle) {
        //         await next({
        //             width: "100%",
        //         })
        //         await next({
        //             backgroundColor: "skyblue"
        //         })
        //     } else {
        //         await next({
        //             backgroundColor: "#aaa"
        //         })
        //         await next({
        //             width: "0%"
        //         })
        //     }
        // }

        to:toggle?[
            {width:"100%"},
            {backgroundColor:"skyblue"}
        ]:[
            {backgroundColor:"#eee"},
            {width:"0%"},
        ]
    })

    return (
        <div className="App" style={{backgroundColor:"#f4f4f4"}}>
            <Container onClick={() => setToggle(!toggle)}>
                <Meter style={styles}/>
            </Container>

            {/*ドットの数値の一文字以下を削除する*/}
            <a.div style={{marginTop:20}}>{styles.width.to((w)=>{
                return w.replace(/\.(\d+)/,"")
            })}</a.div>
        </div>
    );
}

export default App;


const Container = styled(a.div)({
    width: 400,
    height: 70,
    backgroundColor: "#fff",
    borderRadius:20
})

const Meter = styled(a.div)({
    width: 400,
    height: 70,
    borderRadius:20
})