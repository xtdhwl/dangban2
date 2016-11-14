/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

import AppManagerPage from './page/AppManagerPage.js';

import less from './app.less';

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }


    render() {
        return (
            <di>
                <Link to="/AppManagerPage">
                    <button>app管理页面</button>
                </Link>
            </di>
        );
    }
}

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};



var Routers = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
        <Route path="/AppManagerPage" component={AppManagerPage}/>

    </Router>
);
export default Routers;