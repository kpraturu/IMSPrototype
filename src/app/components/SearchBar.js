import React from "react";
import PropTypes from "prop-types";
require("../css/HomeStyle.css");

export const SearchBar = (props) => {
    return (
        <form onSubmit={props.searchButtonClicked}>
            <div className="input-group" id="searchBar">
              <input id="search" type="search" className="form-control transparent-input" placeholder="Search" onChange={props.onHandleSearchChange}/>
                <span className="input-group-btn">
                  <button id="submit" className="btn btn-secondary" type="button" onClick={props.searchButtonClicked}>
                      <span className="glyphicon glyphicon-search"></span>
                  </button>
                  <button id="advancedSearch" className="btn btn-secondary" type="button" onClick={props.toggleSearch}>
                      <span className={props.advancedButtonIcon} id="navItem"></span>
                  </button>
                </span>
            </div>
        </form>
    );
}

SearchBar.propTypes = {
    searchButtonClicked: PropTypes.func,
    onHandleSearchChange: PropTypes.func,
    toggleSearch: PropTypes.func,
    advancedButtonIcon: PropTypes.string
};
