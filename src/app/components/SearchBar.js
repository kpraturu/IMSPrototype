import React from "react";
import PropTypes from "prop-types";
require("../css/SearchBarStyle.css");

import {AdvancedSearchOptions} from "./AdvancedSearchOptions";

export class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            advancedSection: (""),
            normalSearch: true,
            advancedButton: "glyphicon glyphicon-menu-down",
            searchString: ""
        };
    }

    onHandleSearchChange(event) {
        this.setState({
            searchString: event.target.value
        });
    }

    searchButtonClicked(event) {
        if (this.state.searchString !== "") {
            this.props.history.push("/search/"+this.state.searchString);
        }
        event.preventDefault();
    }

    toggleSearch() {
        if (this.state.normalSearch) {
            this.setState({
                advancedSection: (
                    <div>
                        <hr id="advancedHR"/>
                        <AdvancedSearchOptions/>
                    </div>
                ),
                normalSearch: false,
                advancedButton: "glyphicon glyphicon-menu-up"
            });
        } else {
            this.setState({
                advancedSection: (""),
                normalSearch: true,
                advancedButton: "glyphicon glyphicon-menu-down"
            });
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={(event) =>this.searchButtonClicked(event)}>
                    <div className="input-group" style={this.props.barStyle}>
                      <input id="search" type="search" className="form-control transparent-input" placeholder="Search" onChange={(event) => this.onHandleSearchChange(event)}/>
                        <span className="input-group-btn">
                          <button id="submit" className="btn btn-secondary" type="button" onClick={(event) =>this.searchButtonClicked(event)}>
                              <span className="glyphicon glyphicon-search"></span>
                          </button>
                          <button id="advancedSearch" className="btn btn-secondary" type="button" onClick={this.toggleSearch.bind(this)}>
                              <span className={this.state.advancedButton} id="navItem"></span>
                          </button>
                        </span>
                    </div>
                </form>
                {this.state.advancedSection}
            </div>
        );
    }
}

SearchBar.propTypes = {
    barStyle: PropTypes.object,
    history: PropTypes.object
};
