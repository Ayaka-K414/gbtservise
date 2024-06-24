import '../style/css/ress.css';
import '../style/css/works.css';
import logo from '../public/logo.png';
import insta from '../public/instagram.png';
import hamburger from '../public/top/hamburger-button.png';
import works01 from '../public/top/works01.jpg';



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
            <section class="works">
                <h2 class="section-title">Works</h2>
                <p class="section-subtitle">・施工実績・</p>
                <div class="card-container">
                    <figure>
                        <a href="">
                        <img src=${works01} alt="鈑金・塗装" />
                        <figcaption>
                            <p class="card-title">カスタムペイント</p>
                            <p class="card-text">ミラジーノのカスタムペイント</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="整備・車検" />
                        <figcaption>
                            <p class="card-title">オールペン</p>
                            <p class="card-text">ジムニーのオールペン</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="新車・中古車販売" />
                        <figcaption>
                            <p class="card-title">カスタムペイント</p>
                            <p class="card-text">グラインダーペイント</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">フルカスタム</p>
                            <p class="card-text">ネイキッドのフルカスタム</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">オールペン</p>
                            <p class="card-text">ミラジーノのオールペン</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">オールペン</p>
                            <p class="card-text">ハイエースのオールペン</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">カスタムペイント</p>
                            <p class="card-text">ベルエアのラップペイント</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">鈑金・塗装</p>
                            <p class="card-text">アウディA7の側面キズ、凹み修理</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">カスタムペイント</p>
                            <p class="card-text">バイクヘルメットのペイント</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">カスタムペイント</p>
                            <p class="card-text">マスタングのカスタムペイント</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">レストア</p>
                            <p class="card-text">ホンダN360のレストア</p>
                        </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="">
                        <img src=${works01} alt="カスタムペイント" />
                        <figcaption>
                            <p class="card-title">カスタムペイント</p>
                            <p class="card-text">ハーレーのカスタムペイント</p>
                        </figcaption>
                        </a>
                    </figure>
                </div>
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