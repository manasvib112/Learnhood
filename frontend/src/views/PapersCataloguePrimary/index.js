import React from 'react'
import { useParams } from 'react-router'

export default function PapersCataloguePrimary(props) {
  const { year } = useParams()
  console.log(year)
  return (
    <div>
      <h1>Papers</h1>
    </div>
  )
}
