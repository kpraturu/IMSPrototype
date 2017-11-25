import React from  "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {SearchResults} from "./components/SearchResults";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/search/:searchString" render={(props)=><SearchResults searchString={props.match.params.searchString}/>}/>
                </div>
            </Router>
        );
    }
}

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

const styles = {}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

render(<App />, window.document.getElementById('app'));
