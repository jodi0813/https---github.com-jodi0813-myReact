import { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function App() {
    const [currentIndex, setcurrentIndex] = useState(0);
    const slides = [
        { url: "./images/cat01.jpg" },
        { url: "./images/cat02.jpg" },
        { url: "./images/cat03.jpg" },
    ]
    //當currentIndex值改變時，會再觸發一次
    useEffect(() => {
        //每隔一秒鐘
        const autoplay = setInterval(() => {
            //換下一張
            nextSlide();
        }, 3000);
        //清除utoplay
        return () => clearInterval(autoplay);
    }, [currentIndex]);

    //下一張
    const nextSlide = () => {
        //檢查是否在最後一張，如果是跳到0(第一張)，如果不是跳下一張
        setcurrentIndex((preIndex) => (preIndex === slides.length - 1 ? 0 : preIndex + 1))
    }
    //上一張
    const prevSlide = () => {
        //檢查是否在第一張，如果是跳到最後一張，如果不是跳前一張
        setcurrentIndex((preIndex) => (preIndex === 0 ? slides.length - 1 : preIndex - 1))
    }
    //按鈕控制
    const Arrow = ({ direction, onClick }) => {
        return(
            //擺放icon的區域
        <div style={{
            position: "absolute",
            top: "50%",
            cursor: "pointer",
            color: "white",
            [direction]: "20px",
        }}>{
                direction === "left" ? (
                    <FaChevronCircleLeft size={50} onClick={onClick} />) : (
                    <FaChevronCircleRight size={50} onClick={onClick} />)
            }
        </div>
        )
    }
    return (
        <>
            {/* 滿版最外層 */}
            <div className="wrapper" style={{
                maxWidth: "100vw",
                height: "100vw",
                margin: "auto",
            }}>
                {/* 滿版背景輪播區 */}
                <div style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    margin: "auto"
                }}>
                    {/* 文字區 */}
                    <h2 style={{ color: "red" }}>{slides[currentIndex].title}</h2>
                    {/* 上一張 */}
                    <Arrow direction="left" onClick={prevSlide} />
                    {/* 下一張 */}
                    <Arrow direction="right" onClick={nextSlide} />
                </div>
            </div>
        </>
    )
} export default App;