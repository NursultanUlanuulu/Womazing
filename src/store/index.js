import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import productDetalSlice from "./slices/productDetalSlice";
import backetSlice from "./slices/backetSlice";
import favoriteSlice from "./slices/favoriteSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer:{
        product:productSlice,
        detal:productDetalSlice,
        backet:backetSlice,
        favoirte:favoriteSlice,
        user:userSlice,
    }
})
export default store;