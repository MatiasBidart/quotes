import React from 'react'

const ChangeQuoteButton = ({eventHandler}) => {
  return (
    <div>
        <button onClick={eventHandler}>Change Quote</button>
    </div>
  )
}

export default ChangeQuoteButton