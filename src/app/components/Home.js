import React from "react";
import PropTypes from "prop-types";
require("../css/HomeStyle.css");

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            advancedSection: (<h1>HI</h1>),
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
                advancedSection: (<h1>HI</h1>),
                normalSearch: false,
                advancedButton: "glyphicon glyphicon-menu-up"
            });
        } else {
            this.setState({
                advancedSection: (<h1>BYE</h1>),
                normalSearch: true,
                advancedButton: "glyphicon glyphicon-menu-down"
            });
        }
    }

    render() {
        return (
            <div>
                <h1 id="imsTitle">Inventory Management System</h1>
                <form onSubmit={(event) => this.searchButtonClicked(event)}>
                    <div className="input-group" id="searchBar">
                      <input id="search" type="search" className="form-control transparent-input" placeholder="Search" onChange={(event) => this.onHandleSearchChange(event)}/>
                        <span className="input-group-btn">
                          <button id="submit" className="btn btn-secondary" type="button" onClick={(event) => this.searchButtonClicked(event)}>
                              <span className="glyphicon glyphicon-search"></span>
                          </button>
                          <button id="advancedSearch" className="btn btn-secondary" type="button" onClick={this.toggleSearch.bind(this)}>
                              <span className={this.state.advancedButton} id="navItem"></span>
                          </button>
                        </span>
                    </div>
                </form>
                <div>
                    {this.state.advancedSection}
                </div>
            </div>
        );
    }
}
