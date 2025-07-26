import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "../src/utilities/slices/auth/AuthSlice.tsx";
import cartReducer from "../src/utilities/slices/product/cartSlice";
import { useSelector } from "react-redux";
// import cartReducer from "path-to-cartSlice";
const rootReducer = combineReducers({
    auth: AuthReducer,
    cart: cartReducer, // <-- add this
});

// If you want to persist the cart too:
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"], // <-- add "cart" here if desired
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };

const ShoppingCart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  // ...rest of your UI
};
