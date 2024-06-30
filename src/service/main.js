import '../style/css/ress.css';
import '../style/css/service.css';
import logo from '../public/logo.png';
import insta from '../public/instagram.png';
import hamburger from '../public/top/hamburger-button.png';
import serviceMain from '../public/service/service_main.jpg';
import aboutus from '../public/aboutus/aboutus-main.png';
import repair01 from '../public/service/repair01.jpg';
import repair02 from '../public/service/repair02.jpg';
import repair03 from '../public/service/repair03.jpg';
import maintenance01 from '../public/service/maintenance01.jpg';
import maintenance02 from '../public/service/maintenance02.jpg';
import maintenance03 from '../public/service/maintenance03.jpg';
import sale01 from '../public/service/sale01.jpg';
import custom01 from '../public/service/custom01.jpg';
import custom02 from '../public/service/custom02.jpg';
import custom03 from '../public/service/custom03.jpg';



document.querySelector('#app').innerHTML = `
    <div>
        <header>
        <a href="#"><img class="logo" src=${logo} alt="GTBサービスのロゴ" /></a>
        <nav>
            <li><a href="">私たちについて</a></li>
            <li><a href="">事業案内</a></li>
            <li><a href="">アクセス</a></li>
            <li><a href="">施工実績</a></li>
            <li class="list-contact"><a href="">お問い合わせ</a></li>
            <li class="insta"><a href=""><img src=${insta} art="Instagramアイコン"></a></li>
        </nav>
        <button class="hamburger">
            <img src="${hamburger}" alt="ハンバーアイコン" />
        </button>
        </header>
        <main>
            <div class="bgc-lightblue">
                <section class="service">
                    <div class="service-container">
                        <div>
                            <h2 class="section-title">Service</h2>
                            <p class="section-subtitle">・事業内容・</p>
                            <img class="service-img-sp" src=${serviceMain} alt="会社案内" />
                            <div class="service-text">
                                <p>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、お客様の満足のいくお車をお探しいたします。<br>自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。<br>また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら何でもご相談してください。</p>
                            </div>
                        </div>
                        <img class="service-img-pc" src=${serviceMain} alt="私たちについて" />
                    </div>
                </section>
            </div>
            <article>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Repair・Paint</h3>
                        <div class="service-content">
                            <h4>鈑金・塗装</h4>
                            <figure>
                            <div class="flex-img">
                                <img src=${repair01} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${repair02} alt="鈑金・塗装" />
                                    <img src=${repair03} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">経験豊富な職人が丁寧に仕上げます。</p>
                                <p>小さな傷から大きな凹みまで、元通りにしてお返しします。<br>自動車の塗装は時間経過や紫外線によって微妙に変化していきますので、修理箇所だけではなく、車両全体に合わせた自然な色に調色をして塗装を行います。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Maintenance</h3>
                        <div class="service-content">
                            <h4>整備・車検</h4>
                            <figure>
                            <div class="flex-img">
                                <img src=${maintenance01} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${maintenance02} alt="鈑金・塗装" />
                                    <img src=${maintenance03} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">お客様のニーズに合わせた内容でご対応します。</p>
                                <p>お客様のお車の状態に必要な整備、必要でない整備内容を、判断させていただき、お見積りさせていただきます。作業内容の説明、料金の説明、作業日数、メンテナンスのアドバイス説明をさせていただき、お客様に納得していただいたうえで、作業にかからせていただきます。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Sale</h3>
                        <div class="service-content">
                            <h4>新車・中古車販売</h4>
                            <figure>
                            <div class="flex-img">
                                <img src=${sale01} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${sale01} alt="鈑金・塗装" />
                                    <img src=${sale01} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">お客様のライフスタイルやご予算に合ったお車をご提案させていただきます。</p>
                                <p>各メーカー新車販売、オークションによる中古車販売をしております。<br>ご購入いただいた車両の車検や修理、鈑金、レッカーなど、アフターフォローも一括でお任せいただけます。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="article-container">
                    <div class="title-flex">
                        <h3 class="vertical-title">Custom</h3>
                        <div class="service-content">
                            <h4>カスタムペイント</h4>
                            <figure>
                            <div class="flex-img">
                                <img src=${custom01} alt="鈑金・塗装" />
                                <div class="img-small">
                                    <img src=${custom02} alt="鈑金・塗装" />
                                    <img src=${custom03} alt="鈑金・塗装" />
                                </div>
                            </div>
                            <figcaption>
                                <p class="figcaption-title">あなただけの１台を心を込めて制作せていただきます。</p>
                                <p>全塗装からパーツ塗装までご対応いたします。<br>また車だけでなくバイクのタンク、ヘルメットなど装飾品の塗装もお任せください。<br>お客様のご要望に合わせたカスタムをご提案いたします。</p>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </article>
        </main>
        <footer>
            <div class="footer-high">
            <ul class="footer-high-links">
                <li>
                <a href="">
                    <p class="list-title">Stock List</p>
                    <p class="text">在庫車両をご覧になりたい方はこちら</p>
                </a>
                </li>
                <li>
                <a href="">
                    <p class="list-title">Feature</p>
                    <p class="text">「バナナフィガロ」の特集サイトへ</p>
                </a>
                </li>
            </ul>
            </div>
            <div class="footer-low">
            <div class="footer-flex-left">
                <img class="logo" src=${logo} alt="GTBサービスのロゴ"/>
                <address>
                <p class="address">〒444-0951<br>岡崎市北野町字一番訳5番地1<br><span class="tel-icon"></span>0564-31-7273</p>
                </address>
            </div>
            <div class="footer-flex-right">
                <ul class="footer-low-links">
                <li>
                    <a href="">私たちについて</a>
                    <ul>
                    <li class="under-pages-links"><a href="">会社案内</a></li>
                    <li class="under-pages-links"><a href="">アクセス</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">事業案内</a>
                    <ul>
                    <li class="under-pages-links"><a href="">鈑金・塗装</a></li>
                    <li class="under-pages-links"><a href="">整備・車検</a></li>
                    <li class="under-pages-links"><a href="">新車・中古車販売</a></li>
                    <li class="under-pages-links"><a href="">カスタムペイント</a></li>
                    </ul>
                </li>
                <li><a href="">施工実績</a></li>
                <li><a href="">お問い合わせ</a></li>
                </ul>
                <div class="instagram-link-container">
                <p class="instagram-link"><a href="">Follow us<span class="arrow"></span></a></p>
                </div>
            </div>
            </div>
            <p class="copyright">&copy;2024 GBT service All Rights Reserved.</p>
        </footer>
    </div>
`;