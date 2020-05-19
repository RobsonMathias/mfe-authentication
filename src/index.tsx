import singleSpaReact from 'single-spa-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./pages/app";

declare global {
    interface Window {
        Authentication: any,
        newrelic: any
    }
}


const authenticationInit = window.newrelic.interaction().createTracer('simulation-mounted', (e: any) => console.log(e));

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

export const bootstrap = [reactLifecycles.bootstrap];
export const mount = [
    reactLifecycles.mount,
    (customProps: any) => {
        !customProps.httpRequest && console.warn('HttpRequest Method was not defined');
        window.Authentication = {
            httpRequest: customProps.httpRequest
        };
        authenticationInit();
        return Promise.resolve();
    }
];
export const unmount = [reactLifecycles.unmount];
