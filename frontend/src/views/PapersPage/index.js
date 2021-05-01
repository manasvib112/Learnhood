import React from 'react'
import './style.css'
import Header from '../../components/Header'
import picture from '../../assets/images/picture.png'
import FrontPageBlock from '../../components/FrontPageBlocks'
import Banner from '../../components/Banner'
import background from '../../assets/images/bground.png'
const PapersPage = () => {
  return (
    <div className='upper-page'>
      <Header username='Manasvi' />
      <Banner picture={picture} background={background} />
      <div className='bottom-page'>
        <FrontPageBlock name='First Year' path='/papers/year/first' />
        <FrontPageBlock name='Second Year' path='/papers/year/second' />
        <FrontPageBlock name='Third Year' path='/papers/year/third' />
        <FrontPageBlock name='Fourth Year' path='/papers/year/fourth' />
      </div>
    </div>
  )
}

export default PapersPage
