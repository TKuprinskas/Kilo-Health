import React from 'react';
import {
    Container,
    IconDiv,
    ContentDiv,
    Title,
    Subtitle,
} from './ConsCard.styles';

export const ConsCard = (props) => {
    return (
        <Container>
            <IconDiv>
                <img src={props.icon} alt="icon" />
            </IconDiv>
            <ContentDiv>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
            </ContentDiv>
        </Container>
    );
};

export default ConsCard;
