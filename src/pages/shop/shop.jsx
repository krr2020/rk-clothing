import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/container";
import CollectionPageContainer from "../collection/container";

import { fetchCollectionsStart } from "../../redux/shop/actions";

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollections } = this.props;

		fetchCollections();
	}

	render() {
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route
					exact
					path={match.path}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const maspDispatchToProps = (dispatch) => {
	return {
		fetchCollections: () => dispatch(fetchCollectionsStart()),
	};
};

export default connect(null, maspDispatchToProps)(ShopPage);
