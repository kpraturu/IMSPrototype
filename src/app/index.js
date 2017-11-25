import React from  "react";
import { render } from "react-dom";
import {browserHistory} from "react-router";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from "./components/Home";
import {Header} from "./components/Header";

class App extends React.Component {
    render() {
        return (
            <Router>
              <div>
                  <Header/>

                <Route exact path="/" component={Home}/>
              </div>
            </Router>
        );
    }
}
// <Route path="/topics" component={Topics}/>

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
