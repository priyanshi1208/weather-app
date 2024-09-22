import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weatherReducer'
import logger from 'redux-logger'


export default configureStore({
    reducer: {
       weather : weatherReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger)
})