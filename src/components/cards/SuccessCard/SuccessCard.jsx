import React from 'react';
import {
    Container,
    Wrapper,
    Title,
    Location,
    ImgBox,
    Text,
} from './SuccessCard.styles';
import StarRating from '../../starRating/StarRating';

const SuccessCard = (props) => {
    return (
        <Container>
            <Wrapper>
                <Title>{props.title}</Title>
                <Location>{props.location}</Location>
                <StarRating />
                <ImgBox>
                    <img src={props.img} alt={props.img} />
                </ImgBox>
                <Text>{props.text}</Text>
            </Wrapper>
        </Container>
    );
};

export default SuccessCard;
