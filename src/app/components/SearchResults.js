import React from "react";
import PropTypes from "prop-types";

export class SearchResults extends React.Component {

    render() {
        return (
            <div>
                <h1>LOL</h1>
                <h1>{this.props.searchString}</h1>
            </div>
        );
    }
}

SearchResults.propTypes = {
    searchString: PropTypes.string,
};
