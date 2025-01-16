import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useToken from './hooks/useToken'
import Header from './components/header/index';
import PostModal from './components/modal'
import { useSelector } from 'react-redux'


const App = () => {
  const [token] = useToken()
  const { modal } = useSelector((state) => state.modal);

  return (
    <BrowserRouter>
      {token?.token && <Header />}
      {modal && <PostModal />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </BrowserRouter>
  )
}

export default App