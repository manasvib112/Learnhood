import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Catalogue from '../../components/Catalogue'
import background from '../../assets/images/background1.png'
import './style.css'
import CardElement from '../CardElement'
import NotesModal from '../../lib/modals/NotesModal'

const mapYear = (year) => {
  console.log({ year })
  switch (year) {
    case '1':
      return 'first'
    case '2':
      return 'second'
    case '3':
      return 'third'
    case '4':
      return 'fourth'
    default:
      return 'wrong'
  }
}
export default function PapersCataloguePrimary(props) {
  const { year, term } = useParams()
  return (
    <Catalogue
      header={() => {
        return <Header background={background} />
      }}
      sidebar={() => {
        return <Sidebar filter={{ subject: [{ a: 12, b: 12 }] }} />
      }}
      content={() => {
        return <Content year={year} term={term} />
      }}
    />
  )
}

const _NotesModal = new NotesModal()

const Content = ({ year, term }) => {
  const [notes, setNotes] = useState([])
  useEffect(async () => {
    const { data } = await _NotesModal.get()
    setNotes(data)
    console.log(data)
    return () => {}
  }, [])
  return (
    <>
      <h1>
        T{term} Paper for {year} year students
      </h1>
      <div className='grid'>
        {notes.map((item) => (
          <CardElement key={item._id} type='note' element={item} />
        ))}
      </div>
    </>
  )
}
