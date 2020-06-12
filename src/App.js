import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

/*IMAGENS ANDROID */
import init from './images/initAndroid.jpg';
import wait from './images/ecra_pf_aguarde_android.png';
import loadedList from './images/ecra_dropdown_android.png'
import chamadaAPiAndroid from './images/chamda_api_android.png';
import respServidorAndroid from './images/resposta_api_android.png';


/*IMAGENS IOS */

import initiOS from './images/menu_inicial_ios.png';
import waitiOS from './images/pf_aguarde_ios.png';
import loadedListiOS from './images/dropdown_ios.png'
import chamadaAPiiOS from './images/chamada_api_ios.png';
import respServidoriOS from './images/resp_servidor_ios.png';





function App() {
  return (
    <div className="App">

      <header className="App-header" id="hello">Demo app React Native </header>

      <div className="container">

        <div className="row">
          <div className="col-sm" id="menu-android">
            <div className="row">
              <h2>Android</h2>
            </div>

            <div className="show-init">
              Ecrã inicial:    </div>
            <div className="image"> <img src={init} alt="ecrã-inicial" /> </div>

            <div className="show">
              Carregar dropdown via chamada API
              </div>
            <div className="image">  <img src={wait} alt="ecrã-inicial" /> </div>

            <div className="show">
              Lista carregada para seleção do item a pesquisar
            </div>
            <div className="image">  <img src={loadedList} alt="lista_selecao" /> </div>


            <div className="show">
              Chamada à API em execução para retornar informações sobre item pesquisado      </div>
            <div className="image"> <img src={chamadaAPiAndroid} alt="lista_selecao" /> </div>


            <div className="show">
              Resposta do servidor com as informações coletadas     </div>
            <div className="image">  <img src={respServidorAndroid} alt="lista_selecao" /></div>


          </div>





          <div className="col-sm" id="menu-ios">
            <div className="row">
              <h2>iOS</h2>
            </div>


            <div className="show-init">
              Ecrã inicial:  </div>
            <div className="image"><img src={initiOS} alt="ecrã-inicial" /></div>


            <div className="show">Carregar dropdown via chamada API</div>
            <div className="image"><img src={waitiOS} alt="ecrã-inicial" /></div>


            <div className="show">Lista carregada para seleção do item a pesquisar</div>
            <div className="image"><img src={loadedListiOS} alt="ecrã-inicial" /></div>


            <div className="show">Chamada à API em execução para retornar informações sobre item pesquisado</div>
            <div className="image"><img src={chamadaAPiiOS} alt="ecrã-inicial" /></div>

            <div className="show">Resposta do servidor com as informações coletadas</div>
            <div className="image"><img src={respServidoriOS} alt="ecrã-inicial" /></div>




          </div>
        </div>











      </div>


      <footer className="App-footer">        <a className="link-link"
        href="https://github.com/joanafpt"
        target="_blank"
        rel="noopener noreferrer"
      >Joana Teixeira</a>   </footer>
    </div>
  );
}

export default App;
