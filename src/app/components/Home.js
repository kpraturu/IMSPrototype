import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            advancedSection: (<h1>HI</h1>),
            normalSearch: true,
            advancedButton: "glyphicon glyphicon-menu-down"
        };
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
                <div className="input-group" id="searchBar">
                  <input id="search" type="search" className="form-control transparent-input" placeholder="Search"/>
                    <span className="input-group-btn">
                      <button id="submit" className="btn btn-secondary" type="button">
                          <span className="glyphicon glyphicon-search"></span>
                      </button>
                      <button id="advancedSearch" className="btn btn-secondary" type="button" onClick={this.toggleSearch.bind(this)}>
                          <span className={this.state.advancedButton} id="navItem"></span>
                      </button>
                    </span>
                </div>
                <div>
                    {this.state.advancedSection}
                </div>
            </div>
        );
    }
}
