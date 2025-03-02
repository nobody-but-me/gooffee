
import { useEffect } from 'react'

import _about_room		from "./assets/rooms/about-room.webp"
import _about_room_gif		from "./assets/rooms/about-animation.gif"
import _writing_room		from "./assets/rooms/writing-room.webp"
import _diary_room		from "./assets/rooms/diary-room.webp"
import _computer_room		from "./assets/rooms/computer-room.webp"
import _drawing_room		from "./assets/rooms/drawing-room.webp"
import _void_room		from "./assets/rooms/void-room.webp"
import _spiral_room	        from "./assets/rooms/spiral-stairs.webp"
import _log_room		from "./assets/rooms/log-room.webp"
import _button_room1		from "./assets/rooms/button-room-1.webp"
import _button_room2		from "./assets/rooms/button-room-2.webp"

const _DEFAULT_ROOM_SIZE   = 350;
const _MAX_ROOMS_PER_FLOOR = 3;


function _room({_image}) {
    return <img src={_image} height={_DEFAULT_ROOM_SIZE} width={_DEFAULT_ROOM_SIZE} />
}

function _redirect_to_room(_room_path) {
    console.log({_room_path});
    if (_room_path === "void") {
	console.log("void");
	return;
    }
}

function House() {
    const _house = [
	[_computer_room],
	[_writing_room, _about_room, _drawing_room],
	[_spiral_room, _button_room1, _log_room],
	[_diary_room]
    ];
    const _house_room_path = [
	["void"],
	["void", "https://asgooffeeasme.neocities.org", "void"],
	["void", "void", "void"],
	["void"]
    ];
    
    return (
	<div>
	    {_house.map((_i, _j) => (
		<div key={_j} className="house_floor">
		    {_i.map((_k, _l) => (
			<_room key={_l} _image={_k} />
		    ))}
		</div>
	    ))}
	</div>
    )
}

export default House
