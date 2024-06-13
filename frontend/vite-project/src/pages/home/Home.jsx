import React from 'react'
import { Conversations } from '../../components/sidebar/Conversations.jsx'
import { Sidebar } from '../../components/sidebar/Sidebar.jsx';

export const Home = () => {
  return (
    <div>
      <Conversations />
      <Sidebar />
    </div>
  )
};
