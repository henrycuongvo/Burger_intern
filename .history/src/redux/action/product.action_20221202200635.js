import { createAction } from '@reduxjs/toolkit';
import { PRODUCT_ACTION, REQUEST, SUCCESS } from 'redux/constans';

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
export const getProductListAction = createAction(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
);
