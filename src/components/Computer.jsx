
import React from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'

import _default_room_image from "../assets/computer-room-image.webp"
import BackHouse from "./BackHouse.jsx"

import "../styles/rooms.css"
import "../styles/tree.css"
import "../styles/app.css"


const _DEFAULT_IMAGE_SIZE = 400

function ListLink({_text, _path, _point}) {
    return <li><a target="blank" href={_path}>{_text}</a>{_point}</li>;
}

function RoomImage({_room_image}) {
    return <img src={_room_image} height={_DEFAULT_IMAGE_SIZE} width={_DEFAULT_IMAGE_SIZE} style={{borderRadius: '15px'}} />;
}

function RoomContent({_title, _text}) {
    const _navigate = useNavigate();
    return (
		<div className="room_content">
			<h1 className="text_right">
				"Computering" projects.
			</h1>
			<p className="text_justify card">
				I love to code, so you'll see this page being update very often.
			</p>
			<div className="text_justify card">
				<ul>
					<li>
					    GOLF GAME
					    <ul>
						<li><a onClick={() => {_navigate('/Golf22-05-2025');}}>TEST</a></li>
					    </ul>
					</li>
				</ul>
			</div>
			<BackHouse />
		</div>
    );
}

export default function Computer() {
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
