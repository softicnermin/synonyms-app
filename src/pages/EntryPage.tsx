import React, { useState } from 'react';

import MessageInfo from '../components/MessageInfo';

import { isWord, sanitizeWord } from '../helpers/Util';

const EntryPage = () => {
    const [word, setWord] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [synonym, setSynonym] = useState('');

    const saveSynonym = async () => {
        if (!isWord(word) || !isWord(synonym) || word === synonym) {
            setError('Please enter valid words');
            return;
        }

        setIsSaving(true);
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstWord: sanitizeWord(word),
                secondWord: sanitizeWord(synonym),
            }),
        };

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_ENDPOINT}/synonym`,
                payload,
            );
            const data = await response.json();

            if (!response.ok) {
                setError(`Error: ${response.status}`);
                return;
            }

            setMessage(data.message);
            setWord('');
            setError('');
            setSynonym('');
            setIsSaving(false);
        } catch (err: any) {
            setError(err.toString());
            setIsSaving(false);
        }
    };

    return (
        <div className="container">
            <h4 className="p-12">Enter word and synonym</h4>
            <div>
                <div className="mb-3">
                    <label htmlFor="inputWord" className="form-label">
                        Word
                    </label>
                    <input
                        className="form-control"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="synonym" className="form-label">
                        Synonym
                    </label>
                    <input
                        className="form-control"
                        value={synonym}
                        onChange={(e) => setSynonym(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary mb-2"
                    onClick={saveSynonym}
                    disabled={isSaving || word === '' || synonym === ''}
                >
                    Submit
                </button>
                <MessageInfo message={message} action={setMessage} />
                <MessageInfo message={error} action={setError} danger={true} />
            </div>
        </div>
    );
};

export default EntryPage;
