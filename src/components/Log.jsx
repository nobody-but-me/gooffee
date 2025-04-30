
import React from 'react'
import { Link } from 'react-router-dom'

import _default_room_image from "../assets/log-room-image.webp"
import BackHouse from "./BackHouse.jsx"

import "../styles/rooms.css"
import "../styles/tree.css"
import "../styles/app.css"


const _DEFAULT_IMAGE_SIZE = 400

function ListLink({_text, _path, _point}) {
    return <li><a target="blank" href={_path}>{_text}</a>{_point}</li>;
}

function RoomImage({_room_image}) {
    return <img src={_room_image} height={_DEFAULT_IMAGE_SIZE} width={_DEFAULT_IMAGE_SIZE} />;
}

function RoomContent({_title, _text}) {
    return (
		<div className="room_content">
			<h1 className="text_right">
				Miscellaneous Logs About Everything, really.
			</h1>
			<p className="text_justify card">
				A bunch of miscellaneous logs of random things I would like to remember. The
				goal is one day look at it and not feel like a strager looking into someone
				else's life without permission.
			</p>
			<div className="summary">
				<div className="orange_ball"></div>
				<p>
					Most recent
				</p>
			</div>
			<div className="text_justify card">
				<ul>
					<li><color className='most-recent-log'>[ 04/28/2025 Log ]</color>: After a long time using i3wm, I switched to KDE, so I will not think about programming all the time.</li>
					<li><color className='log'>[ 04/27/2025 Log ]</color>: My first "article" was published in my university news website.</li>
				</ul>
			</div>
			<p className="text_justify card">
				And here's a little TODO list. That's not day specific -- although I wanted it to be.
			</p>
			<div className="text_justify card">
				<ul>
					<li><color className='log'>[ ]</color>: Read about 'new journalism' for the university work; Separate the main and most important points of it.</li>
					<li><color className='log'>[ ]</color>: Finish to read The Bell Jar;</li>
					<li><color className='most-recent-log'>[x]</color>: Add Log page in your website;</li>
					<li><color className='log'>[ ]</color>: Write a post about the city builder game I am developing;</li>
					<li><color className='log'>[ ]</color>: Write a post here why I switched to KDE;</li>
					<li><color className='log'>[ ]</color>: Have a haircut;</li>
				</ul>
			</div>
			<BackHouse />
		</div>
    );
}

export default function Log() {
    return (
		<div id="room_container">
			<RoomContent />
			<div style={{width:'50px'}}></div>
			<div className="room_content_image">
				<RoomImage _room_image={_default_room_image} />
			</div>
		</div>
    )
}
