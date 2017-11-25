import React from "react";
import {Link} from "react-router-dom";


//require("css!./css/Header.css");

export const Header = () => {
    return (
        <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">

                <ul className="nav navbar-nav">
                    <li><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
                    <li><Link to={"/"}>Search</Link></li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Manage<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/ManageAttributes">Attributes</Link></li>
                        <li><Link to="/ManageEquipment">Equipment</Link></li>
                        <li><Link to="/ManageEquipmentTypes">Equipment Types</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Configure<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/ManageAttributes">EditAttributes</Link></li>
                        <li><Link to="/ManageEquipment">EditEquipment</Link></li>
                        <li><Link to="/ManageEquipmentTypes">EditEquipment Types</Link></li>
                      </ul>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/Logout"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                </ul>

            </div>
        </nav>
    );
};
