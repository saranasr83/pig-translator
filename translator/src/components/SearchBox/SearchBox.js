import React from "react";
import "./SearchBox.css";

const SearchBox = props =>(
    <form className="search w3-animate-top">
        <div className="form-group">
            <input 
            style={{width:"250px", opacity:".7", padding:"8px"}}
            type="text"
            name="word"
            placeholder="enter any word ..."
            value= {props.value}
            onChange={props.handleInputChange}
            />
            <button 
            className="btn" 
            type="submit" 
            onClick={props.handleFormSubmit}>
            <strong>Submit</strong>
            </button>
            
        </div>
        
    </form>
)

export default SearchBox;