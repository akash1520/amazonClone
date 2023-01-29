import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import productReducer from './features/product/productSlice';
import prodReducer from './features/product/prodSlice';


// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    product:productReducer,
    productx:prodReducer
  }
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})
export default store;