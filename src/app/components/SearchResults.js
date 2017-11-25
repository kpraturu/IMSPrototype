import React from "react";
import PropTypes from "prop-types";

import {SearchBar} from "./SearchBar";

export class SearchResults extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <h1>{this.props.searchString}</h1>
            </div>
        );
    }
}

SearchResults.propTypes = {
    searchString: PropTypes.string
};
