import React from 'react'
import {clearUsersDetails} from "../../redux/userSlice"
import "./Modal.css"
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.user.userDetails)

    const handleClose = () => {
        dispatch(clearUsersDetails())
    }

    if(!userDetails) return null
  return (
    <div className='modal-frame' onClick={handleClose}>
      <div className='modal-Box' onClick={(e)=>e.stopPropagation()}>
        <button className='button' onClick={handleClose}>X</button>
        <img src={userDetails.avatar_url} alt={userDetails.login} className='modal-avatar' />
        <h2>{userDetails.name || userDetails.login}</h2>
        <p><stronger>Follower: </stronger>{userDetails.followers}</p>
        <p><stronger>Following: </stronger>{userDetails.following}</p>
        <p><stronger>Location: </stronger>{userDetails.location}</p>
      </div>
    </div>
  )
}

export default Modal