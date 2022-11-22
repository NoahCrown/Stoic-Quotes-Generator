import React from "react";

export default function ListOfQuotes(props){
    return (
        <>
            <div className="quotes-box">
                <h2 className="quote">"{props.text}"</h2>
                <h4 className="quote-author">-{props.author}</h4>
            </div>
        </>
        
    )
}           