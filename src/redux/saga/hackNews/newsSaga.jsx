import { put, takeLatest, call, select } from "redux-saga/effects";
import {
  getNews,
  setLoading,
  setNews,
} from "../../redux-toolkit/hackNews/hackNewsReducer";
import { fetchNewData } from "./reqestsApi";

function* handleHackNews() {
  const newsQuery = yield select((state) => state.hackNewsReducre.queryNew);
  yield put(setLoading(true));
  try {
    const requests = yield call(
      fetchNewData,
      newsQuery ? newsQuery : "reactjs"
    );
    const { hits } = requests.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {}
}

export function* watchGetNews() {
  yield takeLatest(getNews, handleHackNews);
}
