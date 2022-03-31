import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import InitialPage from './pages/InitialPage'

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<InitialPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
