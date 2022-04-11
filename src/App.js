import './App.css';
import QuoteCard from './QuoteCard';
import axios from 'axios';
import React,{useState} from 'react';

function App() {
  const [quote, setQuote] = useState({});

  const getQuote =() => {
  
    axios
  
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
        
      .then((response) => response.data)
  
      .then((data) => {
             
        setQuote(data[0]);
      });
  
  };
  return (
    <div className="App">
      <QuoteCard {...quote}/>
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
