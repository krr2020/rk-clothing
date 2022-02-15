import { all, call } from "redux-saga/effects";
import { onFetchCollectionsStart } from "./shop/sagas";
import { userSagas } from "./user/sagas";

export default function* rootSaga() {
	yield all([call(onFetchCollectionsStart), call(userSagas)]);
}
