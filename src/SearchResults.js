import { useParams } from "react-router-dom"

export default function SearchResults() {
    
    const params = useParams()

    return(
        <div className="search_results">
            <p>Search results here for {params.queryText}</p>
        </div>
    )
}