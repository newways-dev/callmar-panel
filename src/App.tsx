import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Calls, Login, Register, Statistics, Widgets } from './pages'
import { selectPages } from './redux/pages/selector'
import { Layout } from './layout/Layout'

function App() {
  const { page } = useSelector(selectPages)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                {page === 'calls' && <Calls />}
                {page === 'widgets' && <Widgets />}
                {page === 'statistics' && <Statistics />}
              </Layout>
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
