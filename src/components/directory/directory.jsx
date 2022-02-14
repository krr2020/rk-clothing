import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/selectors";

import "./styles.scss";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapstateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapstateToProps, null)(Directory);
