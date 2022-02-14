import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/selectors";

import { DirectoryMenuContainer } from "./styles";

const Directory = ({ sections }) => (
	<DirectoryMenuContainer>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenuContainer>
);

const mapstateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapstateToProps, null)(Directory);
