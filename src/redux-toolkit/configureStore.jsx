import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlide, { incrmentByVlaue } from "./counter/counterSlide";
import globalSlice from "./global/globalSlice";

// const loggerMidleware = (store) => (next) => (action) => {
//   console.log("action", action);
//   next(action);
// };

const store = configureStore({
  reducer: {
    counterSlide,
    globalSlice,
  },
  middleware: (gDM) => gDM().concat(logger),
});

// store.subscribe(() => {
//   console.log(`next state ${store.getState().counterSlide.count}`);
// });

store.dispatch(incrmentByVlaue(10));
store.dispatch(incrmentByVlaue(20));
export default store;
