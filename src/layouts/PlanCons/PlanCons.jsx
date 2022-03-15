import React from "react";
import ButtonComponent from "../../components/button/Button";
import ConsCard from "../../components/cards/ConsCard/ConsCard";
import PriceCard from "../../components/cards/PriceCard/PriceCard";
import {
  Container,
  PageTitle,
  LeftContainer,
  RightContainer,
  OrngText,
  Wrapper,
} from "./PlanCons.styles";
import tasks from "../../assets/icons/tasks.png";
import shoe from "../../assets/icons/shoe.png";
import bookcheck from "../../assets/icons/bookcheck.png";
import diet from "../../assets/icons/diet.png";
import exercise from "../../assets/icons/exercise.png";
import smartwatch from "../../assets/icons/smartwatch.png";
import whistle from "../../assets/icons/whistle.png";
import payments from "../../assets/icons/payments.png";

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
            Choose your plan and get <OrngText>7 days free trial</OrngText>
          </h3>
          <PriceCard
            title="6 month plan"
            discount="Save 50%"
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
            Your free trial will automatically become a paid subscription on the
            8th day after you begin your trial. To cancel your subscription,
            please contact us at least 24 hours before the end of the trial
            period.
          </p>
          <p>
            By choosing a payment method you agree to the <a href="@">T&Cs</a>{" "}
            and <a href="@">Privacy Policy</a>
          </p>
          <div>
            <img src={payments} alt="payments" />
          </div>
        </LeftContainer>
        <RightContainer>
          <h3>What's in my program?</h3>
          <ConsCard
            icon={tasks}
            title="A personalized yoga program"
            subtitle="Completely safe and focused on your key goals"
          />
          <ConsCard
            icon={exercise}
            title="Easy & enjoyable yoga workouts for your level"
            subtitle="Program adjusts to your level and pace"
          />
          <ConsCard
            icon={shoe}
            title="No special preparation needed"
            subtitle="Perfect for begginners! Requires no special preparation or equipment"
          />
          <ConsCard
            icon={diet}
            title="Daily motivation & accountability"
            subtitle="Track your progress, develop a healthy routine, reach goals faster"
          />
          <ConsCard
            icon={whistle}
            title="Browse from various yoga challenges"
            subtitle="30 d morning yoga, mindful yoga, back flexibility challenge, and more!"
          />
          <ConsCard
            icon={smartwatch}
            title="Easy access on any device"
            subtitle="Do your yoga anywhere across all types of devices"
          />
          <ConsCard
            icon={bookcheck}
            title="A complete guide to get started"
            subtitle="Best tips, guidelines, advice, and recommendations for successful practice"
          />
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default PlanCons;
