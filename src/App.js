import './App.css';
import QuoteCard from './QuoteCard';
import axios from 'axios';
import React,{useEffect, useState} from 'react';

function App() {
  const [quote, setQuote] = useState({});

  const simpsonQuote = () => {
    axios
   .get("https://simpsons-quotes-api.herokuapp.com/quotes")
   .then((response) => setQuote(response.data[0]))
  }

  useEffect(() => {
       axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes") 
      .then((response) => setQuote(response.data[0]))
  
  },[]);
      
  

  return (
    <div className="App">
      <QuoteCard {...quote}/>
      <button type="button" onClick={simpsonQuote}>Get quote</button>
    </div>
  );
}

export default App;
