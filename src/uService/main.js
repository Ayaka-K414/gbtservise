import '../style/css/ress.css';
import '../style/css/aboutus.css';
import logo from '../public/logo.png';
import insta from '../public/instagram.png';
import hamburger from '../public/top/hamburger-button.png';
import aboutus from '../public/top/aboutus.jpg'

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
            <section class="service">
                <div class="service-container">
                    <h2 class="section-title">Service</h2>
                    <p class="section-subtitle">・事業内容・</p>
                    <img class="service-img" src=${aboutus} alt="会社案内" />
                    <div class="service-text">
                        <p>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、お客様の満足のいくお車をお探しいたします。<br>自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。<br>また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら何でもご相談してください。</p>
                    </div>
                </div>
            </section>
            <section class="company"">
                <div class="company-container">
                    <h2 class="section-title">Company</h2>
                    <p class="section-subtitle">・会社案内・</p>
                    <dl>
                        <div><dt>会社名</dt><dd>GBTサービス株式会社</dd></div>
                        <div><dt>代表</dt><dd>加藤 峻二</dd></div>
                        <div><dt>住所</dt><dd>〒444-0951 岡崎市北野町字一番訳5番地1</dd></div>
                        <div><dt>営業時間</dt><dd>9:00～19:00  定休日：日曜 / 祝日</dd></div>
                        <div><dt>電話 / FAX</dt><dd>0564-31-7273 / 0564-34-3773</dd></div>
                        <div><dt>事業案内</dt><dd>自動車販売、修理、車検、鈑金塗装、カスタムカー製作、カスタムカー販売、エアロ取付<br>全塗装、保険代理店、保険事故修理、軽鈑金修理、ナビ取付、電装品取付、ルームクリーニング</dd></div>
                    </dl>
                </div>
            </section>
            <section class="access">
                <div class="access-container">
                    <h2 class="section-title">Access</h2>
                    <p class="section-subtitle">・アクセス・</p>
                    <div class="access-map"><img src=${aboutus}></div>
                    <div class="flex-container">
                        <address class="access-address">〒444-0951 岡崎市北野町字一番訳5番地1</address>
                        <div class="access-link-container">
                            <a class="access-link" href="">
                            <p class="text">Google map</p>
                            <p class="arrow">→</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact">
                <h2 class="section-title">Contact</h2>
                <p class="section-subtitle">・お問い合わせ・</p>
                <div class="contact-info-container">
                    <dl>
                        <div><dt>お電話でお問い合わせ</dt><dd>0564-31-7273</dd></div>
                        <div><dt>メールでお問い合わせ</dt><dd>poccharihoney@gmail.com</dd></div>
                        <div><dt>インスタDM</dt><dd>gbtservice</dd></div>
                    </dl>
                </div>
                <div class="insta-background-bottom"></div>
            </section>
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