import singleSpaReact from 'single-spa-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});
export const bootstrap = [reactLifecycles.bootstrap];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];
