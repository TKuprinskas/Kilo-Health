import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 48px;
    position: static;
    width: 736px;
    margin-bottom: 20px;
`;

export const ItemContainer = styled.div`
    padding: 16px;
    margin-bottom: 8px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    border-radius: 16px;
`;

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
`;

export const Question = styled.div`
    position: static;
    width: 664px;
    height: 24px;
    left: 16px;
    top: 16px;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
    color: #212121;
`;

export const IconBox = styled.div``;

export const Answer = styled.div`
    position: static;
    width: 704px;
    height: 60px;
    left: 16px;
    top: 0px;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #212121;
    mix-blend-mode: normal;
`;

export const Title = styled.div`
    position: static;
    width: 736px;
    left: calc(50% - 736px / 2);
    top: 0%;
    bottom: 91.21%;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #22222c;
    margin-bottom: 8px;
`;

export const BtnDiv = styled.div`
    text-align: center;
    margin-top: 48px;
    margin-bottom: 48px;
`;
