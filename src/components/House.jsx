
import { Link, Route, useNavigate } from 'react-router-dom'
import AppRoutes                    from '../routes.jsx'
import About                        from './About.jsx'
import React                        from 'react'

import _about_room_gif	from "../assets/rooms/about-animation.gif"
import _spiral_room	from "../assets/rooms/spiral-stairs.webp"
import _computer_room	from "../assets/rooms/computer-room.webp"
import _button_room1	from "../assets/rooms/button-room-1.webp"
import _button_room2	from "../assets/rooms/button-room-2.webp"
import _writing_room	from "../assets/rooms/writing-room.webp"
import _drawing_room	from "../assets/rooms/drawing-room.webp"
import _about_room	from "../assets/rooms/about-room.webp"
import _diary_room	from "../assets/rooms/diary-room.webp"
import _void_room	from "../assets/rooms/void-room.webp"
import _math_room	from "../assets/rooms/math-room.webp"
import _log_room	from "../assets/rooms/log-room.webp"

import '../styles/tooltip.css'
import '../styles/app.css'

const _DEFAULT_ROOM_SIZE = 250;

function Room({_image, _id}) {
    return <img id={_id} src={_image} height={_DEFAULT_ROOM_SIZE} width={_DEFAULT_ROOM_SIZE} />
}

export default function House() {
    const _wip = "/work_in_progress";
    const _house = [
	[[_void_room, "/", "void"], [_computer_room, "/computer", "Computer Room."], [_drawing_room, _wip, "Drawing Room."]],
	[[_writing_room, "/writing", "Writing Room."], [_about_room, "/about", "About Room."], [_math_room, _wip, "Mathematics Room."]],
	[[_spiral_room, _wip, "Spiral Stairs."], [_button_room1, "/buttons", "Neighbors."], [_log_room, "/log", "Log Room."]],
	[[_diary_room, "/diary", "Diary Room."]]
    ];
    const _navigate = useNavigate();
    
    const _change_room = (_directory) => {
	if (_directory != "void") {
	    document.getElementById("/about").src = _about_room;
	    if (_directory === "/about") {
		const _about_room = document.getElementById("/about");
		_about_room.src = _about_room_gif;
		setTimeout(() => {
		    _navigate(_directory);
		}, (1200));
	    }
	    else {
		_navigate(_directory);
	    }
	}
    };
    const _on_room_mouse_enter = (_directory) => {
	if (_directory === "/buttons") {
	    const _buttons_room = document.getElementById("/buttons");
	    _buttons_room.src = _button_room2;
	}
    };
    const _on_room_mouse_leave = (_directory) => {
	if (_directory === "/buttons") {
	    const _buttons_room = document.getElementById("/buttons");
	    _buttons_room.src = _button_room1;
	}
    };
    
    // the follow is a monstrosity.
    return (
	<>
	    <div>
		{_house.map((_i, _j) => (
		    <div key={_j} className="house_floor">
			{_i.map((_k, _l) => (
			    <div key={_l} className="tooltip">
				<button className="room_button" onClick={() => {_change_room(_k[1])}} onMouseEnter={() => {_on_room_mouse_enter(_k[1])}} onMouseLeave={() => {_on_room_mouse_leave(_k[1])}}><span className="tooltip-text">{_k[2]}</span></button>
				<Room _id={_k[1]} _image={_k[0]} />
			    </div>
			))}
		    </div>
		))}
	    </div>
	</>
    )
}
