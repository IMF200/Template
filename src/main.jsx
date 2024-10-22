import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navi from './components/Navi.jsx'
import Body from './components/Body.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navi />
    <Body />
  </StrictMode>,
)
