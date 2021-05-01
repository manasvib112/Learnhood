import React, { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import picture from '../../assets/images/picture.png'
import { stringify } from 'qs'
import './style.css'
import { isArray } from 'lodash'
import NotesModal from '../../lib/modals/NotesModal'
import { getToken } from '../../lib/shared/isLoggedIn'

const _NotesModal = new NotesModal(getToken())

export default function NotesHome() {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  useEffect(() => {
    if (!search.replace(/\s/g, '').length) {
      setSearchResult([])
    }
  }, [search])
  const searchNote = async (event) => {
    const val = event.target.value
    console.log(val.replace(/\s/g, '').length)
    setSearch(event.target.value)
    if (val.replace(/\s/g, '').length) {
      const query =
        '?' +
        stringify({
          _where: {
            _or: [{ title_contains: val }, { 'subject.name_in': val }]
          }
        })
      const { data } = await _NotesModal.get(query)

      const results = isArray(data) ? data.map((i) => i.title) : null
      setSearchResult(results)
    }
  }
  return (
    <div className='notes-home-container'>
      <Header />
      <div className='notes-home'>
        <Banner picture={picture} />
        <div className='note-search-section'>
          <div className='note-search'>
            <input name='search' value={search} onChange={searchNote} />
            <div className=''></div>
          </div>
          {isArray(searchResult) && searchResult.length ? (
            <>
              <div className='search-result-box-wrapper'>
                <div className='search-result-box'>
                  {searchResult.map((results, index) => {
                    return (
                      <div key={index} className='search-result-item'>
                        {results}
                      </div>
                    )
                  })}
                  <div className='search-meta'>Browse More</div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
