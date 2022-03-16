import React, { useState } from 'react';
import ButtonComponent from '../../components/button/Button';
import ConsCard from '../../components/cards/ConsCard/ConsCard';
import PriceCard from '../../components/cards/PriceCard/PriceCard';
import {
    Container,
    PageTitle,
    LeftContainer,
    RightContainer,
    OrngText,
    Wrapper,
} from './PlanCons.styles';
import { ConsList } from '../../content/ConsList';
import payments from '../../assets/icons/payments.png';

const PlanCons = () => {
    return (
        <Container>
            <PageTitle>
                <p>
                    Over <strong>52 147</strong> plans ordered.
                </p>
                <h1>Get access to your yoga program now!</h1>
            </PageTitle>
            <Wrapper>
                <LeftContainer>
                    <h3>
                        Choose your plan and get{' '}
                        <OrngText>7 days free trial</OrngText>
                    </h3>
                    <PriceCard
                        title="6 month plan"
                        discount="50%"
                        price="$9.99"
                        month="/ month"
                        oldPrice="$119.94"
                        totalPrice="$59.94"
                        text="billed every 6 months"
                    />
                    <PriceCard
                        title="3 month plan"
                        price="$14.99"
                        month="/ month"
                        oldPrice="$59.97"
                        totalPrice="$44.97"
                        text="billed every 3 months"
                    />
                    <PriceCard
                        title="1 month plan"
                        price="$19.99"
                        month="/ month"
                        text="Billed monthly"
                    />
                    <ButtonComponent size="lg">Get your plan</ButtonComponent>
                    <p>
                        Your free trial will automatically become a paid
                        subscription on the 8th day after you begin your trial.
                        To cancel your subscription, please contact us at least
                        24 hours before the end of the trial period.
                    </p>
                    <p>
                        By choosing a payment method you agree to the{' '}
                        <a href="@">T&Cs</a> and <a href="@">Privacy Policy</a>
                    </p>
                    <div>
                        <img src={payments} alt="payments" />
                    </div>
                </LeftContainer>
                <RightContainer>
                    <h3>What's in my program?</h3>
                    {ConsList.map((item, index) => (
                        <ConsCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </RightContainer>
            </Wrapper>
        </Container>
    );
};

export default PlanCons;
