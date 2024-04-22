import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';
import { UserEntity } from '../../domain/entities/userEntities';
import {  AuthStatusEnum } from '../../infrastructure/interfaces/auth.status';
import { authLogin } from '../../actions/auth/auth';

import { StorageAdapter } from '../../config/adapters/storage-adapter';

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }: LoginPayload, thunkAPI) => {
  try {
    const resp = await authLogin(email, password);
    if (!resp) {
      throw new Error('Usuario no existe');
    } 
        await StorageAdapter.setItem('userToken', resp.token);
        await StorageAdapter.setItem('user', JSON.stringify(resp.user));

    return resp;
  } catch (error) {
    console.log('Error al iniciar sesión:', error);
    return thunkAPI.rejectWithValue(error);
  }

});
interface LoginPayload {
  email: string;
  password: string;
}
export interface AuthState {
  status: AuthStatusEnum;
  user?: UserEntity | null;
  userToken: string;
}

export const initialState: AuthState = {
  status: AuthStatusEnum.unauthenticated,
  user: null,
  userToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    logoutUser: (state) => {
      state.status = AuthStatusEnum.unauthenticated;
      state.user = {
        id: '',
        fullName: '',
        email: '',
        password: '',
        isActive: false,
      };
      state.userToken = '';
    },
  },
  extraReducers:  (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = AuthStatusEnum.loading;
      })
      .addCase(loginUser.fulfilled,   (state, action ) => {
        state.user = action.payload!.user;
        state.userToken = action.payload!.token;
        state.status = AuthStatusEnum.authenticated;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = AuthStatusEnum.unauthenticated;
        state.user = null;
        state.userToken = '';
      });
  },
});

export const {  logoutUser } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
