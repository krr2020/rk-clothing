import shopActionTypes from "./constants";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "./../../firebase/utils";

export const fetchCollectionsStart = () => ({
	type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailure = (errMsg) => ({
	type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errMsg,
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then(async (snapshot) => {
				const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);

				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch((error) => {
				dispatch(fetchCollectionsFailure(error.message));
			});
	};
};
