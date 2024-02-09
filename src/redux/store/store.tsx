import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authslice';


export const store = configureStore({
    reducer: {
        authRoot:authReducer
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
