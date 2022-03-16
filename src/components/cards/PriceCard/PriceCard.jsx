import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
    Container,
    IconDiv,
    Header,
    HeaderTitle,
    HeaderDiscount,
    Wrapper,
    Body,
    BodyPrice,
    BodyMonth,
    Footer,
    FooterOldPrice,
    FooterTotalPrice,
    FooterText,
} from './PriceCard.styles';

const PriceCard = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <Container onClick={handleClick} border={selected}>
            <Wrapper>
                <Header>
                    <HeaderTitle>{props.title}</HeaderTitle>
                    <HeaderDiscount display={props.discount}>
                        Save {props.discount}
                    </HeaderDiscount>
                </Header>
                <Body>
                    <BodyPrice>{props.price}</BodyPrice>
                    <BodyMonth>{props.month}</BodyMonth>
                </Body>
                <Footer>
                    <FooterOldPrice>{props.oldPrice}</FooterOldPrice>
                    <FooterTotalPrice>{props.totalPrice}</FooterTotalPrice>
                    <FooterText>{props.text}</FooterText>
                </Footer>
            </Wrapper>
            <IconDiv style={{ opacity: selected ? '1' : '0.08' }}>
                <Icon
                    icon={selected ? 'mdi:check-circle' : 'mdi:circle'}
                    color={selected ? '#ff9b4e' : '#000000'}
                    width="26"
                    height="26"
                />
            </IconDiv>
        </Container>
    );
};

export default PriceCard;
