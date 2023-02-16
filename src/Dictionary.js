import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos.js";
import Results from "./Results.js";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    //documentation: http://dictionaryapi.dev

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelApiKey = "gnTtMPfWteRAMG3FgYntWuPjPaxFMoxaVGjRR57v5wkwudZk0B9c9lOK";
        let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelApiKey}` };
        axios.get(pexelApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h2>
                        What word would you like to look up?
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input type="Search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">
                        Suggested Words: monkey, apple, snow, rain...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "loading";
    }
}