
import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/rooms.css'

export default function BackHouse() {
    return (
	<>
	    <div className="back_link">
		<p className="text_left">
		    [
		</p>
		<p className="text_center">
		    <Link to="/"> Back to The Old House </Link>
		</p>
		<p className="text_right">
		    ]
		</p>
	    </div>
	</>
    );
}
