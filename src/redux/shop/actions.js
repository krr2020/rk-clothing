import shopActionTypes from "./constants";

export const updateCollections = (collectionsMap) => {
	return {
		type: shopActionTypes.UPDATE_COLLECTIONS,
		payload: collectionsMap,
	};
};
