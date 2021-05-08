import React from 'react'
import './style.css'
import Header from '../../components/Header'
import picture from '../../assets/images/picture.png'
import FrontPageBlock from '../../components/FrontPageBlocks'
import Banner from '../../components/Banner'
import background from '../../assets/images/background1.png'
const FrontPage = () => {
  return (
    <div className='upper-page'>
      <Header />
      <Banner picture={picture} background={background} />
      <div className='bottom-page'>
        <FrontPageBlock
          name='Books'
          text='Browse or share handmade notes. Find your books on this platform.'
          path='/login'
        />
        <FrontPageBlock
          name='Papers'
          text='Browse or share handmade Papers. Find your notes on this platform.'
          path='/papers'
        />
        <FrontPageBlock
          name='Notes'
          text='Browse or share handmade notes. Find your notes on this platform.'
          path='/notes'
        />
      </div>
    </div>
  )
}

export default FrontPage
