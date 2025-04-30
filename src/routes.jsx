
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WorkInProgress from './components/WorkInProgress.jsx'
import Writing        from './components/Writing.jsx'
import Buttons        from './components/Buttons.jsx'
import Diary          from './components/Diary.jsx'
import House          from './components/House.jsx'
import About          from './components/About.jsx'
import Log            from './components/Log.jsx'
import App            from './App.jsx'

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
						<Route path='/buttons' element={<Buttons />} />
						<Route path='/work_in_progress' element={<WorkInProgress />} />
						<Route path='/log' element={<Log />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
    )
}
