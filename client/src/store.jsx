// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import cartReducer from "./CartSlice";
// import favouriteReducer from "./FavourtieSlice"

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

// const store =configureStore({

//     reducer:{
//         mycart:persistedReducer,
//         myfavourite:favouriteReducer
//     }
// })

// export default store;export const persistor = persistStore(store);








import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./CartSlice";
import favouriteReducer from "./FavourtieSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    mycart: persistedCartReducer,
    myfavourite: favouriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions that are non-serializable
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);






