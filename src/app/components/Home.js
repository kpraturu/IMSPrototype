import React from "react";
import PropTypes from "prop-types";
require("../css/HomeStyle.css");

import {SearchBar} from "./SearchBar";
import {AdvancedSearchOptions} from "./AdvancedSearchOptions";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            advancedSection: (""),
            normalSearch: true,
            advancedButton: "glyphicon glyphicon-menu-down",
            searchString: ""
        };
        console.log(this.state.searchString);
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

    render() {
        return (
            <div>
                <h1 id="imsTitle">Inventory Management System</h1>
                <SearchBar searchButtonClicked= {(event)=>this.searchButtonClicked(event)}
                    onHandleSearchChange = {(event)=>this.onHandleSearchChange(event)}
                    toggleSearch = {this.toggleSearch.bind(this)}
                    advancedButtonIcon= {this.state.advancedButton}/>
                {this.state.advancedSection}
            </div>
        );
    }
}
