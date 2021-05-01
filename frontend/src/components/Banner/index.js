import React from 'react'
import './style.css'
export default function Banner({ background, picture, text }) {
  return (
    <div
      className='middle-page'
      style={background ? { backgroundImage: `url(${background})` } : {}}
    >
      <div className='middle-page-left'>
        <span>Learnhood</span>
        <p>
          {text
            ? text
            : 'It is a platform where anyone can sell or buy the books and students will be provided with the previous year papers and notes . This could be your promising step towards building a well educated nation'}
        </p>
      </div>
      <img src={picture} alt='banner' />
    </div>
  )
}
