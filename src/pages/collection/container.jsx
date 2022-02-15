import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionLoaded } from "../../redux/shop/selectors";
import withSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "./collection";

const mapStateToProps = createStructuredSelector({
	isCollectionLoaded: selectIsCollectionLoaded,
});

const CollectionPageContainer = compose(
	connect(mapStateToProps, null),
	withSpinner
)(CollectionPage);

export default CollectionPageContainer;
