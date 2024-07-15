import React from 'react'
import UserContextProvider from './Context/UserContextProvider'

import Profile from './components/Profile'
import Login from './components/Login'

function App() {
 

  return (
    <UserContextProvider>
      <h1>Here I am learning the userContext</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
