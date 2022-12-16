import { useState } from "react";

const url1 = 'https://synonymapi.onrender.com/synonym';
const url2 = 'http://localhost:3000/synonym'

const EntryPage = () => {
    const [word, setWord] = useState('');
    const [synonym, setSynonym] = useState('');

    const saveSynonym = () => {
        console.log(`Word: ${word} | Synonym: ${synonym}`);
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


        fetch(url2, payload)
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
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
                    className="btn btn-primary"
                    onClick={saveSynonym}
                >
                    Submit
                </button>
            </div>
      </div>
    )
}

export default EntryPage;
