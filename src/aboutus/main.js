import '../style/css/ress.css';
import '../style/css/aboutus.css';
import logo from '../public/logo.svg';
import insta from '../public/instagram.png';
import hamburger from '../public/top/hamburger-button.png';
import close from '../public/close-button.png';
import aboutusMain from '../public/aboutus/aboutus-main.jpg';

document.querySelector('#app').innerHTML = `
    <div>
        <header>
            <a href="/index.html"><img class="logo" src=${logo} alt="GTBサービスのロゴ" /></a>
            <nav>
                <li><a href="/aboutus/index.html">私たちについて</a></li>
                <li><a href="/service/index.html">事業案内</a></li>
                <li><a href="/aboutus/index.html#href-access">アクセス</a></li>
                <li><a href="/works/index.html">施工実績</a></li>
                <li class="list-contact"><a href="/aboutus/index.html#href-contact">お問い合わせ</a></li>
                <li class="insta"><a href="https://www.instagram.com/gbtservise/" target="_blank" rel="noopener noreferrer"><img src=${insta} art="Instagramアイコン"></a></li>
            </nav>
            <button class="hamburger-button" id="hamburger-button">
                <img class="hamburger-icon" src="${hamburger}" alt="ハンバーガーメニュー" />
            </button>
        </header>
        <div class="menu" id="hamburger-menu">
            <div class="text-align-right">
                <button class="close-button" id="close-button" >
                    <img class="close-icon" src="${close}" alt="閉じる" />
                </button>
            </div>
            <div class="menu-list">
                <ul>
                    <li><a href="/aboutus/index.html">About us<span>私たちについて</span></a></li>
                    <li><a href="/service/index.html">Service<span>事業案内</span></a></li>
                    <li><a href="/works/index.html">Works<span>施工実績</span></a></li>
                    <li class="icon"><a href="https://www.carsensor.net/shop/aichi/319305001/#contents" target="_blank" rel="noopener noreferrer">Stock List<span>在庫車両掲載サイト</span></a></li>
                    <li class="icon"><a href="https://www.automesseweb.jp/2021/12/22/862327" target="_blank" rel="noopener noreferrer">Feature<span>当社カスタム「バナナフィガロ」特集サイト</span></a></li>
                    <li class="icon-insta"><a href="https://www.instagram.com/gbtservise/" target="_blank" rel="noopener noreferrer">Instagram<span>インスタグラム</span></a></li>
                </ul>
                <a href="/index.html"><img class="logo" src=${logo} alt="GTBサービスのロゴ" /></a>
            </div>
        </div>
        <main>
            <section class="about-us">
                <div class="about-us-container">
                    <h2 class="section-title">About us</h2>
                    <p class="section-subtitle">・私たちについて・</p>
                    <div class="about-us-img-container"></div>
                    <div class="about-us-text">
                        <h3>カーライフをもっと楽しく。</h3>
                        <p class="text-large">私たちGBTサービスが大切にしていることは、<br>車と一緒に、より豊かで楽しい日常をお客様に届けるということ。</p>
                        <p class=text-small>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、<br>お客様の満足のいくお車をお探しいたします。<br>自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。<br>また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら<br>何でもご相談ください。</p>
                    </div>
                </div>
            </section>
            <section class="company"">
                <div class="company-container">
                    <h2 class="section-title">Company</h2>
                    <p class="section-subtitle">・会社案内・</p>
                    <dl>
                        <div><dt>会社名</dt><dd>GBTサービス</dd></div>
                        <div><dt>代表</dt><dd>加藤 峻二</dd></div>
                        <div><dt>住所</dt><dd>〒444-0951 <span class="text-newline">岡崎市北野町字一番訳5番地1</span></dd></div>
                        <div><dt>営業時間</dt><dd>9:00～18:00  <span class="space">定休日：不定休</span></dd></div>
                        <div><dt>電話 / FAX</dt><dd>0564-31-7273 / 0564-34-3773</dd></div>
                        <div><dt>事業内容</dt><dd>自動車販売、修理、車検、鈑金塗装、カスタムカー製作、カスタムカー販売、エアロ取付<br>全塗装、保険代理店、保険事故修理、軽鈑金修理、ナビ取付、電装品取付、ルームクリーニング</dd></div>
                    </dl>
                </div>
            </section>
            <section class="access" id="href-access">
                <div class="access-container">
                    <h2 class="section-title">Access</h2>
                    <p class="section-subtitle">・アクセス・</p>
                    <div>
                        <div class="access-map"><img src=${aboutusMain}></div>
                        <div class="flex-container">
                            <address class="access-address">〒444-0951 <span class="text-newline">岡崎市北野町字一番訳5番地1</span></address>
                            <div class="access-link-container">
                                <a class="access-link" href="">
                                <p class="text">Google map</p>
                                <p class="arrow">→</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="bgc-white">
                <div class="contact-bg-top"></div>
                <section class="contact">
                    <h2 class="section-title-shadow"  id="href-contact" data-text="Contact">Contact</h2>
                    <p class="section-subtitle">・お問い合わせ・</p>
                    <div class="contact-info-container">
                        <dl>
                            <div><dt>お電話でお問い合わせ</dt><dd>0564-31-7273</dd></div>
                            <div><dt>メールでお問い合わせ</dt><dd>poccharihoney@gmail.com</dd></div>
                            <div><dt>インスタDM</dt><dd>gbtservice</dd></div>
                        </dl>
                    </div>
                </section>
                <div class="contact-bg-bottom"></div>
                <div class="bgc-beige"></div>
            </div>
        </main>
        <footer>
            <div class="footer-high bg-white">
                <ul class="footer-high-links">
                <li>
                    <a href="https://www.carsensor.net/shop/aichi/319305001/#contents" target="_blank" rel="noopener noreferrer">
                    <p class="list-title">Stock List</p>
                    <p class="text">在庫車両をご覧になりたい方はこちら</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.automesseweb.jp/2021/12/22/862327" target="_blank" rel="noopener noreferrer">
                    <p class="list-title">Feature</p>
                    <p class="text">「バナナフィガロ」の特集サイトへ</p>
                    </a>
                </li>
                </ul>
            </div>
            <div class="footer-low">
                <div class="footer-flex-left">
                <a href="/index.html"><img class="logo" src=${logo} alt="GTBサービスのロゴ"/></a>
                <address>
                    <p class="address">〒444-0951<br>岡崎市北野町字一番訳5番地1<br><span class="tel-icon"></span>0564-31-7273</p>
                </address>
                </div>
                <div class="footer-flex-right">
                <ul class="footer-low-links">
                    <li>
                    <a href="/aboutus/index.html">私たちについて</a>
                    <ul>
                        <li class="under-pages-links"><a href="/aboutus/index.html">会社案内</a></li>
                        <li class="under-pages-links"><a href="/aboutus/index.html#href-access">アクセス</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="/service/index.html">事業案内</a>
                    <ul>
                        <li class="under-pages-links"><a href="/service/index.html#href-repair">鈑金・塗装</a></li>
                        <li class="under-pages-links"><a href="/service/index.html#href-maintenance">整備・車検</a></li>
                        <li class="under-pages-links"><a href="/service/index.html#href-sale">新車・中古車販売</a></li>
                        <li class="under-pages-links"><a href="/service/index.html#href-custom">カスタムペイント</a></li>
                    </ul>
                    </li>
                    <li><a href="/works/index.html">施工実績</a></li>
                    <li><a href="/aboutus/index.html#href-contact">お問い合わせ</a></li>
                </ul>
                <div class="instagram-link-container">
                    <p class="instagram-link"><a href="https://www.instagram.com/gbtservise/" target="_blank" rel="noopener noreferrer">Follow us<span class="arrow"></span></a></p>
                </div>
                </div>
            </div>
            <p class="copyright">&copy;2024 GBT service All Rights Reserved.</p>
        </footer>
    </div>
`;