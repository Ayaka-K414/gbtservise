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
            <li class="contact"><a href="">お問い合わせ</a></li>
            <li class="insta"><a href=""><img src=${insta} art="Instagramアイコン"></a></li>
        </nav>
        <button class="hamburger">
            <img src="${hamburger}" alt="ハンバーアイコン" />
        </button>
        </header>
        <section class="about-us">
            <div class="about-us-container">
                <h2 class="section-title">About us</h2>
                <p class="section-subtitle">・私たちについて・</p>
                <img class="about-us-img" src=${aboutus} alt="会社案内" />
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
                    <dt>会社名</dt>
                    <dd>GBTサービス株式会社</dd>
                    <dt>代表</dt>
                    <dd>加藤 峻二</dd>
                    <dt>住所</dt>
                    <dd>〒444-0951 岡崎市北野町字一番訳5番地1</dd>
                    <dt>営業時間</dt>
                    <dd>9:00～19:00  定休日：日曜 / 祝日</dd>
                    <dt>電話 / FAX</dt>
                    <dd>0564-31-7273 / 0564-34-3773</dd>
                    <dt>事業案内</dt>
                    <dd>自動車販売、修理、車検、鈑金塗装、カスタムカー製作、カスタムカー販売、エアロ取付<br>全塗装、保険代理店、保険事故修理、軽鈑金修理、ナビ取付、電装品取付、ルームクリーニング</dd>
                </dl>
            </div>
        </section>

    </div>
`;