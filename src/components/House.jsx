
import { Link, Route, useNavigate } from 'react-router-dom'
import AppRoutes                    from '../routes.jsx'
import About                        from './About.jsx'
import React                        from 'react'

import _about_room		from "../assets/rooms/about-room.webp"
import _about_room_gif		from "../assets/rooms/about-animation.gif"
import _writing_room		from "../assets/rooms/writing-room.webp"
import _diary_room		from "../assets/rooms/diary-room.webp"
import _computer_room		from "../assets/rooms/computer-room.webp"
import _drawing_room		from "../assets/rooms/drawing-room.webp"
import _void_room		from "../assets/rooms/void-room.webp"
import _spiral_room	        from "../assets/rooms/spiral-stairs.webp"
import _log_room		from "../assets/rooms/log-room.webp"
import _button_room1		from "../assets/rooms/button-room-1.webp"
import _button_room2		from "../assets/rooms/button-room-2.webp"

import '../styles/tooltip.css'
import '../styles/app.css'

const _DEFAULT_ROOM_SIZE = 350;

function Room({_image}) {
    return <img src={_image} height={_DEFAULT_ROOM_SIZE} width={_DEFAULT_ROOM_SIZE} />
}

export default function House() {
    const _wip = "/work_in_progress";
    const _house = [
	[[_computer_room, _wip, "Computer Room."]],
	[[_writing_room, "/writing", "Writing Room."], [_about_room, "/about", "About Room."], [_drawing_room, _wip, "Drawing Room."]],
	[[_spiral_room, _wip, "Spiral Stairs."], [_button_room1, _wip, "Neighbors."], [_log_room, _wip, "Log Room."]],
	[[_diary_room, _wip, "Diary Room."]]
    ];
    const _navigate = useNavigate();
    const _change_room = (_directory) => {
	if (_directory != "void") {
	    _navigate(_directory);
	}
    };
    
    return (
	<>
	    <div>
		{_house.map((_i, _j) => (
		    <div key={_j} className="house_floor">
			{_i.map((_k, _l) => (
			    <div key={_l} className="tooltip">
				<button className="room_button" onClick={() => {_change_room(_k[1])}}><span className="tooltip-text">{_k[2]}</span></button>
				<Room _image={_k[0]} />
			    </div>
			))}
		    </div>
		))}
	    </div>
	</>
    )
}
