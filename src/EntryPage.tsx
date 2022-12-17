import { useState } from "react";

const EntryPage = () => {
    const [word, setWord] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [synonym, setSynonym] = useState('');

    const saveSynonym = () => {
        console.log(`Word: ${word} | Synonym: ${synonym}`);
        setIsSaving(true);
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                word: word,
                newSynonym: synonym
            })
        };

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/synonym`, payload)
        .then(async (response) => {
            const data = await response.json();

            if (!response.ok) {
                setError(`Error: ${response.status}`);
                return;
            }

            setMessage(data.message);
            setWord('');
            setSynonym('');
            setIsSaving(false);
        })
        .catch((err) => {
            setError(err.toString());
            setIsSaving(false);
            console.log(`There was an error! ${err}`);
        });
    }

    return (
        <div className="container">
            <h4 className="p-12">Enter word and synonym</h4>
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
                <div className="mb-3">
                    <label htmlFor="synonym" className="form-label">Password</label>
                    <input
                        className="form-control"
                        id="synonym"
                        value={synonym}
                        onChange={e => setSynonym(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary mb-2"
                    onClick={saveSynonym}
                    disabled={isSaving}
                >
                    Submit
                </button>
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

export default EntryPage;
