import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import './assets/scss/main.scss'

import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import { BookIndex } from './views/BookIndex'
import { About } from './views/About'

function App() {
  return (
    <Router>
      <section className="main-app main-container">
        <AppHeader />
        <main className='full'>
          <Routes>
            <Route path="/" element={<BookIndex />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
  )
}

export default App
