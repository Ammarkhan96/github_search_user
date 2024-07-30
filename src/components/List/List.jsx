import React from 'react'
import { useSelector } from 'react-redux'
import Item from "../Item/Item"
import "./List.css"

const List = () => {
    const users = useSelector((state) => state.user.users)
    const loading = useSelector((state) => state.user.loading)
    const error = useSelector((state) => state.user.error)
  return (
    <div className='lists-container'>
        {loading && <div className='loader'>Loading...</div>}
        {error && <div className='error'>{error.message}</div>}
        {users.map((user) => (
            <Item key={user.id} user={user} />
        ))}
    </div>
  )
}

export default List