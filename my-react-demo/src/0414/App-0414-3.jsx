function MyComponent(props) {
    return <div>我是子元件{props.a}</div>
}

function App() {
    return (
        <>
            <MyComponent  a="我是屬性a"/>
        </>
    )
}
export default App