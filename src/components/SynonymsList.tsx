import React from 'react';

export interface Props {
    synonymsList: string[];
}

const SynonymsList = ({ synonymsList }: Props) => {
    if (synonymsList.length === 0) return null;
    return (
        <div>
            <h5 data-testid="list-title" className="mb-4">
                Synonyms ({synonymsList.length})
            </h5>
            <div className="d-flex flex-wrap">
                {synonymsList.map((el) => (
                    <h4 className="m-4" key={el}>
                        <span className="badge bg-synonym">{el}</span>
                    </h4>
                ))}
            </div>
        </div>
    );
};

export default SynonymsList;
