import { actionCreator } from '@/utils';

import * as CONSTANTS from './core.constants';

import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { AxiosResponse } from 'axios';


const action = actionCreator(CONSTANTS.MODULE_NAME);

export const checkAuth = action(CONSTANTS.CHECK_AUTH);
export const setAuthLoading = action(CONSTANTS.SET_AUTH_LOADER);