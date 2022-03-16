import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
    ItemContainer,
    QuestionWrapper,
    Question,
    IconBox,
    Answer,
} from './Accordion.styles';

const AccordionItem = ({ question, answer, key }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <ItemContainer>
            <QuestionWrapper onClick={() => setIsActive(!isActive)}>
                <Question>{question}</Question>
                <IconBox>
                    <Icon
                        icon={isActive ? 'mdi-chevron-up' : 'mdi-chevron-down'}
                    />
                </IconBox>
            </QuestionWrapper>
            {isActive && <Answer>{answer}</Answer>}
        </ItemContainer>
    );
};

export default AccordionItem;
