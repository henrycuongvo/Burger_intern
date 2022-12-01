import { createSlice } from '@reduxjs/toolkit';

import { REQUEST, SUCCESS, FAIL } from 'redux/constans/actionType';
import { USER_ACTION } from 'redux/constans/user.constant';
const initialState = {
    userInfo: {
        data: {},
        loading: true,
        error: null,
        isAuthentical: {
            accessToken: true,
        },
    },
    loginData: {
        loading: false,
        error: null,
    },
    registerData: {
        loading: false,
        error: null,
    },
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //Handle Login

        [REQUEST(USER_ACTION.LOGIN)]: (state) => {
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    loading: true,
                    error: null,
                    accessToken: false,
                },
            };
        },
        [SUCCESS(USER_ACTION.LOGIN)]: (state, action) => {
            const { data } = action.payload;
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    data: data,
                    accessToken: true,
                },
                loginData: {
                    ...state.loginData,
                    loading: false,
                },
            };
        },
        [FAIL(USER_ACTION.LOGIN)]: (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    loading: false,
                    error: error,
                    accessToken: false,
                },
            };
        },

        //Handle Register

        [REQUEST(USER_ACTION.REGISTER)]: (state) => {
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    loading: true,
                    error: null,
                },
            };
        },
        [SUCCESS(USER_ACTION.REGISTER)]: (state, action) => {
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    loading: false,
                },
            };
        },
        [FAIL(USER_ACTION.REGISTER)]: (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    loading: false,
                    error: error,
                },
            };
        },

        [REQUEST(USER_ACTION.GET_USER_INFO)]: (state) => {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: true,
                    error: null,
                },
            };
        },
        [SUCCESS(USER_ACTION.GET_USER_INFO)]: (state, action) => {
            const { data } = action.payload;
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    data: data,
                    loading: false,
                },
            };
        },
        [FAIL(USER_ACTION.GET_USER_INFO)]: (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    error: error,
                },
            };
        },
    },
});

export default userReducer.reducer;
