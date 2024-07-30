import React, { useCallback, useState } from 'react'
import './Input.css'
import { useDispatch } from 'react-redux'
import { fetchingUsers } from '../../redux/userSlice'

const Input = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const handleSearch = useCallback((() => {
        let timer
        return (e) => {
            const value  = e.target.value
            setQuery(value)
            if(timer) clearTimeout(timer)
            timer  = setTimeout(() => {
        if(value.trim()) {
            dispatch(fetchingUsers(value))
        }
    }, 1000)
        }
    })(),
    [dispatch]
    )
  return (
    <div className='container'>
        <input type='text' value={query} onChange={handleSearch} placeholder='Search Github Users Here...' />
    </div>
  )
}

export default Input