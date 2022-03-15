import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: block;
`;

export const DiscountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 56px;
    left: 0px;
    top: 0px;
    background: #90caf9;
    p {
        position: absolute;
        width: 266px;
        height: 20px;
        left: calc(50% - 266px / 2 + 22px);
        top: calc(50% - 20px / 2);
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: #ffffff;
    }
`;

export const IconWrap = styled.div`
    position: absolute;
    width: 24x;
    height: 24px;
    left: calc(50% - 24px / 2 - 139px);
    top: calc(50% - 26px / 2);
`;

export const HeaderImage = styled.div`
    margin-bottom: 50px;
    margin-top: 100px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;
