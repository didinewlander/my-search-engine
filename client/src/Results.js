import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { state } = useLocation();

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:4000/search/${state.query}`)
            .then(response => response.json())
            .then(data => {
                setResults(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Error: ', error);
                setIsLoading(false);
            })
    }, [state.query]);

    return (
        <div>
            <div>
                {isLoading ? (<Box>
                    <CircularProgress />
                </Box>)
                    : (results.map(result => (
                        <div key={result.query /*query is the name of the website*/}>
                            <h3>{result.query}</h3>
                            <p>{result.description}</p>
                            <a href={result.link}>{result.link}</a>
                        </div>
                    )))}

            </div>
            <div>
                <Link to='/'>Back</Link>
            </div>
        </div>
    )
}

export default Results