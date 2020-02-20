import singleSpaReact from 'single-spa-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./pages/app";
import {HttpRequest} from './utils/HttpRequest';

declare global {
    interface Window {
        httpRequest: HttpRequest;
    }
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

console.log(reactLifecycles.mount);

export const bootstrap = [reactLifecycles.bootstrap];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];

// /api/v2/users/password-reset?email=1@123.com
