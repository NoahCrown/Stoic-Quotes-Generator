import React from "react";

export default function Quote(props) {

    return(
        <div id="quote-box">
            <h3 id="text"  className="">"{props.body}"</h3>
            <p id="author" className="">-{props.author}</p>
            <div className="clickable-links">
                <button onClick={props.generateQuote} id="new-quote">Generate New Quote</button>
                <a id="tweet-quote" href="twitter.com/intent/tweet"><img className="twitter-icon" src="https://i.imgur.com/KPNMIUX.png"></img></a>
            </div>
            
        </div>
    )
}