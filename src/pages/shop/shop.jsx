import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "./../../firebase/utils";
import { updateCollections } from "../../redux/shop/actions";
import withSpinner from "../../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);

				updateCollections(collectionsMap);
				this.setState({ loading: false });
			}
		);
	}

	render() {
		const { loading } = this.state;
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const maspDispatchToProps = (dispatch) => {
	return {
		updateCollections: (collections) =>
			dispatch(updateCollections(collections)),
	};
};

export default connect(null, maspDispatchToProps)(ShopPage);
