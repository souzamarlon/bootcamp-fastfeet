import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Package from '../pages/Package';
import NewPackage from '../pages/Package/NewPackage';

import Deliverer from '../pages/Deliverer';
import NewDeliverer from '../pages/Deliverer/NewDeliverer';
import EditDeliverer from '../pages/Deliverer/EditDeliverer';

import Recipient from '../pages/Recipient';
import NewRecipient from '../pages/Recipient/NewRecipient';

import Problem from '../pages/Problem';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/packages" exact component={Package} isPrivate />
            <Route path="/newpackages" exact component={NewPackage} isPrivate />

            <Route path="/deliverers" exact component={Deliverer} isPrivate />
            <Route
                path="/newdeliverer"
                exact
                component={NewDeliverer}
                isPrivate
            />
            <Route
                path="/editdeliverer/:id"
                exact
                component={EditDeliverer}
                isPrivate
            />
            <Route path="/recipients" exact component={Recipient} isPrivate />
            <Route
                path="/newrecipient"
                exact
                component={NewRecipient}
                isPrivate
            />

            <Route path="/problems" exact component={Problem} isPrivate />
        </Switch>
    );
}
