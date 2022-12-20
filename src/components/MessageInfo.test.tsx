import React from "react";
import { render, screen } from "@testing-library/react";
import MessageInfo from "./MessageInfo";

describe('MessageInfo', () => {
    test('should render the primary message', () => {
        render(<MessageInfo message="test" action={jest.fn()} />);

        expect(screen.getByRole('alert')).toHaveClass('alert-primary');
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should render the danger message', () => {
        render(<MessageInfo message="test" action={jest.fn()} danger />);

        expect(screen.getByRole('alert')).toHaveClass('alert-danger');
    });
});