import React from 'react'
import { Conversation } from './Conversation'
import { LogoutButton } from './LogoutButton'
import { SearchInput } from './SearchInput'

export const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversation />
        <LogoutButton />
    </div>
  )
}
