import { configureStore } from '@reduxjs/toolkit'
import { mainSlice } from './main/mainSlice'
import { authSlice } from './auth/authSlice'

export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        main: mainSlice.reducer,
    }
})