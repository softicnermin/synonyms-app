import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
    test('Render search input on entry route', async () => {
        const route = '/';
        window.history.pushState({}, 'Search page', route);
        render(<App />, { wrapper: BrowserRouter });
        await screen.findByPlaceholderText('Enter word');
    });

    test('Render submit button on new route', async () => {
        const route = '/new';
        window.history.pushState({}, 'New page', route);
        render(<App />, { wrapper: BrowserRouter });
        await screen.findByText('Enter word and synonym');
    });
});
