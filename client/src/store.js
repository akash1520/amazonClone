import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import productReducer from './features/product/productSlice';
// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    product:productReducer
  }
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})
export default store;