
import React from 'react'
import { Link } from 'react-router-dom'

import _default_room_image from "../assets/writing-room-image.webp"
import _book from "../assets/icons/book.webp"

import "../styles/rooms.css"
import "../styles/tree.css"
import "../styles/app.css"

// Articles
import DeTodosOsMales	from "./entries-writing/DeTodosOsMales.jsx"
import Budapeste	from "./entries-writing/Budapeste.jsx"
import Pires		from "./entries-writing/Pires.jsx"
import BackHouse	from "./BackHouse.jsx"


const _DEFAULT_IMAGE_SIZE = 400

function RoomImage({_room_image}) {
    return <img src={_room_image} height={_DEFAULT_IMAGE_SIZE} width={_DEFAULT_IMAGE_SIZE} />;
}

function RoomContent({_title, _text}) {
    return (
	<div className="room_content">
	    <h1 className="text_right">
		Writing
	    </h1>
	    <p className="text_left">
		My writing projects.
	    </p>
	    <div className="summary">
		<div className="orange_ball"></div>
		<p>
		    Most recent 
		</p>
	    </div>
	    <div className="text_justify card most-recent-orange">
		<DeTodosOsMales />
	    </div>
	    <div className="text_justify card">
		<Budapeste />
	    </div>
	    <div className="text_justify card">
		<Pires />
	    </div>
	    <BackHouse />
	</div>
    );
}

export default function Writing() {
    return (
	<div id="room_container">
	    <RoomContent />
	    <div className="room_content_image">
		<RoomImage _room_image={_default_room_image} />
	    </div>
	</div>
    )
}
