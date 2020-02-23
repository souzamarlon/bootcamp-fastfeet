import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Package from '../pages/Package';
import Deliverer from '../pages/Deliverer';
import Recipient from '../pages/Recipient';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/packages" exact component={Package} isPrivate />
            <Route path="/deliverers" exact component={Deliverer} isPrivate />
            <Route path="/recipients" exact component={Recipient} isPrivate />
        </Switch>
    );
}
