import "./Coachintro.scss";

function Coachintro() {
    return(
        <>
         <section className="intro">
                <div className="joinustitle">
                    <div className="titlecontent">
                        <h3>加入我們</h3>
                        <h4>成為我們的合作夥伴</h4>
                    </div>
                    <button>健身教練&gt;全部教練&gt;教練姓名</button>
                </div>

                <hr className="joinusline"/>

                    <div className="backbutton">
                        <button>
                            &lt;返回列表</button>
                    </div>


                    <div className="person">
                        <div className="coachphotos">
                            <div className="selfie">
                                <img src="./images/coach.jpg" alt="" />
                            </div>
                            <div className="more">
                                <figure className="moreimg1">
                                    <img src="./images/Frame 100.png" alt="" />
                                </figure>

                                <figure className="moreimg2">
                                    <img src="./images/Frame 101.png" alt="" />
                                </figure>

                                <figure className="moreimg3">
                                    <img src="./images/Frame 99.png" alt="" />
                                </figure>

                            </div>

                            <button>&#9675; &#9675; &#9675; &#9675; &#9675;</button>

                        </div>


                        <div className="container">
                            <div className="personinfo">
                                <div className="namefavorite">
                                    <h2>陳裕行 Amenda</h2>
                                    <button> <i class="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <p>＃新手健身＃新手健身＃新手健身＃新手健身＃新手健身</p>

                            </div>

                            <div className="box">
                                <div className="classtime">
                                    <h2>一對一訓練課程</h2>
                                    <div class="timeblock">
                                        <i class="fa-regular fa-clock"> </i>
                                        <span>60分鐘</span>
                                    </div>
                                </div>

                                <p>單堂價格：$1,500→$600/單堂</p>
                                <p>10堂優惠 ：$1,400/單堂</p>
                                <div className="price-with-button">
                                    <p>20堂優惠 ：$1,200/單堂</p>
                                    <button class="classinrto" type="button">立即報名</button>
                                </div>
                            </div>

                            <div className="place">
                                <p>上課地點<br/>可選擇</p>
                                <div className="moreimg4">
                                    <img src="./images/Frame 104.png" alt="" />
                                    <p>臺北市大安區Ａ健身房</p>
                                </div>

                                <div className="moreimg5">
                                    <img src="./images/Frame 104-1.png" alt="" />
                                    <p>臺北市大安區B健身房</p>
                                </div>
                            </div>

                        </div>

                    </div>
            </section>

            <section className="coachnav">
                <nav className="intro">
                    <ul>
                        <li><a href="#">關於教練</a></li>
                        <li><a href="#">專長領域</a></li>
                        <li><a href="#">工作經歷</a></li>
                        <li><a href="#">專業證照</a></li>
                        <li><a href="#">預約流程</a></li>
                        <li><a href="#">教練可預約時間</a></li>
                        <li><a href="#">發表文章</a></li>
                        <li><a href="#">學員評價</a></li>
                    </ul>
                </nav>
            </section>

            <section className="about">
                <div className="aboutcontent">
                    <div className="about">
                        <h3>關於教練</h3>
                        <h4>About</h4>
                    </div>
                    <div className="bubble-wrapper">
                        <div className="talkbubble">
                            <p>不只是訓練，<br/>是量身打造的改變。</p>
                        </div>
                    </div>

                </div>
                <p>嗨，我是[教練名字]，一名熱愛健身、致力於幫助每位學員達成健康與體態目標的專業健身教練。我相信運動不只是改變外在，更能提升自信與生活品質。
                    擁有[相關證照，如NASM、ACE等]與[多少]年的教學經驗，我專注於[如增肌、減脂、功能性訓練等]，並根據每位學員的身體狀況與需求，量身打造最適合的訓練計畫。我重視科學化訓練，搭配適當的飲食指導，讓妳不只在健身房進步，更能在生活中感受到體能提升的改變。
                    不論妳是健身新手，還是想突破瓶頸的進階訓練者，我都會陪妳一起前進，一起打造更強壯、更健康的自己。</p>
            </section>


            <section className="spe">
                <div className="spetitle">
                    <h3>專長領域</h3>
                    <h4>Specialty</h4>
                </div>

                <div className="circlewrapper">
                    <div className="circle">
                        <h4>體態雕塑</h4>
                        <p>增肌減脂、核心強化、線條塑造
                        </p>
                    </div>

                    <div className="circle">
                        <h4>運動提升表現</h4>
                        <p>運動員體能訓練、爆發力與肌耐力訓練</p>
                    </div>

                    <div className="circle">
                        <h4>功能性訓練</h4>
                        <p>長期姿勢改善、減少運動傷害、提升活動能力</p>
                    </div>

                    <div className="circle">
                        <h4>特殊族群訓練</h4>
                        <p>孕產婦訓練、中高齡體適能、術後復健運動指導</p>
                    </div>

                </div>
            </section>

            <section className="exp-cer">
                <div className="expcontent">
                    <div className="exptitle">
                        <h3>工作經歷</h3>
                        <h4>Working Experiences</h4>
                    </div>
                    <p>·[幾年] 年健身教練經驗，累積超過 [多少] 堂私人課程
                    ·曾任職於 [健身房名稱/私人工作室]，專長增肌、減脂、體能訓練
                    ·指導超過 [多少] 名學員，達成體態與表現目標
                    ·開設團體與企業課程，內容涵蓋體適能與 HIIT 訓練 </p>
                </div>

                <div className="certificate">
                    <div className="certitle">
                        <h3>專業證照</h3>
                        <h4>Certification</h4>
                    </div>

                    <p>
                    ·中華民國體適能協會 C 級健身指導員
                    ·ACE 美國運動委員會私人教練證照
                    ·TRX 懸吊訓練系統認證教練
                    </p>
                </div>
            </section>

            <section className="reservation">
            <div className="reserve">
                <div className="restitle">
                    <h3>預約流程</h3>
                    <h4>Reserve Process</h4>
                </div>
                <div className="process">
                    <div className="number">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>

                    <div className="resdetail">
                        <p>點選立即報名</p>
                        <p>個人頁面＞我的訂單＞課程訂單</p>
                        <p>點選剩餘堂數</p>
                        <p>預約專屬時間並選擇上課地點</p>
                        <p>教練確認預約</p>
                    </div>
                </div>
            </div>

            <div className="calendar">
                <div className="caltitle">
                    <h3>教練可預約時間</h3>
                    <h4>Available Time</h4>
                </div>

                <iframe
                    src="https://calendar.google.com/calendar/embed?src=classroom104418097828807141953%40group.calendar.google.com&ctz=Asia%2FTaipei"
                    style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

            </div>
        </section>

        <section className="coacharticle">
            <div className="articletitle">
                <h3>發表文章</h3>
                <h4>Articles</h4>
            </div>

            <div className="classcard">
                <div className="arrow">
                    <button>&lt;</button>
                </div>

                <div className="card">
                    <div className="card1">
                        <p>2025/03/28</p>
                        <div className="img-box"><img src="./images/article.png" alt=""/></div>
                        <div className="content-box">
                            <h4>健身初學者必看：<br/>如何開始你的運動旅程</h4>
                            <p>剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。
                            </p>
                            <div className="tag">
                                <p>#標籤</p>
                                <p>#標籤</p>
                                <p>#標籤</p>
                            </div>
                        </div>
                        <div className="tag-box">健身入門</div>
                    </div>

                    <div className="card2">
                        <p>2025/03/28</p>
                        <div className="img-box"><img src="./images/article.png" alt=""/></div>
                        <div className="content-box">
                            <h4>健身初學者必看：<br/>如何開始你的運動旅程</h4>
                            <p>剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。
                            </p>
                            <div className="tag">
                                <p>#標籤</p>
                                <p>#標籤</p>
                                <p>#標籤</p>
                            </div>
                        </div>
                        <div className="tag-box">健身入門</div>
                    </div>

                    <div className="card3">
                        <p>2025/03/28</p>
                        <div className="img-box"><img src="./images/article.png" alt=""/></div>
                        <div className="content-box">
                            <h4>健身初學者必看：<br/>如何開始你的運動旅程</h4>
                            <p>剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。
                            </p>
                            <div className="tag">
                                <p>#標籤</p>
                                <p>#標籤</p>
                                <p>#標籤</p>
                            </div>
                        </div>
                        <div className="tag-box">健身入門</div>
                    </div>
                </div>

                <div className="arrow">
                    <button>&gt;</button>
                </div>

            </div>
        </section>
        </>
    )
}
export default Coachintro;