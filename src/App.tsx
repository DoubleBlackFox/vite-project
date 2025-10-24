import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Article from './pages/Article'
import Filip from './pages/Filip'
function App() {
  

  return (
    <>
    
    <Home/>
    <Article heading="neco2" contetn="obsah2"/>
    <Article heading="neco" contetn="obsah"></Article>

    <Filip></Filip>
    </>
  )
}

export default App
