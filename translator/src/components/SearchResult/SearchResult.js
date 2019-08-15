import React from "react";
import "./SearchResult.css"

const SearchResult = props =>(
    <div className="container-fluid">
        <p>{props.results}</p> 
    </div>
    
)

export default SearchResult;