import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import hackNewsReducre from "./redux-toolkit/hackNews/hackNewsReducer";
import createSagaMiddlewere from "redux-saga";
import rootSaga from "./saga/rootSage";

const sagaMiddlewere = createSagaMiddlewere();

const store = configureStore({
  reducer: {
    hackNewsReducre,
  },
  // middleware: (gDM) => gDM().concat(logger, sagaMiddlewere),
  middleware: (gDM) => gDM().concat(sagaMiddlewere),
});

sagaMiddlewere.run(rootSaga);

export default store;
