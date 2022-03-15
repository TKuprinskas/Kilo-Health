import React from 'react';
import {
    Container,
    DiscountContainer,
    HeaderImage,
    IconWrap,
} from './Header.styles';
import { Icon } from '@iconify/react';

const Header = (props) => {
    return (
        <Container>
            <DiscountContainer>
                <IconWrap>
                    <Icon icon={props.icon} color={props.color} />
                </IconWrap>
                <div>
                    <p>{props.text}</p>
                </div>
            </DiscountContainer>
            <HeaderImage>
                <img src={props.image} alt="header" />
            </HeaderImage>
        </Container>
    );
};

export default Header;
