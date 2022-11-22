import './App.css';
import React, { useEffect } from 'react'

// React Router Dom 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Components 
import NavBar from './components/NavBar';
import Quote from './components/Quote';
import WhatIsStoicism from './components/WhatISStoicism';
import ListOfQuotes from './components/ListOfQuotes';
import Footer from './components/Footer';

function App() {
  const [quote,setQuote] = React.useState({})

  useEffect(() => {
    generateNewQuote()
  }, [])

  function generateNewQuote() {
    fetch("https://stoicquotesapi.com/v1/api/quotes/random")
    .then(response => response.json())
    .then(data => setQuote(data))
  }

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Quote id={quote.id} 
        body={quote.body} author_id={quote.author_id} author={quote.author}
        generateQuote={generateNewQuote} />}/>
        <Route path='/what-is-stoicism' element={<WhatIsStoicism/>}/>
        <Route path="/list-of-quotes" element={<ListOfQuotes/>}/>

      </Routes>
      {/* <hr/> */}

      <Footer/>

    </Router>
    
  );
}

export default App;
