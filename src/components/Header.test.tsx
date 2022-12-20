import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe('Header', () => {
    test('should render the header', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);

        expect(screen.getByText('Synonym dictionary')).toBeInTheDocument();
    })
})