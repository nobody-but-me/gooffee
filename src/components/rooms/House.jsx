
import { Link, Route, useNavigate } from 'react-router-dom'
import AppRoutes                    from '../../routes.jsx'
import About                        from './About.jsx'
import React                        from 'react'

import about_room_gif	from "../../assets/rooms/about-animation.gif"
import spiral_room	from "../../assets/rooms/spiral-stairs.webp"
import computer_room	from "../../assets/rooms/computer-room.webp"
import button_room1	from "../../assets/rooms/button-room-1.webp"
import button_room2	from "../../assets/rooms/button-room-2.webp"
import writing_room	from "../../assets/rooms/writing-room.webp"
import drawing_room	from "../../assets/rooms/drawing-room.webp"
import about_room	from "../../assets/rooms/about-room.webp"
import diary_room	from "../../assets/rooms/diary-room.webp"
import void_room	from "../../assets/rooms/void-room.webp"
import math_room	from "../../assets/rooms/math-room.webp"
import log_room	from "../../assets/rooms/log-room.webp"

import '../../styles/tooltip.css'
import '../../styles/app.css'

const DEFAULT_ROOM_SIZE = 250;

function Room({image, id}) {
    return <img id={id} src={image} height={DEFAULT_ROOM_SIZE} width={DEFAULT_ROOM_SIZE} />
}

export default function House() {
    const wip = "/work_in_progress";
    const house = [
	// [[void_room, "void", "void"], [computer_room, "/computer", "Computer Room."], [drawing_room, wip, "Drawing Room."]],
	[[void_room, "void", "void"], [computer_room, "/computer", "Computer Room."], [void_room, "void", "void"]],
	[[writing_room, "/writing", "Writing Room."], [about_room, "/about", "About Room."], [math_room, wip, "Mathematics Room."]],
	[[spiral_room, wip, "Spiral Stairs."], [button_room1, "/buttons", "Neighbors."], [log_room, "/log", "Log Room."]],
	[[diary_room, "/diary", "Diary Room."]]
    ];
    const navigate = useNavigate();
    
    const change_room = (directory) => {
	if (directory != "void") {
	    document.getElementById("/about").src = about_room;
	    if (directory === "/about") {
		const about_room = document.getElementById("/about");
		about_room.src = about_room_gif;
		setTimeout(() => {
		    navigate(directory);
		}, (1200));
	    }
	    else {
		navigate(directory);
	    }
	} else { alert("Don't look at the void. Do you want it to look back to you?"); };
    };
    const on_room_mouse_enter = (directory) => {
	if (directory === "/buttons") {
	    const buttons_room = document.getElementById("/buttons");
	    buttons_room.src = button_room2;
	}
    };
    const on_room_mouse_leave = (directory) => {
	if (directory === "/buttons") {
	    const _buttons_room = document.getElementById("/buttons");
	    buttons_room.src = button_room1;
	}
    };
    
    // the follow is a monstrosity.
    return (
	<>
	    <div>
		{house.map((i, j) => (
		    <div key={j} className="house_floor">
			{i.map((k, l) => (
			    <div key={l} className="tooltip">
				<button className="room_button" onClick={() => {change_room(k[1])}} onMouseEnter={() => {on_room_mouse_enter(k[1])}} onMouseLeave={() => {on_room_mouse_leave(k[1])}}><span className="tooltip-text">{k[2]}</span></button>
				<Room id={k[1]} image={k[0]} />
			    </div>
			))}
		    </div>
		))}
	    </div>
	</>
    )
}
