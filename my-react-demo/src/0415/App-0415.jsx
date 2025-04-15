import { useState } from "react";

    

function MyComponent() {
    const [count, setCount] = useState(0);  // const[變數,set變數]=useState(0); useState是方法會自動產生第一行

    const handleClick = () => {
        setCount(count + 1);  //不能寫++
    }
    return (
        <>
            <button onClick={handleClick}>點擊次數:{count}</button>
        </>
    )
}

function App() {
    return (
        <>
            <MyComponent />
        </>
    )
}
export default App