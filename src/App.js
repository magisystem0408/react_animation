import './App.css';
import {a, useTransition} from "@react-spring/web";
import {v4 as uuid} from "uuid";
import {useEffect, useMemo, useState} from "react";
import styled from "styled-components";

const App = () => {
    const [items, setItems] = useState([{
        id: "foo",
        message: "message"
    }])
    const transition = useTransition(items, {
        keys: (item => item.id),
        //初期値
        from: {
            marginTop: 0,
            opacity: 0,
            height: 0,
        },
        // itemが追加された時に実行されるアニメーション
        enter: {
            marginTop: 10,
            opacity: 1,
            height: messageHeight
        },
        //itemが削除された時に実行されるアニメーション
        leave: {
            marginTop: 0,
            opacity: 0,
            height: 0,
        },
    })
    return (
        <div className="App">
            {/*追加したい時はスプレット構文でやる*/}
            <Button onClick={() => {
                setItems([...items, {
                    id: uuid(),
                    message: "コピーしました。"
                }])
            }}> コピる
            </Button>

            <Button onClick={() => {
                setItems([...items, {
                    id: uuid(),
                    message: "コピーしました。"
                }])
            }}> 保存する
            </Button>
            <ToastContainer>
                {
                    transition((styles, item) => {
                        return <Toast styles={styles} item={item} onTimeout={() => {
                            setItems((current) => {
                                // 現在の値を取得
                                const clone = current.slice()
                                const index = clone.findIndex(it => it.id === item.id)
                                // 配列のindexを削除してあげる
                                clone.splice(index, 1)
                                return clone
                            })
                        }}/>
                    })
                }

            </ToastContainer>
        </div>
    );
}

export default App;

const Toast = ({styles, item, onTimeout}) => {
    useEffect(() => {
        //3secたつと消える
        const timeId = setTimeout(() => {
            onTimeout()
        }, 3000)
        //メモリオーバーしないように書く
        return () => {
            clearTimeout(timeId)
        }
    })

    const gradient = useMemo(() => {
        const gradients = [
            "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
            "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
            "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
            "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        ]
        // ランダムに選んでくれる
        return gradients[
            Math.floor(Math.random() * gradients.length)
            ]
    }, [])
    return (
        // styleを共存させるにはstyleをスプレットする
        <Message style={{
            backgroundImage:gradient,
            ...styles}}>
            <Title> マムシのお知らせ</Title>
            <MessageText>{item.message}</MessageText>
        </Message>
    )
}

// スタイルで左下に送る
const ToastContainer = styled(a.div)({
    position: "fixed",
    left: 16,
    bottom: 16,
})

const Button = styled("button")({
    width: 100,
    height: 46,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    borderRadius: 8,
    backgroundColor: "skyblue",
})

const messageHeight = 80

const Message = styled(a.div)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 1,
    width: 400,
    borderRadius: 10,
    backgroundColor: "skyblue",
})

const Title = styled("h1")({
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
})

const MessageText = styled("p")({
    marginTop: 8,
    color: "white",
    fontSize: 14,

})