import React from 'react'
import { useParams } from 'react-router'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Catalogue from '../../components/Catalogue'
import background from '../../assets/images/background1.png'
import './style.css'
import tp from '../../assets/images/termpaper.png'

export default function PapersCataloguePrimary(props) {
  const { year } = useParams()
  console.log(year)
  return (
    <Catalogue
      header={() => {
        return <Header background={background} />
      }}
      sidebar={() => {
        return <Sidebar filter={{ subject: [{ a: 12, b: 12 }] }} />
      }}
      content={() => {
        return <Content year={year} />
      }}
    />
  )
}

const Content = ({ year }) => {
  return (
    <>
      <h1> Previous years paper for {year} year students</h1>
      <div className='term-paper-row'>
        <div className='term-paper'>
          <h3>T1</h3>
          <img src={tp} alt='term paper' />
        </div>
        <div className='term-paper'>
          <h3>T2</h3>
          <img src={tp} alt='term paper' />
        </div>
        <div className='term-paper'>
          <h3>T3</h3>
          <img src={tp} alt='term paper' />
        </div>
      </div>
    </>
  )
}
