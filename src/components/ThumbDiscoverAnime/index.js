import React from 'react';
import { Background, WrapperThumb, Thumb, Title, Timer } from './styles';
import AvatarDiscoverAnime from '../AvatarDiscoverAnime';


function ThumbDiscoverAnime({ src, alt, avatar, channelName, title, timer }) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarDiscoverAnime photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
                <Timer>{timer}</Timer>
            </WrapperThumb>
        </Background>

    );
}

export default ThumbDiscoverAnime;