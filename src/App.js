import React from 'react';
import HeaderDiscoverAnime from './components/HeaderDiscoverAnime'
import LogoDiscoverAnime from './components/LogoDiscoverAnime';
import ButtonDiscoverAnime from './components/ButtonDiscoverAnime';
import FooterDiscoverAnime from './components/FooterDiscoverAnime';
import LinkDiscoverAnime from './components/LinkDiscoverAnime';
import HighlightDiscoverAnime from './components/HighlightDiscoverAnime';

function App() {
  return (
    <>
      <HeaderDiscoverAnime> 
        <LogoDiscoverAnime /> 

        <ButtonDiscoverAnime>Novo vídeo</ButtonDiscoverAnime>
      </HeaderDiscoverAnime>

      <FooterDiscoverAnime>
        <LogoDiscoverAnime/>
        <p>
          Site feito na <HighlightDiscoverAnime>#ImersãoReact</HighlightDiscoverAnime> da <LinkDiscoverAnime href="https://alura.com.br">Alura</LinkDiscoverAnime>
        </p>
      </FooterDiscoverAnime>
    </>
  );
}

export default App;