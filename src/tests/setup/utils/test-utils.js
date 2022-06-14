import React from "react";
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';

import { apiSlice } from 'store/api/apiSlice';

function render(
    component,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                [apiSlice.reducerPath]: apiSlice.reducer
            },
            middleware: getDefaultMiddleware =>
                getDefaultMiddleware().concat(apiSlice.middleware),
            preloadedState
        }),
        route = "/",
        ...renderOptions
    } = {}
) {

    const history = createMemoryHistory({
        initialEntries: [route],
    });

    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {children}
                </Router>
            </Provider>
        )
    }
    return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
}

//re-export everything
export * from '@testing-library/react';

//overides the render method
export { render }