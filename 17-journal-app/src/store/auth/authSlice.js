import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'checking', // 'checking' | 'authenticated' | 'not-authenticated'
      uid: null,
      email: null,
      diplayName: null,
      photoURL: null,
      errorMessage: null
    },
    reducers: {
      login: (state, action) => {

      },
      logout: (state, payload) => {
      
      },
      checkingCredentials: (state) => {
        state.status = 'checking';
      }
    }
});

export const { login, logout, checkingCredentials } =  authSlice.actions;