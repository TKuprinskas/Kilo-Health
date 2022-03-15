import React from 'react';
import './ConsCard.css';

export const ConsCard = (props) => {
    return (
        <div className="cons-card-container">
            <div className="cons-card-icon">
                <img src={props.icon} alt="icon" />
            </div>
            <div className="cons-card-wrapper">
                <div className="cons-card-title">{props.title}</div>
                <div className="cons-card-subtitle">{props.subtitle}</div>
            </div>
        </div>
    );
};

export default ConsCard;
