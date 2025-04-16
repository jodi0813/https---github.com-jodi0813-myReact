import { useEffect } from "react";
import { useState } from "react";

function App() {
    // 使用useState建立變數
    const [citys, setCitys] = useState([]);
    // 渲染後，使useEffect先取得天氣資料
    useEffect(() => {
        (async () => {
            const data = await axios.get('./api/F-C0032-001.json');
            // 解構各縣市的氣象資訊
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

            setCitys(location);
        })();
    }, [])

    return (
        <>
            <h2>36小時天氣預報</h2>
            {/* 一列兩欄(CSS框架boostrap大概看就好) */}
            <div className="row row-cols-2 g-4">
                {/* 使用迴圈，顯示所有縣市 */}
                {
                    citys.map((city) => {
                        return (
                            <div className="col" key={city.locationName}>
                                {/* 卡片樣式 */}
                                <div className="card text-center">
                                    {/* 卡片標題 */}
                                    <div className="card-header">
                                        <div className="h4 my-0">
                                            {city.locationName}
                                        </div>
                                    </div>
                                    {/* 身：卡片內容 */}
                                    <div className="row row-cols-3">
                                        {/*顯示每個縣市的3個欄位資訊*/}
                                        {
                                            city.weatherElement[0].time.map((item, index) => {
                                                return (

                                                    < div className="col" key={index} >
                                                        <div className="h4 my-0">
                                                            {/* 16日 */}
                                                            {/* 使用日期時間函數toLocalStrimg() */}
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined, {
                                                                    day: 'numeric'
                                                                })
                                                            }
                                                        </div>
                                                        {/* 時間 */}
                                                        {/* 上午6:00 < br />
                                                        ~<br />
                                                        下午6:00 < br /> */}
                                                        {
                                                            new Date(item.startTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                        <br />~ <br />
                                                        {
                                                            new Date(item.endTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                        <br />
                                                        {/* 天氣圖：使用執行路徑，所以要放在public資料夾中才讀的到 */}
                                                        {/* 圖片太多的話可以直接放在public裡就不用impot，放在src裡就需要 */}
                                                        {/* <img src="./weatherIcon/晴時多雲.svg" alt="" /> */}
                                                        <img src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                                                        {/* 天氣名稱 */}
                                                        <div className="mt-2">
                                                            {/* 晴時多雲 */}
                                                            {item.parameter.parameterName}
                                                        </div>
                                                        {/* 降雨率 */}
                                                        <div className="mt-2">
                                                            {/* icon降雨機率 */}
                                                            <i className="bi bi-umbrella">
                                                                {/* 10% */}
                                                                {city.weatherElement[4].time[index].parameter.parameterName}
                                                            </i>
                                                        </div>
                                                    </div>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}
export default App