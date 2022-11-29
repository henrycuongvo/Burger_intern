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
