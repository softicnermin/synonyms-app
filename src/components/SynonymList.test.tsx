import React from "react";
import { render, screen } from "@testing-library/react";
import SynonymsList from "./SynonymsList";

describe('SynonymList', () => {
    test('should render the synonyms list with one item', function () {
        render(<SynonymsList synonymsList={ ['test']}/>);
        expect(screen.getByTestId('list-title')).toHaveTextContent("Synonyms (1)")
    })

    test('should not render the list', function () {
        render(<SynonymsList synonymsList={ []}/>);
        expect(screen.queryByText('Synonyms')).toBeNull();
    })

});

