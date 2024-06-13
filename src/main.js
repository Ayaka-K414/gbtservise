import '../src/style/css/ress.css'
import '../src/style/css/style.css'
import logo from '/logo.png';
import mainvisual from '/954x577.png';
import insta from '/instagram.png';
import hamburger from '/hamburger-button.png';
import service from '/service.jpeg';
import aboutus from '/aboutus.jpeg';

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
          <h1><span>あなただけの</span>１台で、<br><span>カーライフを</span><span>もっと</span>楽しく。</h1>
          <p><span pan>Just For One </span>Enjoy Car Life!</p>
        </div>
      </div>
      <section class="about-us">
        <div class="about-us-container">
          <div>
            <h2 class="section-title">About us</h2>
            <p class="section-subtitle">・私たちについて・</p>
            <div class="about-us-text">
              <p>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、お客様の満足のいくお車をお探しいたします。 <br>自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。 <br>また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら何でもご相談してください。</p>
              <a class="about-us-link" href="">
                <p class="text">会社案内</p>
                <p class="arrow">→</p>
              </a>
            </div>
          </div>
          <img src=${aboutus} alt="私たちについて" />
        </div>
        <div class="feature">
          <h3 class="feature-title">Feature</h3>
          <a class="feature-link" href=""><p>当社の看板車「バナナフィガロ」が特集されました。<span>クリックして特集サイトへ</span></p></a>
        </div>
      </section>
      <section class="service">
        <h2 class="section-title">Service</h2>
        <p class="section-subtitle">・事業内容・</p>
        <div class="card-container">
          <figure>
            <img src=${service} alt="鈑金・塗装" />
            <figcaption>鈑金・塗装</figcaption>
          </figure>
          <figure>
            <img src=${service} alt="整備・車検" />
            <figcaption>整備・車検</figcaption>
          </figure>
          <figure>
            <img src=${service} alt="新車・中古車販売" />
            <figcaption>新車・中古車販売</figcaption>
          </figure>
          <figure>
            <img src=${service} alt="カスタムペイント" />
            <figcaption>カスタムペイント</figcaption>
          </figure>
        </div>
      </section>
    </main>
    <footer>
      <p>&copy;2024 GBT service All Rights Reserved.</p>
    </footer>
  </div>
`;
