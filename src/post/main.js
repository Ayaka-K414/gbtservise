import '../style/css/ress.css';
import '../style/css/post.css';
import logo from '../public/logo.png';
import insta from '../public/instagram.png';
import hamburger from '../public/top/hamburger-button.png';
import post2304_01 from '../public/post/post2304_01.jpg';
import post2304_02 from '../public/post/post2304_02.jpg';
import post2304_03 from '../public/post/post2304_03.jpg';
import post2304_04 from '../public/post/post2304_04.jpg';
import post2304_05 from '../public/post/post2304_05.jpg';
import post2304_06 from '../public/post/post2304_06.jpg';
import post2304_07 from '../public/post/post2304_07.jpg';

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
            <article>
                <div class="title">
                    <div class="category">
                        <h4 class="category-title">Works</h4>
                        <p class="category-subtitle">・施工実績・</p>
                    </div>
                    <span class="year-month">2023.4</span>
                    <span class="tag">レストア</span>
                    <p class="title-text">ホンダN360のレストア</p>
                </div>
                <div class="img-container">
                    <div class="before img-contents">
                        <p class="vertical-title">before</p>
                        <div class="before-img">
                            <img src=${post2304_01} alt="ホンダN360のレストア" />
                            <img src=${post2304_02} alt="ホンダN360のレストア" />
                        </div>
                    </div>
                    <div class="process img-contents">
                        <p class="vertical-title">process</p>
                        <div class="process-img">
                            <img src=${post2304_03} alt="ホンダN360のレストア" />
                            <img src=${post2304_04} alt="ホンダN360のレストア" />
                            <img src=${post2304_05} alt="ホンダN360のレストア" />
                        </div>
                    </div>
                    <div class="after img-contents">
                        <p class="vertical-title">after</p>
                        <div class="after-img">
                            <img src=${post2304_06} alt="ホンダN360のレストア" />
                            <img src=${post2304_07} alt="ホンダN360のレストア" />
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <p>（例文）<br>1970年式のホンダN360。<br>素敵な旧車のレストア作業です。</p>
                    <p>ボディは劣化した塗装をすべて剥がして下処理、腐食して変形してしまっている部分をパテで成形しました。<br>外装、内装パーツを解体して清掃します。ボディは劣化した塗装をすべて剥がして下処理、腐食して変形してしまっている部分をパテで成形しました。</p>
                    <p>全塗装のカラーは旧車らしい深みのあるレッド、天井はブラックにしツートンカラーに仕上げました。</p>
                    <p>綺麗になった愛車と今後も楽しい時間をお過ごしください！</p>
                </div>
                <div class="pagenation">
                    <a class="prev" href="">前の記事へ</a>
                    <a class="list" href="">一覧へ戻る</a>
                    <a class="next" href="">次のページ</a>
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