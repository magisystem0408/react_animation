import './App.css';
import styled from "styled-components";
import {useState} from "react";
import {useSpring, a} from "@react-spring/web";

function App() {
    return (
        <div className="App" style={{textAlign: "left"}}>
            {
                items.map((item) => {
                        return <Tree name={item.name} items={item.items}/>
                    }
                )
            }
        </div>
    );
}

export default App;

// 再起的に呼び出す
const Tree = ({name, items}) => {
    const [open, setOpen] = useState(false)
    const styles = useSpring({
        opacity: open ? 1 : 0
    })
    return (
        <div>
            <Name onClick={() => setOpen(!open)}>{name}</Name>
            <ItemContainer style={styles}>
                {items.map((item) => (
                    <Tree name={item.name} items={item.items}/>)
                )}
            </ItemContainer>
        </div>
    )
}


const items = [
    {
        name: "動物",
        items: [
            {
                name: "猫",
                items: [{
                    name: "メインクーン",
                    items: []
                }]
            },
            {
                name: "犬",
                items: []
            },
            {
                name: "うさぎ",
                items: []
            }
        ]
    }
]
const Name = styled(a.div)({
    fontSize: 18
})

const ItemContainer = styled(a.div)({
    paddingLeft: 30
})