import './Support.scss';
import './assets/common/font.scss'
import Img1 from './assets/images/1.svg'
import Img2 from './assets/images/2.svg'
import Img3 from './assets/images/3.svg'
import Img4 from './assets/images/4.svg'
import Img5 from './assets/images/5.svg'
import Img6 from './assets/images/6.svg'
import Img7 from './assets/images/7.svg'
import Img8 from './assets/images/8.svg'
import Img9 from './assets/images/9.svg'
import Img10 from './assets/images/10.svg'
import Img11 from './assets/images/11.svg'
import Img12 from './assets/images/12.svg'
import Img14 from './assets/images/celulares.png'
import Img17 from './assets/images/navegadores.svg'
import Img13 from './assets/images/android.svg'
import Img16 from './assets/images/ios.svg'
import Img18 from './assets/images/windows.svg'
import Img19 from './assets/images/xBox.svg'
import Img15 from './assets/images/discord-logo-branco.svg'
import Img20 from './assets/images/fundo-header.png';
import Img21 from './assets/images/discord-logo.svg'


export default function App() {

  return (
    <div>
      <div className="header">
        <img src={Img21} alt="logo" />
        <ul>
          <li>Feedback</li>
          <li>Português do Brasil
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12" class="dropdown-chevron-icon">
              <path fill="none" stroke="currentColor" stroke-linecap="round" d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"></path>
            </svg>
          </li>
          <li>Enviar uma Solicitação</li>
          <li>Entrar</li>
        </ul>
      </div>
      <div className="div_1" style={{ backgroundImage: `url(${Img20})` }}>
        <h1>Central de Ajuda</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12" class="search-iconb" aria-hidden="true">
          <circle cx="4.5" cy="4.5" r="4" fill="none" stroke="currentColor"></circle>
          <path stroke="currentColor" stroke-linecap="round" d="M11 11L7.5 7.5"></path>
        </svg>
        <input name="utf8" type="hidden" value="✓" autocomplete="off"></input>
        <input type="search" name="query" id="query" placeholder="Pesquisa" autocomplete="off" aria-label="Pesquisa"></input>
        <input type="hidden" name="filter_by" value="knowledge_base"></input>
      </div>
      <div className="div_2">
        <h1>Precisa de ajuda? Conte com a gente.</h1>
        <p className="p1">De configurações de conta a permissões, encontre ajuda sobre tudo para o Discord</p>
        <p className="p2">Se você é novo no Discord e está precisando de umas dicas, dê uma olhada no nosso <span> Guia do Iniciante! </span></p>
      </div>
      <ul className="div_2_1">
        <li className="containers">
          <img src={Img1} alt="logo" />
          <h2>Anúncios</h2>
          <hr />
          <h3>Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo.</h3>
        </li>
        <li className="containers">
          <img src={Img2} alt="logo" />
          <h2>Interface do Discord</h2>
          <hr />
          <h3>PRA QUE SERVE ESSE BOTÃO!?!!</h3>
        </li>
        <li className="containers">
          <img src={Img3} alt="logo" />
          <h2>Configurações de Conta</h2>
          <hr />
          <h3>Você é importante e sua conta também.</h3>
        </li>
        <li className="containers">
          <img src={Img4} alt="logo" />
          <h2>Começando</h2>
          <hr />
          <h3>Comece com o pé direito! Não com o esquerdo!</h3>
        </li>
        <li className="containers">
          <img src={Img5} alt="logo" />
          <h2>Configurações de Servidor</h2>
          <hr />
          <h3>Quase tão emocionante quanto decoração de interiores.</h3>
        </li>
        <li className="containers">
          <img src={Img6} alt="logo" />
          <h2>Programas Comunitários</h2>
          <hr />
          <h3>Hype para HypeSquaders, party para Parceiros</h3>
        </li>
        <li className="containers">
          <img src={Img7} alt="logo" />
          <h2>Nitro</h2>
          <hr />
          <h3>Por favor, não compre até cair. Deixe a gente te ajudar.</h3>
        </li>
        <li className="containers">
          <img src={Img8} alt="logo" />
          <h2>Formas de Pagamento</h2>
          <hr />
          <h3>Aquela sensação quando você olha o seu saldo.</h3>
        </li>
        <li className="containers">
          <img src={Img9} alt="logo" />
          <h2>Confiança & Segurança</h2>
          <hr />
          <h3>Mantenha as coisas sãs e salvas para você e seus amigos.</h3>
        </li>
        <li className="containers">
          <img src={Img10} alt="logo" />
          <h2>F.A.Q.s</h2>
          <hr />
          <h3>Tudo o que você puder fazer num auto-atendimento.</h3>
        </li>
      </ul>
      <div className="div_2_2">
        <h2>Outras formas de conseguir ajuda!</h2>
      </div>
      <ul className="div_2_1">
        <li className="containers">
          <img src={Img11} alt="logo" />
          <h2>Desenvolvedores de Jogos</h2>
          <hr />
          <h3>Sua casa para suporte com o desenvolvimento de bots, aplicativos e jogos usando nossa API e SDK!</h3>
        </li>
        <li className="containers">
          <img src={Img12} alt="logo" />
          <h2>Twitter</h2>
          <hr />
          <h3>Alguma perguntinha rápida? Chame a gente no Twitter</h3>
        </li>
      </ul>
      <div className="footer">
        <div>
          <div className="button">
            <p>SAIBA MAIS</p>
          </div>
          <div className="middle">
            <img className="celulares" src={Img14} alt="logo" />
            <hr></hr>
            <div className="symbols">
              <div className="navegadores">
                <img src={Img17} alt="logo" />
              </div>
              <div className="android">
                <img src={Img13} alt="logo" />
              </div>
              <div className="ios">
                <img src={Img16} alt="logo" />
              </div>
              <div className="windows">
                <img src={Img18} alt="logo" />
              </div>
              <div className="xbox">
                <img src={Img19} alt="logo" />
              </div>
            </div>
          </div>
          <div className="down">
            <div className="imgDown">
              <img src={Img15} alt="logo" />
            </div>
            <div>
              <ul className="list">
                <li>Download</li>
                <li>Ajuda e Suporte</li>
                <li>Feedback</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <ul className="list">
                <li>Parceiros</li>
                <li>HypeSquad</li>
                <li>Merchandising</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className="lastDiv">
              <ul className="list">
                <li>Companhia</li>
                <div className="trabalheConosco">
                  <p>Trabalhe Conosco</p>
                  <span className="traco">-</span>
                  <span>Estamos Contratando</span>
                </div>
                <li>Blog</li>
                <div className="trabalheConosco">
                  <p>Termos </p>
                  <span className="E">&</span>
                  <p>Privacidade</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}