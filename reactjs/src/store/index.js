
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authService from "./services/authService";
import authReducer from "./reducers/authreducer";

const Store =  configureStore({
    reducer:{
        [authService.reducerPath]: authService.reducer,
        "authReducer": authReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware), 
});
setupListeners(Store.dispatch);
export default Store;