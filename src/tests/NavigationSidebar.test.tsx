import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationSidebar from '../components/NavigationSidebar';
import { BrowserRouter } from 'react-router-dom';

describe('NavigationSidebar', () => {
    test('should render the navigation sidebar', () => {
        render(
            <BrowserRouter>
                <NavigationSidebar visible={true} setMenuVisible={jest.fn} />
            </BrowserRouter>,
        );
        expect(
            screen.getByText('Switch between search and input'),
        ).toBeInTheDocument();
    });

    test('should not render the sidebar', () => {
        render(
            <BrowserRouter>
                <NavigationSidebar visible={false} setMenuVisible={jest.fn} />
            </BrowserRouter>,
        );
        expect(screen.getByRole('navigation')).not.toHaveClass('menu__visible');
    });
});
