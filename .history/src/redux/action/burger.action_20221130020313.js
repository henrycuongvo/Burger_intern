import { createAction } from '@reduxjs/toolkit';
import { REQUEST } from 'redux/constans';

export const LessBurger = (burger) => {
    return {
        type: 'LESS_BURGER',
        payload: burger,
    };
};
export const MoreBurger = (burger) => {
    return {
        type: 'MORE_BURGER',
        payload: burger,
    };
};
export const createProductAction = createAction(
    REQUEST(PRODUCT_ACTION.CREATE_PRODUCT),
);
