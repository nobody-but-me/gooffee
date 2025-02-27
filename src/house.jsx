
import { useState } from 'react'

import _about_room		from "./assets/rooms/about-room.webp"
import _about_room_gif		from "./assets/rooms/about-animation.gif"
import _writing_room		from "./assets/rooms/writing-room.webp"
import _diary_room		from "./assets/rooms/diary-room.webp"
import _computer_room		from "./assets/rooms/computer-room.webp"
import _drawing_room		from "./assets/rooms/drawing-room.webp"
import _void_room		from "./assets/rooms/void-room.webp"
import _spiral_stairs_room	from "./assets/rooms/spiral-stairs.webp"
import _log_room		from "./assets/rooms/log-room.webp"
import _button_room1		from "./assets/rooms/button-room-1.webp"
import _button_room2		from "./assets/rooms/button-room-2.webp"


const _DEFAULT_ROOM_SIZE   = 350;
const _MAX_ROOMS_PER_FLOOR = 3;

function _room({_room}) {
    return <img src={_room} height={_DEFAULT_ROOM_SIZE} width={_DEFAULT_ROOM_SIZE} />
}

function _house_floor({_rooms}) {
    return (
	<div id="house_floor">
	    {_rooms.map((_r, _index) => <div key={_index}> <_room _room={_r} /> </div>)}
	</div>
    )
}

function House() {
    const _house = [
	[_void_room, _computer_room, _void_room],
	[_writing_room, _about_room, _drawing_room],
	[_spiral_stairs_room, _button_room1, _log_room],
	[_void_room, _diary_room, _void_room]
    ];
    return (
	<>
	    <div>
		<_house_floor _rooms={_house[0]} />
		<_house_floor _rooms={_house[1]} />
		<_house_floor _rooms={_house[2]} />
		<_house_floor _rooms={_house[3]} />
	    </div>
	</>
    )
}

export default House
