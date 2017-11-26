import React from "react";
import PropTypes from "prop-types";

import {SearchBar} from "./SearchBar";

export class SearchResults extends React.Component {
    render() {
        return (
            <div>
                <SearchBar barStyle={styles.searchBar} history={this.props[0].history}/>
                <h1>{this.props[0].match.params.searchString}</h1>
            </div>
        );
    }
}

SearchResults.propTypes = {
    searchString: PropTypes.string,
    history: PropTypes.object
};

const styles = {};
styles.searchBar = {
    margin: '0 auto',
    width: '30em',
    paddingTop: '2em'
}
