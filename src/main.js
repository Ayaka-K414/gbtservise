import '../src/style/css/ress.css'
import '../src/style/css/style.css'
import logo from '/logo.png'
import mainvisual from '/954x577.png'
import insta from '/instagram.png'
import hamburger from '/hamburger-button.png'

document.querySelector('#app').innerHTML = `
  <div>
    <header>
      <a href="#"><img src=${logo} alt="GTBサービスのロゴ" /></a>
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
      <img src=${mainvisual} alt="GTBサービスのロゴ" />
      <div>
        <h1>あなただけの１台で、カーライフをもっと楽しく。</h1>
        <p>Just For One Enjoy Car Life!</p>
      </div>
      <section>
        <h2>About us</h2>
        <p>・私たちについて・</p>
        <p>自動車販売、新車から中古車やカスタムカーなど様々な種類を取り扱いしており、お客様の満足のいくお車をお探しいたします。 自社で鈑金塗装修理をしておりますので購入してからのアフターケアもお任せください。 また、鈑金、塗装、車検、修理や、今お乗りのお車を自分好みの色にカスタムしたいなど車のことなら何でもご相談してください。</p>
        <a href="">会社案内</a>
      </section>
    </main>
    <footer>
      <p>&copy;2024 GBT service All Rights Reserved.</p>
    </footer>
  </div>
`