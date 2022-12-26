import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as Illustration } from '../assets/searching.svg';
import SynonymsList from '../components/SynonymsList';
import MessageInfo from '../components/MessageInfo';

import { sanitizeWord } from '../helpers/Util';

const RetrievePage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [inputFocused, setInputFocused] = useState(false);
    const [word, setWord] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [synonyms, setSynonyms] = useState([]);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') await getSynonyms();
    };

    const clearAll = () => {
        setMessage('');
        setError('');
        setWord('');
        setSynonyms([]);
    };

    const getSynonyms = async () => {
        if (word === '') return;
        setMessage('');
        setIsLoading(true);
        const payload = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_ENDPOINT}/synonym/${sanitizeWord(
                    word,
                )}`,
                payload,
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(response.status.toString());
            }
            if (data.synonyms.length === 0) {
                setMessage('No synonyms found!');
            }
            setSynonyms(data.synonyms);
            setIsLoading(false);
        } catch (error) {
            let message = 'Unknown Error'
            if (error instanceof Error) message = error.message
            else message = String(error);
            setError(message);
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                <Illustration />
                <h4 className="mt-4 p-12">
                    Need help finding the perfect word?
                </h4>
                <span className="p-12">
                    Enter a word and explore it&apos;s synonyms
                </span>
            </div>
            <div className="search-container">
                <div
                    className={classNames(
                        'search-input row mx-0 border rounded-4',
                        {
                            'search-input--focus': inputFocused,
                        },
                    )}
                >
                    <div className="row ms-0 me-0 my-2 mb-3">
                        <button
                            className="btn-search col-1 border-0 bg-white p-0 d-flex align-items-center"
                            onClick={getSynonyms}
                            disabled={isLoading}
                            title="Search"
                        >
                            <i className="material-icons ps-md-3 py-12 text-black-600">
                                search
                            </i>
                        </button>
                        <div className="col-10 p-0">
                            <input
                                ref={ref}
                                placeholder="Enter word"
                                className="border-0 py-12 form-control"
                                value={word}
                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setInputFocused(false)}
                                onChange={(e) => setWord(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e)}
                            />
                        </div>
                        <div className="col-1 ps-4 d-flex align-items-center justify-content-center">
                            <button
                                className="btn-close text-black-600 text-decoration-none"
                                onClick={clearAll}
                                title="Clear"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-16">
                <SynonymsList synonymsList={synonyms} />
                {isLoading && (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
                <MessageInfo message={message} action={setMessage} />
                <MessageInfo message={error} action={setError} danger={true} />
            </div>
        </div>
    );
};

export default RetrievePage;
