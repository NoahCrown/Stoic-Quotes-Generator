import React from "react";
import ListOfQuotes from "./ListOfQuotes";

export default function FamousQuotes() {
    const [setOfQuotes, setSetOfQuotes] = React.useState([])

  React.useEffect(() => {
    fetch("https://stoicquotesapi.com/v1/api/quotes")
    .then (response => response.json() )
    .then(data => setSetOfQuotes(data.data))
  }, [])


  function QuoteSet() {
    return setOfQuotes.map(quotes => (
      <ListOfQuotes key={quotes.id} text={quotes.body} author={quotes.author}/>
    ))
  }

  return (
    <>
        <h1 className="quote-set-heading">Famous Quotes from the Stoics</h1>
        <QuoteSet/>
    </>
    
  )

}