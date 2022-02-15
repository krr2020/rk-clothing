import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/selectors";
import withSpinner from "../with-spinner/with-spinner";
import CollectionsOverview from "./collections-overview";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps, null),
	withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
