
import { BrowserRouter as Router } from 'react-router-dom'
import React from                       'react'

import About from './components/About.jsx'
import AppRoutes from './routes.jsx'
import './styles/app.css'

export default function App() {
    return (
	<>
	    <div style={{backgroundColor: "black", padding: "25px"}}>
		<AppRoutes />
	    </div>
	</>
    )
}

