
import React from 'react'
import { Link } from 'react-router-dom'

import _default_room_image from "../assets/diary-room-image.webp"

import "../styles/rooms.css"
import "../styles/tree.css"
import "../styles/app.css"

// Entries
import Entry10_21_2024 from "./entries-diary/10-21-2024.jsx"
import Entry12_23_2024 from "./entries-diary/12-23-2024.jsx"
import Entry04_16_2025 from "./entries-diary/04-16-2025.jsx"
import Entry06_05_2025 from "./entries-diary/06-05-2025.jsx"
import BackHouse       from "./BackHouse.jsx"


const _DEFAULT_IMAGE_SIZE = 400;

function RoomImage({_room_image}) {
    return <img src={_room_image} height={_DEFAULT_IMAGE_SIZE} width={_DEFAULT_IMAGE_SIZE} />;
}

function RoomContent({_title, _text}) {
    return (
	<div className="room_content">
	    <h2 className="text_justify card">
		Diary/Blog.
	    </h2>
	    <div className="room_content_image">
		<RoomImage _room_image={_default_room_image} />
	    </div>
	    <p className="text_left">
		Here you are going to find all of my blog posts.
	    </p>
	    <div className="summary">
		<div className="ball purple_ball"></div>
		<p>
		    Most recent
		</p>
	    </div>
	    <div className="text_justify card most-recent-purple">
		<Entry06_05_2025 />
	    </div>
	    <div className="text_justify card">
		<Entry04_16_2025 />
	    </div>
	    <div className="text_justify card">
		<Entry12_23_2024 />
	    </div>
	    <div className="text_justify card">
		<Entry10_21_2024 />
	    </div>
	    <BackHouse />
	</div>
    );
}

export default function Writing() {
    return (
	<div id="room_container">
	    <RoomContent />
	</div>
    )
}
