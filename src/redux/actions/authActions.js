import { isUserValid } from '../../commons/auth';
import { history } from '../../commons/utils';

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const requestLogin = () => ({ type: LOGIN })
export const requestLoginSuccess = username => ({ type: LOGIN_SUCCESS, payload: username })
export const requestLoginFailure = () => ({ type: LOGIN_FAILURE })

export const LOGOUT = 'LOGIN'
export const requestLogout = () => ({ type: LOGOUT })

export function doLogin(username, password) {
      return dispatch => {
            dispatch(requestLogin({ username }));

            if (isUserValid(username, password)) {
                  dispatch(requestLoginSuccess(username));
                  localStorage.setItem('username', JSON.stringify(username));
                  history.push('/');
            } else {
                  dispatch(requestLoginFailure());
            }
      };
}

export function doLogout() {
      return dispatch => {
            dispatch(requestLogout());
            localStorage.removeItem('username');
            history.push('/login');
            window.location.reload();
      };
}