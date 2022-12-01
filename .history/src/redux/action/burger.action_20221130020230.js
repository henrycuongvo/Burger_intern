import { createAction } from '@reduxjs/toolkit';
import { REQUEST } from 'redux/constans';
import { PRODUCT_ACTION } from 'redux/constans/burger.constant';

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
