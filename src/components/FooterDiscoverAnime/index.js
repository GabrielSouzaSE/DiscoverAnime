import styled from 'styled-components';
import LogoDiscoverAnime from '../LogoDiscoverAnime';

const FooterDiscoverAnime = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 20rem 0;
    border-top: 4px solid var(--color-primary-medium);

    & > ${LogoDiscoverAnime} {
        margin-bottom: 15rem;
    }
`;

export default FooterDiscoverAnime;