import styled from 'styled-components';

export const Container = styled.div`
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    position: static;
    width: 319px;
    height: 607px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
    border-radius: 16px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 287px;
    height: 575px;
    left: 16px;
    top: 16px;
`;

export const Title = styled.div`
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #22222c;
    mix-blend-mode: normal;
`;

export const Location = styled.div`
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #22222c;
    mix-blend-mode: normal;
    opacity: 0.64;
`;

export const ImgBox = styled.div`
    margin-top: 5px;
`;

export const Text = styled.div`
    margin-top: 10px;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #22222c;
    mix-blend-mode: normal;
`;
