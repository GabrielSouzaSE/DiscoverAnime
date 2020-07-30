import styled from 'styled-components';
import container from '../../tools/container';
import TagDiscoverAnime from '../TagDiscoveAnime';
import TitleDiscoverAnime from '../TitleDiscoverAnime';

export const Text = styled.div`
    padding-top: 10rem;
    max-width: 45%;

    ${TagDiscoverAnime} {
        margin-bottom: 40rem;
    }

    ${TitleDiscoverAnime} {
        margin-bottom: 20rem;
    }
`;

export const BannerDiscoverAnime = styled.section`
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70vh;
    height: 100vh;
`;
