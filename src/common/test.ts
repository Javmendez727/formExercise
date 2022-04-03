import { AnyAction } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';

export const mockStore = configureMockStore<{}, AnyAction, ThunkDispatch<{}, unknown, AnyAction>> ([thunk]);
