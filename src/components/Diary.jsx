
import React from 'react'
import { Link } from 'react-router-dom'

import default_room_image from "../assets/diary-room-image.webp"

import "../styles/rooms.css"
import "../styles/tree.css"
import "../styles/app.css"

// Entries
import Entry1 from "./entries-diary/1.jsx"
import Entry2 from "./entries-diary/2.jsx"
import Entry3 from "./entries-diary/3.jsx"
import Entry4 from "./entries-diary/4.jsx"
import BackHouse       from "./BackHouse.jsx"


const DEFAULT_IMAGE_SIZE = 400;

function RoomImage({room_image}) {
    return <img src={room_image} height={DEFAULT_IMAGE_SIZE} width={DEFAULT_IMAGE_SIZE} />;
}

function RoomContent({ title,  text}) {
    return (
	<div className="room_content">
	    <h2 className="text_justify card">
		Diary/Blog.
	    </h2>
	    <div className="room_content_image">
		<RoomImage  room_image={ default_room_image } />
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
		<Entry4 />
	    </div>
	    <div className="text_justify card">
		<Entry4 />
	    </div>
	    <div className="text_justify card">
		<Entry3 />
	    </div>
	    <div className="text_justify card">
		<Entry2 />
	    </div>
	    <div className="text_justify card">
		<Entry1 />
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
