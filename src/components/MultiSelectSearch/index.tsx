import { useEffect, useRef, useState } from 'react'
import './styles.css'
import Pill from './Pill'

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
}

interface UserResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}

const MultiSelectSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [suggestions, setSuggestions] = useState<UserResponse | null>(null)
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])
  const [selectedUserSet, setSelectedUserSet] = useState<Set<string>>(new Set())
  const [activeSuggestion, setActiveSuggestion] = useState<number>(-1)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchTerm.trim() === '') {
        setSuggestions(null)
        return
      }

      try {
        const res = await fetch(
          `https://dummyjson.com/users/search?q=${searchTerm}`
        )
        const data: UserResponse = await res.json()
        setSuggestions(data)
      } catch (error) {
        console.error('Failed to fetch users', error)
        setSuggestions(null)
      }
    }

    fetchUsers()
  }, [searchTerm])

  const handleSelectUser = (user: User) => {
    setSelectedUsers([...selectedUsers, user])
    setSelectedUserSet(new Set([...selectedUserSet, user.email]))
    setSearchTerm('')
    setSuggestions(null)
    inputRef.current?.focus()
  }

  const handleRemoveUser = (user: User) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    )
    setSelectedUsers(updatedUsers)

    const updatedEmails = new Set(selectedUserSet)
    updatedEmails.delete(user.email)
    setSelectedUserSet(updatedEmails)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Backspace' &&
      e.currentTarget.value === '' &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1]
      handleRemoveUser(lastUser)
      setSuggestions(null)
    } else if (e.key === 'ArrowDown' && suggestions?.users?.length) {
      e.preventDefault()
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
      )
    } else if (e.key === 'ArrowUp' && suggestions?.users?.length) {
      e.preventDefault()
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
    } else if (
      e.key === 'Enter' &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions!.users.length
    ) {
      handleSelectUser(suggestions!.users[activeSuggestion])
    }
  }

  return (
    <div className='user-search-container'>
      <div className='user-search-input'>
        {/* Pills */}
        {selectedUsers.map((user) => (
          <Pill
            key={user.email}
            image={user.image}
            text={`${user.firstName} ${user.lastName}`}
            onClick={() => handleRemoveUser(user)}
          />
        ))}
        <div>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for a user...'
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          {/* Search Suggestions */}
          <ul className='suggestions-list'>
            {suggestions?.users?.map((user: User, index: number) => {
              return !selectedUserSet.has(user.email) ? (
                <li
                  key={user.email}
                  onClick={() => handleSelectUser(user)}
                  className={index === activeSuggestion ? 'active' : ''}
                >
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MultiSelectSearch
