import React from 'react'

const QuoteBox = ({currentQuote, currentAuthor, currentColor}) => {
  return (
    <div className='quo-bx'>
        <h2 style={{color: currentColor}}>{currentQuote}</h2>
        <h4 style={{color: currentColor}}>{currentAuthor}</h4>
    </div>
  )
}

export default QuoteBox