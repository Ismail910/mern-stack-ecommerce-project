
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authService from "./services/authService";
import authReducer from "./reducers/authreducer";
import categoryService from "./services/categoryService";
import globalReducer from "./reducers/globalReducer";
const Store =  configureStore({
    reducer:{
        [authService.reducerPath]: authService.reducer,
        [categoryService.reducerPath]: categoryService.reducer,
        "authReducer": authReducer,
        "globalReducer": globalReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authService.middleware, categoryService.middleware]), 
});
setupListeners(Store.dispatch);
export default Store;