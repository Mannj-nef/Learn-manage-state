import { watchGetNews } from "./hackNews/newsSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([watchGetNews()]);
}

export default rootSaga;
