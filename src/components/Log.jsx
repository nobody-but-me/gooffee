
import React from 'react'
import { Link } from 'react-router-dom'

import _default_room_image from "../assets/about-room-image.webp"
import BackHouse from "./BackHouse.jsx"

import "../styles/rooms.css"
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
				Misc Logs About Anything.
			</h1>
			<p className="text_justify card">
				"
				<br />
				<br />
				""
				</p>
				<div className="text_justify card">
					<ul>
						<li>Log: </li>
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
