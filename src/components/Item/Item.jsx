import React from 'react'
import "./Item.css"
import { useDispatch } from 'react-redux'
import { fetchingUserDetails } from '../../redux/userSlice'

const Item = ({user}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchingUserDetails(user.login))
    }
  return (
    <div className='items' onClick={handleClick}>
        <img src={user.avatar_url} alt={user.login} />
        <div className='item-details'>
            <h3>{user.login}</h3>
            <a href={user.html_url} target='_blank' rel="noreferrer">View Profile</a>
        </div>
    </div>
  )
}

export default Item