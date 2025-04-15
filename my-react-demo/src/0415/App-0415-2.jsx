import { useState } from "react"
import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"

function App() {
    const arrPhotos = [p1, p2]; //把照片們放進陣列arrPhotos中
    const [currentImg, setCurrentImg] = useState(0);
    return (
        <>
            <div className="main">
                <div>
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img key={index} src={photo} alt="" width={100}
                                    onMouseOver={() => setCurrentImg(index)}
                                />)
                        }
                        )
                    }
                    {/* (photo=p1,index=0)=>{ img key=0 src=p1 width=100} 顯示圖1*/}
                    {/* (photo=p2,index=1)=>{ img key=1 src=p2 width=100} 顯示圖2*/}

                    {/* onMouseOver={setCurrentImg(index=0)} 當滑鼠觸碰到圖1*/}
                    {/* setCurrentImg(0)=> currentImg=0  就會得到arrPhotos[0]=圖1*/}


                    {/* onMouseOver={setCurrentImg(index=1} 當滑鼠觸碰到圖2*/}
                    {/* setCurrentImg(1)=> currentImg=1 就會得到arrPhotos[1]=圖2*/}

                </div>
                <div>
                    <img src={arrPhotos[currentImg]} alt="" width={300} />
                    {/* arrPhotos[currentImg=0]=>p1 */}
                    {/* arrPhotos[currentImg=1]=>p2 */}
                </div>
            </div>
        </>
    )
} export default App