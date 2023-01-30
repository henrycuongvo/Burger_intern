import { put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import axios from 'axios';
import {
    GET_USER_INFO_FAIL,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from 'redux/reducers/user.reducer';

function* loginSaga(action) {
    try {
        const { data, callback } = action.payload;
        const checkUser = yield axios.get('http://localhost:4000/login');
        console.log('User', checkUser);
        if (data.email === 'abc@gmail.com' && data.password === 'abc') {
            const result = yield axios.post(
                'http://localhost:4000/login',
                data,
            );

            yield put({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    data: result.data.user,
                },
            });
            yield localStorage.setItem('accessToken', result.data.email);

            notification.success({
                message: 'Đăng nhập thành công',
            });

            // if (result.data?.user?.role === 'admin') {
            // yield callback.goToDashboard();
            // } else {

            yield callback.goToHome();
        } else {
            throw new Error('Incorrect password');
        }
    } catch (e) {
        yield put({
            type: USER_LOGIN_FAIL,
            payload: {
                error: 'Email hoặc mật khẩu không đúng!',
            },
        });
        if (
            ['Incorrect password', 'Cannot find user'].includes(e.response.data)
        ) {
            yield put({
                type: USER_LOGIN_FAIL,
                payload: {
                    error: 'Email hoặc mật khẩu không đúng!',
                },
            });
        } else {
            yield put({
                type: USER_LOGIN_FAIL,
                payload: {
                    error: 'Lỗi không xác định',
                },
            });
        }
    }
}
// function* logOutSaga(action) {
//     const callback = action.payload;
//     yield localStorage.removeItem('accessToken');
//     yield callback.goToHome();
// }
function* registerSaga(action) {
    try {
        const { data, callback } = action.payload;
        yield axios.post('http://localhost:4000/register', data);
        yield put({ type: USER_REGISTER_SUCCESS });
        yield callback.goToLogin();
    } catch (e) {
        console.log(e.response);
        if (e.response.data === 'Email already exists') {
            yield put({
                type: USER_REGISTER_FAIL,
                payload: {
                    error: 'Email đã tồn tại!',
                },
            });
        } else {
            yield put({
                type: USER_REGISTER_FAIL,
                payload: {
                    error: 'Lỗi không xác định',
                },
            });
        }
    }
}

function* getUserInfoSaga(action) {
    try {
        const { id } = action.payload;
        const result = yield axios.get(`http://localhost:4000/users/${id}`);
        yield put({
            type: GET_USER_INFO_SUCCESS,
            payload: {
                data: result.data,
            },
        });
    } catch (e) {
        yield put({
            type: GET_USER_INFO_FAIL,
            payload: {
                error: 'Lỗi không xác định',
            },
        });
    }
}

export default function* userSaga() {
    yield takeEvery(USER_LOGIN_REQUEST, loginSaga);
    yield takeEvery(USER_REGISTER_REQUEST, registerSaga);
    yield takeEvery(GET_USER_INFO_REQUEST, getUserInfoSaga);
    // yield takeEvery(REQUEST(USER_ACTION.LOGOUT), logOutSaga);
}
