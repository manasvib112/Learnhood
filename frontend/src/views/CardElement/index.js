import React from 'react'
import './style.css'
import termpaper from '../../assets/images/termpaper.png'
import user from '../../assets/images/Ellipse.png'
const formatContent = (type, item) => {
  if (type == 'note')
    return {
      name: item?.title,
      image:
        item && item.image && item.image[0] ? item.image[0]?.url : termpaper,
      details: item?.description,
      username: 'Manasvi',
      userimage: user
    }
}

export default function CardElement({ element, type }) {
  const { name, image, details, username, userimage } = formatContent(
    type,
    element
  )
  return (
    <div className='card-element-wrapper'>
      <div
        className='card-element-container'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='card-element'>
          <h1>{name}</h1>
          <div className='divider'></div>
          <p>{details}</p>
          <div className='card-user-details'>
            <span>{username}</span>
            <img src={userimage} alt='user' />
          </div>
        </div>
      </div>
    </div>
  )
}
