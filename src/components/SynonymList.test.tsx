import React from "react";
import { render, screen } from "@testing-library/react";
import SynonymsList, { Props } from "./SynonymsList";

function renderSynonymList(props: Partial<Props> = {}){
    let defaultProps = {
        synonymsList: []
    };

    return render(<SynonymsList {...defaultProps} {...props} />)
}

test('should render the synonyms list', function () {
    render(<SynonymsList synonymsList={ ['test']}/>);
    //renderSynonymList();
    expect(screen.getByTestId('list-title')).toHaveTextContent("Synonyms (1)")
})
