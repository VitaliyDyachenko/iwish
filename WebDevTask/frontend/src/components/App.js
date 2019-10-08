import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Header from './layout/Header';
import Users from './users/Users';
import Form_add from './forms/Form_add'
import Form_edit from './forms/Form_edit'
import Form_delete from './forms/Form_delete'


    const routing = (
        <Router>
        <div className="container">
            <Route path="/" component={Header} />
            <Route exact path="/" component={Users} />
            <Route exact path="/add_user" component={Form_add} />
            <Route exact path="/edit_user" component={Form_edit} />
            <Route exact path="/delete_user" component={Form_delete} />
        </div>
        </Router>
        )

ReactDOM.render( routing , document.getElementById('app'));