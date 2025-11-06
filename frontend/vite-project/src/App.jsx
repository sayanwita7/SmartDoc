import './App.css'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div className = ' w-full bg-gradient-to-b from-[#121212] to-purple'>
        <Header />
        <main className='pt-16'> <Outlet /> </main>
        <Footer />
    </div>
  )
}

export default App