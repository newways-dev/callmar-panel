import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import {
  ButtonSettings,
  Calls,
  Login,
  Payment,
  Register,
  Statistics,
  WidgetSettings,
  Widgets,
  WidgetSettingsView,
} from './pages'
import { AppLayout } from './layout/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/calls" replace />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/widgets/settings" element={<WidgetSettingsView />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/button-settings" element={<ButtonSettings />} />
        <Route path="/widget-settings" element={<WidgetSettings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
