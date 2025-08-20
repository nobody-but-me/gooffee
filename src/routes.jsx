
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Golf23_05_2025     from './components/rooms/entries-computer/golf-game/23-05-2025.jsx'
import Golf03_06_2025     from './components/rooms/entries-computer/golf-game/03-06-2025.jsx'
import WorkInProgress     from './components/rooms/WorkInProgress.jsx'
import Computer           from './components/rooms/Computer.jsx'
import Writing            from './components/rooms/Writing.jsx'
import Buttons            from './components/rooms/Buttons.jsx'
import Diary              from './components/rooms/Diary.jsx'
import House              from './components/rooms/House.jsx'
import About              from './components/rooms/About.jsx'
import Log                from './components/rooms/Log.jsx'
import App                from './App.jsx'

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
						<Route path='/computer' element={<Computer />} />
						<Route path='/log' element={<Log />} />
					    
						<Route path='/Golf23-05-2025' element={<Golf23_05_2025 />} />
						<Route path='/Golf03-06-2025' element={<Golf03_06_2025 />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
    )
}
