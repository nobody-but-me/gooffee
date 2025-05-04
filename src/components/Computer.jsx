
import React from 'react'
import { Link } from 'react-router-dom'

import _default_room_image from "../assets/diary-room-image.webp"

import "../styles/rooms.css"
import "../styles/tree.css"
import "../styles/app.css"

// Entries
import KDE from "./entries-computer/KDE.jsx"
import BackHouse       from "./BackHouse.jsx"

const _DEFAULT_IMAGE_SIZE = 400;

function RoomImage({_room_image}) {
    return <img src={_room_image} height={_DEFAULT_IMAGE_SIZE} width={_DEFAULT_IMAGE_SIZE} />;
}

function RoomContent({_title, _text}) {
    return (
		<div className="room_content">
			<h1 className="text_right">
				Computer related topics.
			</h1>
			<p className="text_left">
				Here you are going to find some posts about computer, programming, linux, and stuff like that.
			</p>
			<div className="summary">
				<div className="ball green_ball"></div>
				<p>
					Most recent
				</p>
			</div>
			<div className="text_justify card most-recent-purple">
				<KDE />
			</div>
			<div className="text_justify card">
			    test
			</div>
			<BackHouse />
		</div>
    );
}

export default function Computer() {
    return (
		<div id="room_container">
			<RoomContent />
			<div className="room_content_image">
				<RoomImage _room_image={_default_room_image} />
			</div>
		</div>
    )
}
