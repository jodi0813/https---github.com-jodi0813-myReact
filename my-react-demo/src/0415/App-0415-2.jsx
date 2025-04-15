import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"



function App() {
    return (
        <>
            <div className="main">
                <div>
                    <img src={p1} alt="" width={100} />
                    <img src={p2} alt="" width={100} />
                </div>
                <div>
                    <img src="" alt="" width={500}/>
                </div>
            </div>
        </>
    )
} export default App