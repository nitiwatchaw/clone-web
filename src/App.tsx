
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './App.css'
import { useState } from 'react'
function App() {

  const [isSroll, setIsScroll] = useState<boolean>(false)

 

  return (
    <div>
      <div className="w-full bg-primary ">
        
        <Header isSroll={isSroll} setIsScroll={setIsScroll} />
        <Main />
        <Footer isSroll={isSroll} setIsScroll={setIsScroll} />
      </div>
    </div>
  )
}

export default App
