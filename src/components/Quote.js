import React from "react";

export default function Quote(props) {

    return(
        <div id="quote-box">
            <h3 id="text"  className="">"{props.body}"</h3>
            <p id="author" className="">-{props.author}</p>
            <div className="clickable-links">
                <button onClick={props.generateQuote} id="new-quote">Generate New Quote</button>
                <a id="tweet-quote"  target="_top"
                href={`{"https://twitter.com/intent/tweet?text="${props.body}`}> <img  alt="twitter-icon" className="twitter-icon" src="https://i.imgur.com/KPNMIUX.png"></img></a>
            </div>
            
            
        </div>
    )
}