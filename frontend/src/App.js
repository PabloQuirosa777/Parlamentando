import React from 'react'
import ChatRoom from './component/ChatRoom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './component/Login';


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/chatroom" element={<ChatRoom/>} />
      </Routes>
    </BrowserRouter>
  )   
}

export default App


