import React from 'react';
import {
    Container,
    DiscountContainer,
    HeaderImage,
    IconWrap,
} from './Header.styles';
import { Icon } from '@iconify/react';
import logo from '../../assets/icons/Logo.png';

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
                <div>
                    {' '}
                    <img src={logo} alt="header" />
                </div>
            </HeaderImage>
        </Container>
    );
};

export default Header;
