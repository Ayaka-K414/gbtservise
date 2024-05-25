import '../src/style/css/ress.css'
import '../src/style/css/style.css'
import logo from '/logo.png'

document.querySelector('#app').innerHTML = `
  <div>
    <header>
      <img src=${logo} alt="GTBサービスのロゴ" />
      <nav>
        <li><a href="">私たちについて</a></li>
        <li><a href="">事業案内</a></li>
        <li><a href="">アクセス</a></li>
        <li><a href="">施工実績</a></li>
        <li><a href="">お問い合わせ</a></li>
        <li><a href="">インスタアイコンリンク</a></li>
      </nav>
    </header>
  </div>
`

setupCounter(document.querySelector('#counter'))
