// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";  // Correct import name

const store = configureStore({
  reducer: rootReducer,
});

export default store;
