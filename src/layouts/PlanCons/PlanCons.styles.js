import styled from 'styled-components';

export const Container = styled.div`
    margin: 48px auto;
    align-items: center;
    padding: 0px;
    position: static;
    width: 1120px;
    height: 887px;
    left: 0px;
    top: 0px;
`;

export const Title = styled.div`
    position: static;
    width: 730px;
    height: 56px;
    left: calc(50% - 730px / 2);
    top: calc(50% - 56px / 2 + 14px);
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    color: #22222c;
`;

export const Subtitle = styled.div`
    position: static;
    width: 343px;
    height: 20px;
    left: calc(50% - 343px / 2);
    top: calc(50% - 20px / 2 - 32px);
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #22222c;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 352px;
    height: 771px;
    left: 0px;
    top: 0px;
    h3 {
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #22222c;
    }
    p {
        position: static;
        width: 352px;
        left: calc(50% - 352px / 2);
        top: 74.84%;
        bottom: 15.82%;
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #39353c;
        padding: 5px;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    left: 52.81%;
    right: 0.14%;
    top: 0%;
    bottom: 28.15%;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin: 0 auto;
    position: static;
    width: 730px;
    height: 84px;
`;

export const OrngText = styled.span`
    color: #ff9b4e;
`;

export const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
`;
