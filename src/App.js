import './App.css';
import {a, useTransition} from "@react-spring/web";
import {v4 as uuid} from "uuid";
import {useState} from "react";

const App = () => {
    const [items, setItems] = useState([{
        id:"foo",
        message:"message"
    }])
    const transition = useTransition(items, {
        keys:(item => item.id),
        //初期値
        from: {
            opacity: 0
        },
        // itemが追加された時に実行されるアニメーション
        enter: {
            opacity: 1
        },
        //itemが削除された時に実行されるアニメーション
        leave: {
            opacity: 0
        },
    })
    return (
        <div className="App">
            {/*追加したい時はスプレット構文でやる*/}
            <button onClick={()=>{setItems([...items,{
                id:uuid(),
                message:"foo"
            }])}}> show</button>
            {
                transition((styles,item) => {
                    return <a.div style={styles}>{item.message}</a.div>
                })
            }
        </div>
    );
}

export default App;
