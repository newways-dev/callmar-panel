import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './layout/Layout'
import { useSelector } from 'react-redux'
import { selectPages } from './redux/pages/selector'
import { Calls, Login, Register, Widgets } from './pages'

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
