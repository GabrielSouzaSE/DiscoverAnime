import React from 'react';
import { BannerDiscoverAnime, Text }from './components/BannerDiscoverAnime';
import { HeaderDiscoverAnime, Wrapper } from './components/HeaderDiscoverAnime'
import LogoDiscoverAnime from './components/LogoDiscoverAnime';
import ButtonDiscoverAnime from './components/ButtonDiscoverAnime';
import FooterDiscoverAnime from './components/FooterDiscoverAnime';
import LogoImersao from './components/LogoImersao';
import TagDiscoverAnime from './components/TagDiscoveAnime';
import TitleDiscoverAnime from './components/TitleDiscoverAnime';
import DescriptionDiscoverAnime from './components/DescriptionDiscoverAnime';
import ThumbDiscoverAnime from './components/ThumbDiscoverAnime';
import Yuyuhakusho from './assets/img/Yuyuhakusho.png';
import Yuyu from './assets/img/Yuyu.png';

function App() {
  return (
    <>
      <HeaderDiscoverAnime>
        <Wrapper>
          <LogoDiscoverAnime /> 

          <ButtonDiscoverAnime as="a" href="/video/new">Novo vídeo</ButtonDiscoverAnime>
        </Wrapper>
      </HeaderDiscoverAnime>

      <BannerDiscoverAnime>
        <Text>
          <TagDiscoverAnime>Yu Yu Hakusho</TagDiscoverAnime>
          <TitleDiscoverAnime>Ep 01 - A Morte - (Dublado PT-BR)</TitleDiscoverAnime>
          <DescriptionDiscoverAnime>
            A série conta a história de Yusuke Urameshi, um bad boy que morreu atropelado ao tentar salvar uma criança. Como seu ato foi inesperado por todos, principalmente pelo Mundo Espiritual, Yusuke teve a chance de voltar a viver quando decidiu salvar uma amiga de infância em troca de seu retorno ao Ningenkai. Ao retornar à vida na Terra, descobre que uma condição para o seu retorno era a de se tornar um Detetive Sobrenatural. Devendo se dedicar a combater os demônios do Mundo das Trevas que por um acaso venham a se infiltrar no Mundo dos Homens.
          </DescriptionDiscoverAnime>
        </Text>

        <ThumbDiscoverAnime 
        src={Yuyuhakusho}
        alt="Yu Yu Hakusho"
        title="Yu Yu Hakusho - Ep 01"
        avatar={Yuyu}
        channelName="MundoAFKTube"
        timer="23:31"
        ></ThumbDiscoverAnime>

      </BannerDiscoverAnime>

      <FooterDiscoverAnime>
        <LogoDiscoverAnime/>
        <p>
          Site feito na <a href="https://alura.com.br"><LogoImersao/></a>
        </p>
      </FooterDiscoverAnime>
    </>
  );
}

export default App;