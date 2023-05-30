import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (query === '') { alert("You Can't Send An Empty Query") }
        else {
            navigate('/results', { state: { query } })
        }
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Type Here"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search