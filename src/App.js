import './App.css';
import React, {useState} from 'react';
import data from './components/Quotes.json';
import ChangeQuoteButton from './components/ChangeQuoteButton';
import colorPalette from './components/ColorPalette';
import QuoteBox from './components/QuoteBox';

function App() {
  const randomNumber = (max)=> {return Math.floor(Math.random() * max.length -1)}
  const [quoteIndex, setQuoteIndex] = useState(data.quotes[randomNumber(data.quotes)])
  const [styleColor, setStyleColor] = useState(colorPalette[randomNumber(colorPalette)])

  
  const handlerChangeInfo = () => {
    setQuoteIndex(data.quotes[randomNumber(data.quotes)])
    setStyleColor(colorPalette[randomNumber(colorPalette)])
  }
  return (
    <div className="App">
    <div className="quo-cntnr"style={{backgroundColor: styleColor}}>    
    <QuoteBox currentQuote={quoteIndex.quote} currentAuthor={quoteIndex.author} currentColor={styleColor}/>
    <ChangeQuoteButton eventHandler={handlerChangeInfo}/>
    </div>
    </div>
  );
}

export default App;
