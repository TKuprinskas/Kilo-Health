import React from 'react';
import './PriceCard.css';
import { Icon } from '@iconify/react';

const PriceCard = (props) => {
    return (
        <div className={props.styleClass}>
            <div className="price-card-wrapper">
                <div className="price-card__header">
                    <div className="price-card__header__title">
                        {props.title}
                    </div>
                    <div className={props.discountStyle}>{props.discount}</div>
                </div>
                <div className="price-card__body">
                    <div className="price-card__body__price">{props.price}</div>
                    <div className="price-card__body__month">{props.month}</div>
                </div>
                <div className="price-card__footer">
                    <div className="price-card__body__old-price">
                        {props.oldPrice}
                    </div>
                    <div className="price-card__body__total-price">
                        {props.totalPrice}
                    </div>
                    <div className="price-card__body__text">{props.text}</div>
                </div>
            </div>
            <div className={props.iconStyle}>
                <Icon icon={props.icon} color={props.color} />
            </div>
        </div>
    );
};

export default PriceCard;
