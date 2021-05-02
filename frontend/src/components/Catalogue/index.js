import React from 'react'
import './style.css'
export default function index({
  header: Header,
  sidebar: Sidebar,
  content: Content
}) {
  return (
    <div className='cat-container'>
      <Header />
      <Sidebar />
      <div className='cat-main'>
        <Content />
      </div>
    </div>
  )
}
