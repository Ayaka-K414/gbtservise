import '../src/style/css/ress.css'
import '../src/style/css/style.css'
import logo from '/logo.png';
import insta from '/instagram.png';
import hamburger from '/top/hamburger-button.png';
import mainvisual from '/top/main.jpg';
import aboutus from '/top/aboutus.jpg';
import service01 from '/top/service01.jpg';
import service02 from '/top/service02.jpg';
import service03 from '/top/service03.jpg';
import service04 from '/top/service04.jpg';
import works01 from '/top/works01.jpg';
import works02 from '/top/works02.jpg';
import works03 from '/top/works03.jpg';
import works04 from '/top/works04.jpg';
import works05 from '/top/works05.jpg';
import works06 from '/top/works06.jpg';
import instaImage02 from '/top/instagram02.jpg';
import instaImage03 from '/top/instagram03.jpg';
import instaImage04 from '/top/instagram04.jpg';
import instaImage05 from '/top/instagram05.jpg';

document.querySelector('#app').innerHTML = `
  <div>
    <header>
      <a href="#"><img class="logo" src=${logo} alt="GTBサービスのロゴ" /></a>
      <nav>
        <li><a href="">私たちについて</a></li>
        <li><a href="">事業案内</a></li>
        <li><a href="">アクセス</a></li>
        <li><a href="">施工実績</a></li>
        <li class="contact"><a href="">お問い合わせ</a></li>
        <li class="insta"><a href=""><img src=${insta} art="Instagramアイコン"></a></li>
      </nav>
      <button class="hamburger">
        <img src="${hamburger}" alt="ハンバーアイコン" />
      </button>
    </header>
    <main>
      <div class="main-visual">
        <img src=${mainvisual} alt="メインビジュアル" />
        <div>
          <h1 id="textContainer" class="text-container">あなただけの<br>１台で、<br>カーライフを<br>もっと<br>楽しく。</h1>
          <p><span pan>Just For One </span>Enjoy Car Life!</p>
        </div>
      </div>
      <section class="about-us">
        <div class="about-us-container">
          <div>
            <h2 class="section-title">About us</h2>
            <p class="section-subtitle">・私たちについて・</p>
            <img class="about-us-img-tab" src=${aboutus} alt="会社案内" />
            <div class="about-us-text">
              <p>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、お客様の満足のいくお車をお探しいたします。 <br>自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。 <br>また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら何でもご相談してください。</p>
              <div class="about-us-link-container">
                <a class="about-us-link" href="">
                  <p class="text">会社案内</p>
                  <p class="arrow">→</p>
                </a>
              </div>
            </div>
          </div>
          <img class="about-us-img-pc" src=${aboutus} alt="私たちについて" />
        </div>
        <div class="feature">
          <h3 class="feature-title">Feature</h3>
          <a class="feature-link" href="https://www.automesseweb.jp/2021/12/22/862327"><p>当社の看板車「バナナフィガロ」が特集されました。<span>クリックして特集サイトへ</span></p></a>
        </div>
      </section>
      <section class="service">
        <div class="service-container">
          <h2 class="section-title">Service</h2>
          <p class="section-subtitle">・事業内容・</p>
        </div>
        <div class="card-container">
          <figure>
            <a href="">
              <img src=${service01} alt="鈑金・塗装" />
              <figcaption>鈑金・塗装</figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${service02} alt="整備・車検" />
              <figcaption>整備・車検</figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${service03} alt="新車・中古車販売" />
              <figcaption>新車・中古車販売</figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${service04} alt="カスタムペイント" />
              <figcaption>カスタムペイント</figcaption>
            </a>
          </figure>
        </div>
      </section>
      <section class="works">
        <div class="flex-container">
          <div class="section-title-container">
            <h2 class="section-title">Works</h2>
            <p class="section-subtitle">・施工実績・</p>
          </div>
          <div class="works-link-container">
            <a class="works-link" href="">
              <p class="text">もっと見る</p>
              <p class="arrow">→</p>
            </a>
          </div>
        </div>
        <div class="card-container">
          <figure>
            <a href="">
              <img src=${works01} alt="鈑金・塗装" />
              <figcaption>
                <p class="card-title">カスタムペイント</p>
                <p class="card-text">アウディA7 側面キズ、凹みの修理 鈑金、塗装で元通りの仕上がりに。</p>
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${works02} alt="整備・車検" />
              <figcaption>
                <p class="card-title">カスタムペイント</p>
                <p class="card-text">ジムニー オールペンおしゃれ仕様にカスタム。</p>
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${works03} alt="新車・中古車販売" />
              <figcaption>
                <p class="card-title">カスタムペイント</p>
                <p class="card-text">ハイエース オールペンブルー系のオリジナルカラー。</p>
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${works04} alt="カスタムペイント" />
              <figcaption>
                <p class="card-title">カスタムペイント</p>
                <p class="card-text">ミラジーノ オールペンブラウン×ホワイトでかわいらしく。</p>
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${works05} alt="カスタムペイント" />
              <figcaption>
                <p class="card-title">鈑金・塗装</p>
                <p class="card-text">アウディA7 側面キズ、凹みの修理鈑金、塗装で元通りの仕上がりに。</p>
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="">
              <img src=${works06} alt="カスタムペイント" />
              <figcaption>
                <p class="card-title">カスタムペイント</p>
                <p class="card-text">ネイキッド フルカスタムハマー風にカスタム。</p>
              </figcaption>
            </a>
          </figure>
        </div>
      </section>
      <section class="instagram">
        <h2 class="section-title">Instagram</h2>
        <div class="instagram-link-container">
          <p class="instagram-link"><a href="">Follow us<span class="arrow"></span></a></p>
        </div>
        <div class="insta-img-container">
          <img src=${mainvisual} alt="Instagram" />
          <img src=${instaImage02} alt="Instagram" />
          <img src=${instaImage03} alt="Instagram" />
          <img src=${instaImage04} alt="Instagram" />
          <img src=${instaImage05} alt="Instagram" />
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
