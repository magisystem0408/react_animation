import './App.css';
import styled from "styled-components";
import {useState} from "react";
import {useSpring, a} from "@react-spring/web";
import useMeasure from "react-use-measure";
import {MinusSquare, PlusSquare} from "react-feather";

const App = () => {
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

    // コンポーネントの高さを動的に計測することができる
    const [ref, rect] = useMeasure()

    const [open, setOpen] = useState(false)
    const styles = useSpring({
        opacity: open ? 1 : 0,
        height: open ? rect.height : 0
    })
    return (
        <div>
            <div style={{display: "flex", alignItems: "center", cursor: "pointer"}}
                 onClick={() => setOpen(!open)}
            >
                {
                    open ? <MinusSquare
                        style={{
                            opacity: items.length === 0 ? 0.4 : 1
                        }}
                    /> : <PlusSquare
                        style={{
                            opacity: items.length === 0 ? 0.4 : 1
                        }}
                    />
                }
                <Name>{name}</Name>
            </div>
            <ItemContainer style={styles}>
                {/*高さが変わらない所をdivで囲い、純粋な高さを得る*/}
                <div ref={ref}>
                    {items.map((item) => (
                        <Tree name={item.name} items={item.items}/>)
                    )}
                </div>
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
    marginLeft: 6,
    fontSize: 18
})

const ItemContainer = styled(a.div)({
    paddingLeft: 30
})