import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import DocsPage from './pages/DocsPage'
import FeaturesPage from './pages/FeaturesPage'
import CommunityPage from './pages/CommunityPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
