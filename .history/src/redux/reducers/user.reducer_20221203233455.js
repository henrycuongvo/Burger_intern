import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {
        data: {},
        loading: true,
        error: null,
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

        USER_LOGIN_REQUEST: (state) => {
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    loading: true,
                    error: null,
                },
            };
        },
        USER_LOGIN_SUCCESS: (state, action) => {
            const { data } = action.payload;
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    data: data,
                },
                loginData: {
                    ...state.loginData,
                    loading: false,
                },
            };
        },
        USER_LOGIN_FAIL: (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    loading: false,
                    error: error,
                },
            };
        },

        //Handle Register

        USER_REGISTER_REQUEST: (state) => {
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    loading: true,
                    error: null,
                },
            };
        },
        USER_REGISTER_SUCCESS: (state, action) => {
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    loading: false,
                },
            };
        },
        USER_REGISTER_FAIL: (state, action) => {
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

        GET_USER_INFO_REQUEST: (state) => {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: true,
                    error: null,
                },
            };
        },
        GET_USER_INFO_SUCCESS: (state, action) => {
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
        GET_USER_INFO_FAIL: (state, action) => {
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
export const {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,
} = userReducer.actions;

export default userReducer.reducer;
