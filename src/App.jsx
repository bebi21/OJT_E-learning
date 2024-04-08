import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CourseDetail from './page/course detail/CourseDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <CourseDetail/>
        <Footer/>     
    </>
  )
}

export default App
