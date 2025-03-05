
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import About from './components/About.jsx'
import House from './components/House.jsx'
import AppRoutes from './routes.jsx'
import './styles/app.css'

export default function App() {
    return (
	<>
	    <div>
		<AppRoutes />
	    </div>
	</>
    )
}

