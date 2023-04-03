import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import productReducer from './features/product/productSlice';
import prodReducer from './features/product/prodSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth:persistedReducer,
    product:productReducer,
    productx:prodReducer
  }
});

export const persistor = persistStore(store);



// import { configureStore } from '@reduxjs/toolkit'
// import productReducer from './features/product/productSlice';
// import prodReducer from './features/product/prodSlice';

// // const logger = reduxLogger.createLogger()

// const store = configureStore({
//   reducer: {
//     product:productReducer,
//     productx:prodReducer
//   }
//   // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
// })
// export default store;