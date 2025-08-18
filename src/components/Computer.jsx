
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
	    <h2 className="text_justify card">
		"Computering" projects.
	    </h2>
	    <div className="room_content_image">
		<RoomImage _room_image={_default_room_image} />
	    </div>
	    <p className="text_justify card">
		I like to code, so this page is going to be updated very often. The most recent posts will have a * on the title.
	    </p>
	    <div className="text_justify card">
		<ul>
		    <li>
			GOLF GAME
			<ul>
			    <li>
				BLOG
				<ul>
				    <li><Link to='/Golf03-06-2025'>Post 06/03/2025</Link> *</li>
				    <li><Link to='/Golf23-05-2025'>Post 05/23/2025</Link></li>
				</ul>
			    </li>
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
	</div>
    )
}
