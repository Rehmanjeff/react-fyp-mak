import React from 'react'
import PropTypes from 'prop-types'
import Profile from './Profile.css'

const propTypes = {
  picture: PropTypes.string,
  displayName: PropTypes.string,
  username: PropTypes.string.isRequired,
  emailAdress: PropTypes.string,
}

function Profile ({ picture, displayName, username, emailAdress }) {
  return (
    <div className={Profile.root}>
      <img className={Profile.avatar} src={picture} />
      <span className={Profile.name}> {displayName}</span>
      <ul className={Profile.data}>
        <li>
          <span className='fa fa-user'></span> {username}
        </li>
        <li>
          <span className='fa fa-envelope'></span> {emailAdress}
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile