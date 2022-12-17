import { useState } from "react";

const RetrievePage = () => {
    const [word, setWord] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [synonyms, setSynonyms] = useState([]);

    const getSynonyms = () => {
        console.log(`Word: ${word} | Synonym: ${synonyms}`);
        setIsLoading(true);
        const payload = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/synonym/${word}`, payload)
        .then(async (response) => {
            const data = await response.json();

            if (!response.ok) {
                setError(`Error: ${response.status}`);
                return;
            }

            const message = data.synonyms.length === 0 ? 'No synonyms found!' : ''
            setMessage(message);
            setSynonyms(data.synonyms);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err.toString());
            setIsLoading(false);
            console.log(`There was an error! ${err}`);
        });
    }

    return (
        <div className="container">
            <h4 className="p-12">Enter word and get synonyms</h4>
            <div>
                <div className="mb-3">
                    <label htmlFor="inputWord" className="form-label">Word</label>
                    <input
                        className="form-control"
                        id="inputWord"
                        value={word}
                        onChange={e => setWord(e.target.value)}
                        />
                </div>
                {synonyms.length > 0 &&
                    <div>
                        <h5>Synonyms ({synonyms.length})</h5>
                        <ul className="list-group">
                            {synonyms.map(el => (
                                <li
                                    key={el}
                                    className="list-group-item"
                                >
                                    {el}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
                {isLoading &&
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {message &&
                    <div className="alert alert-primary alert-dismissible " role="alert">
                        {message}
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setMessage('')}
                        />
                    </div>
                }
                <button
                    className="btn btn-primary my-2"
                    onClick={getSynonyms}
                    disabled={isLoading}
                >
                    Get synonyms
                </button>
                {error &&
                    <div className="alert alert-danger alert-dismissible " role="alert">
                        {error}
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setError('')}
                        />
                    </div>
                }
            </div>
      </div>
    )
}

export default RetrievePage;
