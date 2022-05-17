import { createRoot } from 'react-dom/client'
import { App } from './App'
import { register as SWRegister } from './serviceWorkerRegistration'

createRoot(document.querySelector('#root')!).render(<App />)

SWRegister()
