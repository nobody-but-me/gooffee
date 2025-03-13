
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import House from './components/House.jsx'
import About from './components/About.jsx'
import Writing from './components/Writing.jsx'
import Diary from './components/Diary.jsx'
import WorkInProgress from './components/WorkInProgress.jsx'
import App from './App.jsx'

export default function AppRoutes() {
    return (
	<>
	    <div>
		<BrowserRouter>
		    <Routes>
			<Route path='/'      element={<House />} />
			<Route path='/about' element={<About />} />
			<Route path='/writing' element={<Writing />} />
			<Route path='/diary' element={<Diary />} />
			<Route path='/work_in_progress' element={<WorkInProgress />} />
		    </Routes>
		</BrowserRouter>
	    </div>
	</>
    )
}
